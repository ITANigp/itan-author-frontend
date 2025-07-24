import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContentPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#272a4f] rounded-full mb-4">
              <Image
                src="/images/logo.png"
                alt="ITAN Logo"
                width={60}
                height={20}
                className=""
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Content Policy
            </h1>
            <div className="w-24 h-1 bg-[#E50913] mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              At ITAN Global Publishing ("ITAN", "we", "our", or "us"), our
              mission is to empower African writers and storytellers by
              providing a platform to publish, distribute, and monetize their
              work. To maintain the integrity of our platform and community, we
              have established the following content policy to guide what may
              and may not be published on ITAN.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Scope of This Policy
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  This Content Policy applies to all forms of content submitted,
                  published, or distributed via the ITAN platform, including but
                  not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Books (print, digital, audio)</li>
                  <li>Descriptions, titles, and metadata</li>
                  <li>Author bios and promotional materials</li>
                  <li>User reviews and comments</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Acceptable Content Guidelines
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  We welcome a wide range of genres, styles, and expressions
                  rooted in African experiences and beyond. However, content
                  must:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Be original or properly licensed</li>
                  <li>Respect copyright and intellectual property laws</li>
                  <li>Be free from plagiarism</li>
                  <li>Reflect accurate metadata and truthful authorship</li>
                  <li>
                    Comply with local and international publishing standards
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prohibited Content
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  We do not allow content that:
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    A. Violates Laws or Regulations
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      Promotes hate speech, terrorism, or illegal activity
                    </li>
                    <li>Contains defamation, libel, or slander</li>
                    <li>Violates privacy or data protection laws</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    B. Is Harmful or Exploitative
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      Promotes racism, tribalism, xenophobia, or discrimination
                    </li>
                    <li>Contains sexually explicit or pornographic material</li>
                    <li>Exploits minors or vulnerable individuals</li>
                    <li>Incites violence or self-harm</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    C. Is Misleading or Deceptive
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      Involves impersonation, deepfakes, or manipulated
                      identities
                    </li>
                    <li>
                      Contains intentionally misleading claims, fake
                      endorsements, or false advertising
                    </li>
                    <li>Uses clickbait, keyword stuffing, or spammy titles</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    D. Infringes on Rights
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      Violates third-party copyrights, trademarks, or
                      intellectual property
                    </li>
                    <li>
                      Uploads content you do not own or have the right to
                      distribute
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Religious and Political Content
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  We support free expression, including religious and political
                  content. However, such content must:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>
                    Avoid hate speech or incitement against other groups or
                    faiths
                  </li>
                  <li>
                    Be clearly labelled as opinion or fiction (when appropriate)
                  </li>
                  <li>
                    Follow the same editorial, copyright, and safety standards
                    as other content
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  5
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  AI-Generated and Assisted Content
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  We allow content created or assisted by artificial
                  intelligence (AI) tools under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>
                    The author must disclose any significant AI assistance
                  </li>
                  <li>
                    The content must meet our originality and editorial
                    standards
                  </li>
                  <li>
                    The content must not mislead readers into believing it is
                    fully human-written if it is not
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  6
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Moderation and Enforcement
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  ITAN reserves the right to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>
                    Remove or disable access to any content that violates this
                    policy
                  </li>
                  <li>
                    Suspend or terminate accounts involved in repeated or severe
                    violations
                  </li>
                  <li>
                    Report illegal content to relevant authorities when required
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We aim to review flagged content promptly and fairly. Authors
                  may appeal decisions by contacting our support team.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  7
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Community Standards for Readers and Reviewers
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">Readers and users must:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>
                    Use respectful, constructive language in reviews and
                    discussions
                  </li>
                  <li>Avoid hate speech, harassment, or spam</li>
                  <li>Not impersonate others or post false claims</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  8
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Reporting Violations
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  To report content you believe violates this policy, please
                  contact:
                </p>
                <div className="flex items-center ml-1 mt-2 text-gray-800">
                  <svg
                    className="w-5 h-5 text-[#E50913] mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="font-medium">Email: </span>
                  <Link
                    href="mailto:contents@itan.app"
                    className="ml-1 text-[#E50913] hover:underline"
                  >
                    contents@itan.app
                  </Link>
                </div>
                <p className="text-gray-700 mt-4">
                  We investigate all reports in line with this policy and
                  applicable laws.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  9
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Policy Updates
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700">
                  We may update this Content Policy from time to time. When we
                  do, we will notify users via email or platform alerts, where
                  applicable.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  10
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Contact Us
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-3">
                  For questions or concerns about this policy, contact us at:
                </p>
                <p className="text-gray-800 font-medium">
                  ITAN Global Publishing
                </p>
                <div className="flex items-center ml-1 mt-2">
                  <svg
                    className="w-5 h-5 text-[#E50913] mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="font-medium text-gray-700">Email: </span>
                  <Link
                    href="mailto:support@itan.app"
                    className="ml-1 text-[#E50913] hover:underline"
                  >
                    support@itan.app
                  </Link>
                </div>
              </div>
            </div>

            {/* Document Version Footer */}
            <div className="mt-16 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Last updated: July 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPolicy;
