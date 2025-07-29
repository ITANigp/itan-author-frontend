"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { api } from "@/utils/auth/authorApi";

import directUploadFile from "@/utils/updateAuthorImg";

const KycStep1 = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("/images/avatar.png");
  const [editing, setEditing] = useState(false); 
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setEditing(true); // An image has been selected, so we're in "editing" mode
  };

  const handleSubmit = async () => {
    setUploading(true); // Start uploading/processing

    try {
      if (imageFile) {
        // Only attempt image upload if a file is selected
        const signedId = await directUploadFile(imageFile);
        const formData = new FormData();
        formData.append("author[author_profile_image]", signedId);
        await api.patch("/authors/profile", formData);
      }

      // Always update the KYC step regardless of image upload, if it's optional
      // Adjust kyc_step value if your backend expects 0 for "completed step 1"
      await api.patch("/authors/kyc/update-step", { author: { kyc_step: 1 } });

      // IMPORTANT: Refresh or update client-side stored author info
      // This is crucial to ensure storedAuthorInfo.kycStep is accurate for navigation.
      // Re-fetch author data to get the very latest, especially kyc_step


      const { data: updatedAuthorData } = await api.get("/authors/profile");

      
      // Use the setAuthorInfo utility function to update localStorage and the cache

      
      // Now, get the *current* stored info after it's been updated.
      // We pass it directly to console.log and router.push

      console.log("Current Author Info after update: ", updatedAuthorData);

      // Navigate to the next step using the now-updated kycStep
      // Use currentAuthorInfo?.id and currentAuthorInfo?.kyc_step for safety
      router.push(
        `/author/${currentAuthorInfo?.id}/kyc/step-${currentAuthorInfo?.kyc_step + 1}`
      );
    } catch (err) {
      console.error("Operation failed", err);
      alert("Operation failed. Please try again."); // More generic message
    } finally {
      setUploading(false); // End uploading/processing
      setEditing(false); // Exit editing mode after save/next
      setImageFile(null); // Clear the file
      setPreviewUrl("/images/avatar.png"); // Reset preview
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setImageFile(null);
    setPreviewUrl("/images/avatar.png");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-between px-4 py-10 relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center max-w-4xl mx-auto w-full">
        <Image src="/images/logo.png" width={40} height={40} alt="Itan" />
        <span className="text-gray-600 text-sm sm:text-base font-medium">
          Step 1 of 3
        </span>
      </header>

      {/* Main Content */}
      <main className="mt-24 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Upload Your Profile Picture
        </h1>
        <p className="text-gray-600 mb-6">
          This helps us personalize your experience. (Optional)
        </p>

        {/* Avatar Section */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="rounded-full overflow-hidden shadow-lg border-2 border-gray-300 w-full h-full bg-gray-100 relative">
            <Image
              src={previewUrl}
              alt="Profile Preview"
              layout="fill"
              objectFit="cover"
              className="transition duration-300"
            />
          </div>

          <button
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-0 right-0 p-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-100 transition"
            aria-label="Change profile picture" // Added for accessibility
          >
            <FontAwesomeIcon icon={faCamera} className="text-gray-700" />
          </button>

          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Action Buttons */}
        {editing && (
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handleSubmit}
              disabled={uploading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50"
            >
              {uploading ? "Saving..." : "Save Picture"}
            </button>
            <button
              onClick={handleCancel}
              disabled={uploading}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        )}
      </main>

      {/* Unified Footer/Navigation Button */}
      <footer className="w-full flex justify-center mt-auto">
        {/* This button appears when not in "editing" mode or after saving */}
        {!editing && (
          <button
            onClick={handleSubmit} // Triggers submission for moving to next step
            disabled={uploading}
            className="bg-[#E50913] hover:bg-[#ba2129] text-white font-semibold py-3 px-16 rounded-lg shadow-lg transition duration-300 ease-in-out disabled:opacity-50"
          >
            {uploading ? "Processing..." : "Next"}
          </button>
        )}
      </footer>
    </div>
  );
};

export default KycStep1;
