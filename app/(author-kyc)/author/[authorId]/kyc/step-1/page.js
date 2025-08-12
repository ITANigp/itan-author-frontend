"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import {
  updateAuthorProfile,
  api,
  getAuthorProfile,
} from "@/utils/auth/authorApi";
import directUploadFile from "@/utils/updateAuthorImg";
import { nigeriaStates } from "@/constants/nigeriaStates";

export default function ProfileForm() {
  const router = useRouter();
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    country: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("/images/avatar.png");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    // Fetch profile data to pre-fill the form and image
    const fetchAndSetProfile = async () => {
      try {
        const { data } = await getAuthorProfile();
        const profileData = data?.data;
        if (profileData) {
          setForm({
            first_name: profileData.first_name || "",
            last_name: profileData.last_name || "",
            phone_number: profileData.phone_number || "",
            location: profileData.location || "",
            country: profileData.country || "",
          });
          setPreviewUrl(
            profileData.author_profile_image_url || "/images/avatar.png"
          );
        }
      } catch (err) {
        console.error("Failed to fetch profile", err);
        setError("Failed to load profile data.");
      }
    };
    fetchAndSetProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setValidationErrors({});

    const errors = {};
    if (!form.first_name) errors.first_name = "First Name is required.";
    if (!form.last_name) errors.last_name = "Last Name is required.";
    if (!form.phone_number) errors.phone_number = "Phone Number is required.";
    if (!form.location) errors.location = "Address is required.";
    if (!form.country) errors.country = "Country is required.";
    if (!form.state) errors.state = "State is required.";
    if (imageFile === null) errors.image = "Profile picture is required.";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setLoading(false);
      return;
    }

    try {
      // 1. Upload the profile picture
      const signedId = await directUploadFile(imageFile);
      const imageFormData = new FormData();
      imageFormData.append("author[author_profile_image]", signedId);
      await api.patch("/authors/profile", imageFormData);

      // 2. Update the user's profile information
      await updateAuthorProfile(form);

      // 3. Update the KYC step
      await api.patch("/authors/kyc/update-step", {
        author: { kyc_step: 1 },
      });

      // 4. Redirect to the next KYC step
      const authorProfileResponse = await getAuthorProfile();
      const authorData = authorProfileResponse.data.data;
      router.push(
        `/author/${authorData.id}/kyc/step-${authorData.kyc_step + 1}`
      );
    } catch (err) {
      console.error(
        "Update or KYC step failed:",
        err?.response?.data || err?.message || err
      );
      const errorMessage =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="text-left">
          <Image src="/images/logo.png" width={30} height={20} alt="logo" />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-lg font-medium">1/3</h1>
          <h2 className="text-xl font-semibold">Update your profile</h2>
          <p className="text-gray-500 text-sm">
            Add a profile picture for us to know you more
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <label className="relative cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src={previewUrl}
                width={80}
                height={80}
                alt="profile avatar"
                className={`${previewUrl === "/images/avatar.png" ? "h-14 w-14" : "w-full h-full"} object-cover`}
              />
            </div>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <Image
              src="/images/camera.png"
              width={24}
              height={24}
              alt="camera icon"
              className="absolute w-6 h-6 bottom-0 right-0 text-white p-1 rounded-full"
            />
          </label>
        </div>
        {validationErrors.image && (
          <p className="text-red-500 text-xs mt-1 text-center">
            {validationErrors.image}
          </p>
        )}
        {error && (
          <div className="text-red-600 text-sm mt-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={form.first_name}
              onChange={handleChange}
              className={`w-full placeholder:text-gray-400 border rounded-md p-2 focus:outline-none focus:ring ${validationErrors.first_name ? "border-red-500" : "focus:ring-blue-300"}`}
            />
            {validationErrors.first_name && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.first_name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={form.last_name}
              onChange={handleChange}
              className={`w-full border placeholder:text-gray-400 rounded-md p-2 focus:outline-none focus:ring ${validationErrors.last_name ? "border-red-500" : "focus:ring-blue-300"}`}
            />
            {validationErrors.last_name && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.last_name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Enter your phone Number"
              value={form.phone_number}
              onChange={handleChange}
              className={`w-full border placeholder:text-gray-400 rounded-md p-2 focus:outline-none focus:ring ${validationErrors.phone_number ? "border-red-500" : "focus:ring-blue-300"}`}
            />
            {validationErrors.phone_number && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.phone_number}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your address"
              value={form.location}
              onChange={handleChange}
              className={`w-full border placeholder:text-gray-400 rounded-md p-2 focus:outline-none focus:ring ${validationErrors.location ? "border-red-500" : "focus:ring-blue-300"}`}
            />
            {validationErrors.location && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.location}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring ${validationErrors.state ? "border-red-500" : "focus:ring-blue-300"}`}
              >
                <option value="">Select your State</option>
                {nigeriaStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {validationErrors.state && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.state}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring ${validationErrors.country ? "border-red-500" : "focus:ring-blue-300"}`}
              >
                <option value="">Select your Country</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              {validationErrors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.country}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-400 text-white py-2 rounded-md font-semibold hover:bg-gray-500 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
