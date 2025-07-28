"use client";

import Image from "next/image";
import React, { useState } from "react";

function App() {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleDoneClick = () => {
    // In a real application, you would typically submit this agreement
    // For now, we'll just log the agreement status.
    console.log("User agreed:", agreed);
    alert(`Agreement status: ${agreed ? "Agreed" : "Not Agreed"}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 max-w-3xl w-full border-4 border-blue-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <Image src="/images/logo.png" width={40} height={40} alt="Itan"/>
          <span className="text-gray-600 text-lg">3/3</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-gray-800">
          Author-Publisher Agreement
        </h2>

        {/* Introduction */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          By signing up and uploading content to ITAN Global Publishing, you
          agree that:
        </p>

        {/* Agreement Sections */}
        <div className="space-y-6 text-gray-700 text-sm md:text-base">
          {/* 1. GRANT OF RIGHTS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">1. GRANT OF RIGHTS</h3>
            <p className="mb-2">
              <span className="font-semibold">1.1</span> The Author grants ITAN
              the non-exclusive right to publish, reproduce, distribute, and
              make the Author's Work available in digital formats (ebooks and
              audiobooks) globally.
            </p>
            <p>
              <span className="font-semibold">1.2</span> This grant includes the
              right to market, promote, and distribute the Work through ITAN's
              platform and affiliated networks.
            </p>
            <p>
              <span className="font-semibold">1.3</span> The Author retains full
              ownership and copyright of their Work.
            </p>
          </div>

          {/* 2. AUTHOR'S WARRANTIES & REPRESENTATIONS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              2. AUTHOR'S WARRANTIES & REPRESENTATIONS
            </h3>
            <p className="mb-2">
              <span className="font-semibold">2.1</span> The Work is the
              original creation of the Author and does not contain any
              plagiarized, stolen, or misappropriated content.
            </p>
            <p className="mb-2">
              <span className="font-semibold">2.2</span> The Author has not
              infringed on the copyright, trademark, privacy, or intellectual
              property rights of any other person or entity.
            </p>
            <p className="mb-2">
              <span className="font-semibold">2.3</span> If any part of the Work
              is taken from a third-party source (e.g., quotes, excerpts), such
              use is done with proper authorization and attribution.
            </p>
            <p className="mb-2">
              <span className="font-semibold">2.4</span> The Work is not
              defamatory, libelous, obscene, or in violation of any applicable
              law.
            </p>
            <p>
              <span className="font-semibold">2.5</span> The Author shall
              indemnify and hold harmless ITAN and its affiliates from any and
              all claims, damages, liabilities, or legal actions arising from a
              breach of these warranties.
            </p>
          </div>

          {/* 3. LIABILITY FOR PLAGIARIZED OR STOLEN CONTENT */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              3. LIABILITY FOR PLAGIARIZED OR STOLEN CONTENT
            </h3>
            <p className="mb-2">
              <span className="font-semibold">3.1</span> ITAN bears no legal or
              financial responsibility for any claims, losses, damages, or
              lawsuits resulting from plagiarized, stolen, or infringing works
              uploaded by the Author.
            </p>
            <p className="mb-2">
              <span className="font-semibold">3.2</span> In the event a Work is
              found to be stolen or plagiarized, the Author assumes full
              responsibility for all liabilities, including but not limited to
              legal claims, fines, settlements, and reputational damage.
            </p>
            <p>
              <span className="font-semibold">3.3</span> ITAN reserves the right
              to immediately remove any Work found or alleged to be plagiarized
              or in violation of intellectual property laws.
            </p>
          </div>

          {/* 4. TERM AND TERMINATION */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              4. TERM AND TERMINATION
            </h3>
            <p className="mb-2">
              <span className="font-semibold">4.1</span> This Agreement remains
              in effect until terminated by either party with 30 days written
              notice.
            </p>
            <p className="mb-2">
              <span className="font-semibold">4.2</span> Upon termination, ITAN
              shall remove the Work from its platform and affiliated networks
              within a reasonable period, not exceeding 60 days.
            </p>
            <p>
              <span className="font-semibold">4.3</span> Termination does not
              absolve the Author of liability for previously published
              infringing or unauthorized content.
            </p>
          </div>

          {/* 5. MODIFICATIONS AND UPDATES */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              5. MODIFICATIONS AND UPDATES
            </h3>
            <p className="mb-2">
              <span className="font-semibold">5.1</span> ITAN reserves the right
              to update its publishing policies and platform terms. Authors will
              be notified of any material changes.
            </p>
            <p>
              <span className="font-semibold">5.2</span> Continued use of the
              platform by the Author shall constitute acceptance of such
              changes.
            </p>
          </div>

          {/* 6. GOVERNING LAW AND DISPUTE RESOLUTION */}
          <div>
            <h3 className="font-bold text-gray-800 mb-2">
              6. GOVERNING LAW AND DISPUTE RESOLUTION
            </h3>
            <p className="mb-2">
              <span className="font-semibold">6.1</span> This Agreement shall be
              governed by and construed in accordance with the laws of the
              Federal Republic of Nigeria (or applicable jurisdiction).
            </p>
            <p>
              <span className="font-semibold">6.2</span> Any disputes arising
              out of this Agreement shall be resolved through mediation, and if
              unresolved, settled in the courts of competent jurisdiction in
              Lagos, Nigeria (or applicable region).
            </p>
          </div>
        </div>

        {/* Checkbox and Confirmation */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agreeCheckbox"
              className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              checked={agreed}
              onChange={handleAgreeChange}
            />
            <label
              htmlFor="agreeCheckbox"
              className="ml-2 text-gray-800 text-base font-medium"
            >
              I Agree
            </label>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            By clicking "I Agree," you confirm you have read and accepted the
            full Author Agreement.
          </p>
        </div>

        {/* Done Button */}
        <div className="flex justify-end">
          <button
            onClick={handleDoneClick}
            className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
