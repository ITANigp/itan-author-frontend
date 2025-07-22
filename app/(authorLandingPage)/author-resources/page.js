import React from "react";
import Image from "next/image";

const AuthorResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#272a4f] rounded-full mb-4">
              <Image
                src="/images/logo.svg"
                alt="ITAN Logo"
                width={140}
                height={56}
                className="w-auto h-16 md:h-18 lg:h-24 xl:h-32"
                priority
                sizes="140px"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to craft optimized book descriptions that boost your book
            </h1>
            <div className="w-24 h-1 bg-[#E50913] mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Section 1 */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              <span className="bg-white text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold sm:mr-3 flex-shrink-0 self-start sm:self-center">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                How to craft optimized book descriptions that boost your book's
                visibility and discoverability on AI-driven search platforms.
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              ITAN not only publish your digital books, but also ensures they're
              easily discoverable by putting them in front of the right readers.
              Readers often search for books online using keywords and tags that
              describe what they're looking for. To make sure your book is
              found, it's important to research the best keywords and tags that
              describe your book—and include them in your book's description and
              summary. We're working on an AI-powered book recommendation tool
              that will automatically generate an optimized book description
              when you upload your manuscript. But while that's in development,
              here's a simple step-by-step process to help you generate an
              SEO-optimized book description manually:
            </p>
          </div>
        </div>

        {/* How to Create Steps */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              How to Create an Optimized Book Description (Step-by-Step)
            </h2>
          </div>
          <div className="p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <span className="text-gray-700">
                  Visit https://chatgpt.com and create a free account (if you
                  don't have one already).
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">
                  In the Ask Anything box, click the plus (+) sign.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">
                  When the menu appears, select Add photo or files.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">
                  Locate and upload your manuscript from your device.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  5
                </span>
                <span className="text-gray-700">
                  Wait for the file to upload completely.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  6
                </span>
                <span className="text-gray-700">
                  Then type this prompt:"Generate a 900-character blurb from
                  this book, integrating appropriate keywords to make it fully
                  SEO-optimized for discoverability on ITAN, Google, Bing, and
                  AI-powered search platforms."
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  7
                </span>
                <span className="text-gray-700">
                  Copy the generated blurb, paste it into the space provided for
                  description, and format it into three short paragraphs for
                  clarity and readability.
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold sm:mr-3 flex-shrink-0 self-start sm:self-center">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                How to Generate Book Keywords and Tags
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Keywords and Tags are vital for making books visible as they serve
              as searchable keywords, directly connecting your book to potential
              readers. By using relevant tags, you improve your book's
              discoverability in search results and ensure it reaches your
              targeted audience. Essentially, well-chosen tags act as powerful
              metadata, making your book easily findable by those most likely to
              enjoy it.
            </p>
          </div>
        </div>

        {/* Steps to Generate Tags */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="bg-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Steps to Generate book Tags
            </h2>
          </div>
          <div className="p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <span className="text-gray-700">
                  Visit https://chatgpt.com and create a free account (if you
                  don't have one already).
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">
                  In the Ask Anything box, click the plus (+) sign.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">
                  When the menu appears, select Add photo or files.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">
                  Locate and upload your manuscript from your device.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  5
                </span>
                <span className="text-gray-700">
                  Wait for the file to upload completely.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  6
                </span>
                <span className="text-gray-700">
                  Then type this prompt: "Generate 6 tags for the uploaded
                  manuscript."
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  7
                </span>
                <span className="text-gray-700">
                  Copy the generated tags and paste them one by one into the tag
                  field, pressing Enter after each tag.
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              <span className="bg-white text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold sm:mr-3 flex-shrink-0 self-start sm:self-center">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                Please add some of these words under the TAGS section
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                <span className="text-gray-700">Best afrocentic books</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                <span className="text-gray-700">
                  African books and their authors
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                <span className="text-gray-700">Afrocentric novels</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                <span className="text-gray-700">
                  Afrocentric children books – If your book is for kids
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                <span className="text-gray-700">African romance books</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                <span className="text-gray-700">Afrocentric literature</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                <span className="text-gray-700">
                  Arican mystery books – if your book is of the mystery Genre
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  8
                </span>
                <span className="text-gray-700">
                  Afrocentric Romance Book – If your book genre is Romance
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg col-span-1 md:col-span-2">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  9
                </span>
                <span className="text-gray-700">African Christian fiction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-l-4 border-[#E50913]">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-[#E50913] mt-1 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-700 leading-relaxed">
              You can also be creative and generate more tags and keywords that
              help our algorithm to make your book visible and easily
              discovered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorResources;
