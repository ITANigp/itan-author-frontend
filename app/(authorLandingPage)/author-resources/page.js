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
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-4">
            <div className="flex items-center">
              <span className="bg-white text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                1
              </span>
              <h2 className="text-xl font-semibold text-white">
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
            <h2
              className="text-xl font-semibold text-white"
              id="book-description"
            >
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
                  Write a description or summary of your book in your own words.
                  Keep it under 1,000 words.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">
                  Visit https://chatgpt.com and create a free account (if you
                  don’t have one already).
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">
                  Copy and paste your 1,000-word description into the chat space
                  provided, then prompt GPT to edit your write-up.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">
                  To edit your description, type the following prompt—followed
                  by your description:
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  5
                </span>
                <span className="text-gray-700">
                  "Edit this book description, and integrate these keywords-
                  (african story, afrocentric fiction) to make it fully
                  SEO-optimized for discoverability on Google, Bing, and
                  AI-powered search platforms: (followed by the book summary you
                  have already)"
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  6
                </span>
                <span className="text-gray-700">
                  Copy and paste the newly generated and optimized description
                  into ITAN description space provided and break it into{" "}
                  <strong>three two or short paragraphs</strong> for clarity and
                  readability.
                  <p className="py-2">
                    For example: Assume this is my book description
                  </p>
                  <p>
                    <strong>
                      Born as the daughter of a warrior duke, Idanni was
                      destined for more than a life within the confines of the
                      Bantu Kingdom&#39;s harem. Beauty and cunning were her
                      weapons, and ambition her driving force. She seduced a
                      king&#39;s son, endured exile in a convent, and clawed her
                      way back to court, all in pursuit of a single, unwavering
                      goal: the throne. But Idanni&#39;s ascent is paved with
                      betrayal and blood—even the life of her own child is a
                      mere pawn in her ruthless game.
                    </strong>
                  </p>
                  <p className="py-2">
                    To edit this description and optimize it for search, I will
                    prompt ChatGPT to edit it as follows:
                  </p>
                  <p className="italic">
                    Edit this book description, and integrate these keywords-
                    (african story, afrocentric fiction) to make it fully
                    SEO-optimized for discoverability on Google, Bing, and
                    AI-powered search platforms: – Born as the daughter of a
                    warrior duke, Idanni was destined for more than a life
                    within the confines of the Bantu Kingdom&#39;s harem. Beauty
                    and cunning were her weapons, and ambition her driving
                    force. She seduced a king&#39;s son, endured exile in a
                    convent, and clawed her way back to court, all in pursuit of
                    a single, unwavering goal: the throne. Copy and paste the
                    newly generated description into ITAN description box,
                    ensure it does not exceed 1,000 and break it into three two
                    or short paragraphs for clarity and readability.
                  </p>
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
            <div className="flex items-center">
              <span className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                2
              </span>
              <h2
                className="text-xl font-semibold text-white"
                id="book-keywords"
              >
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
            <h2 className="text-xl font-semibold text-white" id="book-tags">
              Steps to Generate book Tags
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Creating tags for a book is a mix of strategy and search
              psychology—you’re essentially trying to guess what words or
              phrases people would type when looking for a book like yours.
              <span>Here’s a step-by-step process:</span>
            </p>
          </div>
          <div className="p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <span className="text-gray-700">
                  <strong>Understand your book’s core elements</strong>
                  <ul>
                    Break down the main aspects of your story:
                    <li>
                      <strong>Genre: e.g.,</strong> fantasy, romance, thriller,
                      historical fiction, children stories etc.
                    </li>
                    <li>
                      <strong>Setting: e.g.,</strong> Lagos, Victorian London,
                      post-apocalyptic desert.
                    </li>
                    <li>
                      <strong>Themes: e.g.,</strong> revenge, redemption,
                      forbidden love, survival, adventure, action.
                    </li>
                    <li>
                      <strong>Audience: e.g.,</strong> children, young adult,
                      African diaspora readers, women
                    </li>
                    <li>
                      <strong>Tone/Style: e.g.,</strong> dark humour, poetic,
                      fast-paced.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">
                  <strong>Think like a reader, not the author</strong>
                  <ul>
                    <li>
                      If I didn’t know the title, what would I search for?
                    </li>
                    <li>
                      Use phrases like “African fantasy novel” instead of “My
                      magical story.” “African Romance fiction “instead of just
                      romance. “Afrocentric fantasy fiction” instead of just
                      fiction.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">
                  <strong>Use a mix of broad and niche keywords</strong>
                  <ul>
                    <li>
                      <strong>Broad tags</strong> help reach a wide audience
                      (e.g., “romance”,“fantasy”).
                    </li>
                    <li>
                      <strong>Niche tags</strong> target specific, ready-to-buy
                      readers (e.g., “African warrior princess,” “Christian
                      fiction romance”).
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">
                  <strong>
                    Include cultural, location, and identity markers.
                  </strong>
                  <ul>
                    <li>
                      If your book draws from a specific culture, region, or
                      heritage, include it: Afrofuturism, Yoruba mythology,
                      Nigerian fiction, African fiction, Black historical
                      romance.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  5
                </span>
                <span className="text-gray-700">
                  <strong>Make them specific and multi-word</strong>
                  <ul>
                    Instead of:
                    <li>“Love” → use “enemies-to-lovers romance”</li>
                    <li>“War” → use “African medieval war saga”</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  6
                </span>
                <span className="text-gray-700">
                  <strong>
                    Use available tools to find what readers search for
                  </strong>
                  <ul>
                    <li>
                      <strong>Google Search:</strong> Offers keyword
                      autocomplete suggestions based what you type
                    </li>
                    <li>
                      <strong>Publisher Rocket / KDSpy:</strong> Paid tools for
                      keyword research.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  7
                </span>
                <span className="text-gray-700">
                  <strong>Limit and prioritize</strong>
                  <ul>
                    <li>
                      Put your most relevant, highest-traffic keywords first.
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                  8
                </span>
                <span className="text-gray-700">
                  <strong>
                    Please add some of these keyword suggestions under the TAGS
                    section
                  </strong>
                  <ul>
                    <li>1. Best Afrocentric book</li>
                    <li>2. African books and their authors</li>
                    <li>3. Afrocentric novel</li>
                    <li>
                      4. Afrocentric children’s books – If your book is for kids
                    </li>
                    <li>5. African romance book – If your book is Romance</li>
                    <li>6. Afrocentric literature</li>
                    <li>
                      7. African mystery book – if your book is of the mystery
                      Genre
                    </li>
                    <li>
                      8. Afrocentric Romance Book – If your book genre is
                      Romance
                    </li>
                    <li>
                      9. African Christian fiction - If your book is Christian
                      Fiction
                    </li>
                  </ul>
                </span>
              </li>
            </ol>
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
                  Add the keyword “Afrocentric novel” and “African Stories” to
                  your list of keywords and tags. You can also be creative and
                  generate additional relevant keywords and tags that will help
                  our algorithm make your book more visible and easily
                  discoverable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-4">
            <div className="flex items-center">
              <span className="bg-white text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                3
              </span>
              <h2 className="text-xl font-semibold text-white">
                Keyword Examples for an African historical fantasy novel about a
                warrior princess:
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                <span className="text-gray-700">African fantasy</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                <span className="text-gray-700">Epic African saga</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                <span className="text-gray-700">Strong female protagonist</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                <span className="text-gray-700">Yoruba mythology</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                <span className="text-gray-700">
                  Fantasy with political intrigue
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                <span className="text-gray-700">Afrofuturism epic</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                <span className="text-gray-700">
                  Warrior princess adventure
                </span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  8
                </span>
                <span className="text-gray-700">Historical romance Africa</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg col-span-1 md:col-span-2">
                <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  9
                </span>
                <span className="text-gray-700">Tribal kingdoms fiction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-l-4 border-[#E50913]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <div className="flex items-center justify-center bg-[#E50913]/10 rounded-full w-12 h-12 sm:w-10 sm:h-10">
              <svg
                className="w-7 h-7 text-[#E50913]"
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
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <span className="font-semibold">Need further help?</span> <br className="sm:hidden" />
                Contact us at:
                <a
                  href="mailto:support@itan.app"
                  className="font-bold underline break-all ml-1"
                >
                  support@itan.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorResources;
