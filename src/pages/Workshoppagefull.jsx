import React from "react";

const Workshoppagefull = () => {
  return (
    <div className="w-full bg-[#070B12] text-white">
      <section
        className="
    w-full
    bg-[#0F1112]
    px-5
    md:px-10
    lg:px-[93px]
    py-10
    lg:py-[10px]
    text-white
    flex
    items-center
  "
      >
        <div
          className="
      w-full
      max-w-[1143px]
      mx-auto
      flex
      flex-col
      lg:flex-row
      justify-between
      items-center
      gap-10
    "
        >
          {/* LEFT */}
          <div
            className="
        flex
        flex-col
        items-start
        gap-[32px]
        w-full
        max-w-[649px]
      "
          >
            <span
              className="
          inline-flex
          justify-center
          items-center
          gap-[10px]
          px-[12px]
          py-[6px]
          rounded-[25px]
          border
          border-[#303133]
          bg-[#282A2C]
          text-[#D0E46A]
          text-[12px]
          font-semibold
          uppercase
        "
            >
              Limited Seats
            </span>

            <h1
              className="
          text-[#F0F0F0]
          font-['Montserrat']
          text-[42px]
          md:text-[64px]
          font-bold
          leading-[48px]
          md:leading-[70px]
        "
            >
              Create AI Films in
              <br />
              <span
                className="
            text-[#D0E46A]
            font-black
          "
              >
                Just 3 Hours
              </span>
            </h1>
            <p className="max-w-[520px] text-[16px] leading-6">
              Learn how to create cinematic videos, advertisements, and viral
              content using the latest AI tools without prior editing
              experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-3 rounded-lg border border-[#303133] bg-[#282A2C] text-[#D0E46A] text-sm">
                Saturday, July 20
              </div>

              <div className="px-3 py-3 rounded-lg border border-[#303133] bg-[#282A2C] text-[#D0E46A] text-sm">
                7:00 PM IST
              </div>

              <div className="px-3 py-3 rounded-lg border border-[#303133] bg-[#282A2C] text-[#D0E46A] text-sm">
                Live Online
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <span className="text-[48px] lg:text-[72px] font-black">
                ₹299
              </span>

              <span className="text-[24px] lg:text-[36px] text-[#6B7280] line-through">
                ₹999
              </span>
            </div>

            <a
              href="https://wa.me/919390627367"
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex
    justify-center
    items-center
    gap-[4px]
    px-[30px]
    py-[12px]
    rounded-[8px]
    bg-[#D0E46A]
    text-[#0F1112]
    text-[18px]
    leading-[28px]
    font-black
    uppercase
    hover:opacity-90
    transition-all
  "
            >
              Reserve My Seat
              <span className="text-[20px]">→</span>
            </a>

            <p className="text-[11px] uppercase text-[#6B7280]">
              Secure Payment & Instant Access
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Video Section */}
      <section className="w-full max-w-[1180px] mx-auto px-4 lg:px-0 py-8 lg:py-16">
        <div
          className="
      relative
      h-[220px]
      sm:h-[350px]
      md:h-[450px]
      lg:h-[600px]
      overflow-hidden
      rounded-[8px]
    "
        >
          <img
            src="/build-ai-powered-apps-teaser-cover.png"
            alt="Workshop Video"
            className="w-full h-full object-cover"
          />

          {/* Play Button */}
          <button
            className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        flex
        items-center
        justify-center
        w-[60px]
        h-[40px]
        sm:w-[80px]
        sm:h-[50px]
        lg:w-[120px]
        lg:h-[70px]
        rounded-[8px]
        bg-[#D0E46A]
        hover:scale-105
        transition-all
        z-10
      "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="black"
              viewBox="0 0 24 24"
              className="w-5 h-5 lg:w-8 lg:h-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section
        className="
    w-full
    min-h-[729px]
    bg-[#0F1112]
   px-4
sm:px-5
md:px-10
lg:px-[93px]
    py-[64px]
    flex
    flex-col
    justify-center
    items-center
  "
      >
        <div className="w-full max-w-[1180px]">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
          text-white
          font-['Montserrat']
         text-[32px]
sm:text-[40px]
md:text-[56px]
          font-black
          leading-tight
        "
            >
              What You Will Learn
            </h2>

            <p
              className="
    mt-3
    lg:mt-4
    text-[#A0A0A0]
    text-[14px]
    lg:text-[16px]
    leading-[22px]
    lg:leading-[24px]
  "
            >
              Master the complete workflow from idea to final cinematic render.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
    mt-10
    lg:mt-16
    grid
    grid-cols-1
    md:grid-cols-2
    gap-4
    lg:gap-6
  "
          >
            {[
              {
                title: "Create AI-generated cinematic videos",
                desc: "Learn the core principles of AI cinematography to generate highly realistic cinematic shots.",
              },
              {
                title: "Generate scenes using advanced prompts",
                desc: "Master prompt engineering techniques to get exactly the lighting, camera angle, and subject you want.",
              },
              {
                title: "Use Midjourney, Runway & Sora",
                desc: "Get hands-on experience with the industry-standard tools for image and video generation.",
              },
              {
                title: "Create advertisements with AI",
                desc: "Learn how to structure and generate high-converting product commercials from scratch.",
              },
              {
                title: "Make viral social media content",
                desc: "Discover the formulas for creating AI reels and TikToks that capture attention and go viral.",
              },
              {
                title: "Professional AI workflows",
                desc: "Learn how to upscale, edit, add sound design, and finalize your AI footage like a pro.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            bg-[#282A2C]
            border
            border-[#303133]
            rounded-[20px]
p-5
lg:p-6
            hover:border-[#D0E46A]
            transition-all
          "
              >
                <h3
                  className="
              text-white
text-[20px]
sm:text-[22px]
lg:text-[24px]
              font-bold
             leading-[26px]
lg:leading-[30px]
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
              mt-3
              text-[#B0B0B0]
              text-[14px]
              leading-[22px]
            "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Create Section */}
      <section
        className="
    w-full
    bg-[#0F1112]
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
    py-10
    lg:py-[64px]
    flex
    flex-col
    justify-center
    items-center
  "
      >
        <div className="w-full max-w-[1180px]">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
          text-[#F0F0F0]
          text-center
          font-['Montserrat']
          text-[32px]
          sm:text-[40px]
          lg:text-[64px]
          font-black
          leading-[38px]
          sm:leading-[48px]
          lg:leading-[70px]
        "
            >
              What You Will Create
            </h2>

            <p
              className="
          mt-4
          text-center
          text-[#DCDCDC]
          font-['Montserrat']
          text-[14px]
          sm:text-[16px]
          md:text-[18px]
          font-normal
          leading-[22px]
          md:leading-[28px]
        "
            >
              By the end of the workshop, you will generate your own high-end
              assets.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-10 lg:mt-20 space-y-10 lg:space-y-20">
            {/* Project 01 */}
            <div
              className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          lg:gap-10
        "
            >
              <div className="w-full lg:max-w-[350px] text-center lg:text-left">
                <p className="text-[#8A8A8A] text-[12px] uppercase">
                  Project 01
                </p>

                <h3
                  className="
              mt-2
              text-white
              text-[24px]
              sm:text-[28px]
              lg:text-[32px]
              font-black
              uppercase
            "
                >
                  AI Short Film
                </h3>
              </div>

              <img
                src="/workshopimage2.jpg"
                alt="AI Short Film"
                className="
            w-full
            max-w-full
            lg:max-w-[520px]
            h-[220px]
            sm:h-[260px]
            object-cover
            rounded-full
          "
              />
            </div>

            {/* Project 02 */}
            <div
              className="
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-8
          lg:gap-10
        "
            >
              <img
                src="/workshopimage1.jpg"
                alt="AI Product Ad"
                className="
            w-full
            max-w-full
            lg:max-w-[520px]
            h-[220px]
            sm:h-[260px]
            object-cover
            rounded-full
          "
              />

              <div className="w-full lg:max-w-[350px] text-center lg:text-right">
                <p className="text-[#8A8A8A] text-[12px] uppercase">
                  Project 02
                </p>

                <h3
                  className="
              mt-2
              text-white
              text-[24px]
              sm:text-[28px]
              lg:text-[32px]
              font-black
              uppercase
            "
                >
                  AI Product Ad
                </h3>
              </div>
            </div>

            {/* Project 03 */}
            <div
              className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          lg:gap-10
        "
            >
              <div className="w-full lg:max-w-[350px] text-center lg:text-left">
                <p className="text-[#8A8A8A] text-[12px] uppercase">
                  Project 03
                </p>

                <h3
                  className="
              mt-2
              text-white
              text-[24px]
              sm:text-[28px]
              lg:text-[32px]
              font-black
              uppercase
            "
                >
                  AI Reel & Poster
                </h3>
              </div>

              <img
                src="/workshopimage3.jpg"
                alt="AI Reel Poster"
                className="
            w-full
            max-w-full
            lg:max-w-[520px]
            h-[220px]
            sm:h-[260px]
            object-cover
            rounded-full
          "
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 lg:mt-20">
            <button
              className="
          w-full
          sm:w-auto
          inline-flex
          justify-center
          items-center
          gap-[4px]
          px-[30px]
          py-[12px]
          rounded-[8px]
          bg-[#D0E46A]
          text-[#0F1112]
          font-['Montserrat']
          text-[14px]
          font-black
          leading-[20px]
          uppercase
          hover:opacity-90
          transition-all
        "
            >
              I WANT TO CREATE THIS
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Includes Section */}
      <section
        className="
    w-full
    bg-[#0F1112]
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
    py-10
    lg:py-[64px]
  "
      >
        <div
          className="
      w-full
      max-w-[1180px]
      mx-auto
      flex
      flex-col
      lg:flex-row
      justify-between
      gap-8
      lg:gap-12
    "
        >
          {/* Left Side */}
          <div className="w-full lg:max-w-[480px]">
            <h3
              className="
          text-white
          text-[22px]
          sm:text-[24px]
          font-bold
          leading-[30px]
          lg:leading-[32px]
        "
            >
              Who Is This For?
            </h3>

            <p
              className="
          mt-4
          lg:mt-6
          text-[#DCDCDC]
          text-[14px]
          lg:text-[16px]
          leading-[22px]
          lg:leading-[24px]
        "
            >
              Whether you are a seasoned creative or a complete beginner, this
              workshop is designed to level up your skills.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 lg:gap-3 mt-6">
              {[
                "Content Creators",
                "Filmmakers",
                "Designers",
                "Students",
                "Freelancers",
                "Marketing Professionals",
              ].map((item) => (
                <span
                  key={item}
                  className="
              inline-flex
              items-center
              justify-center
              px-[12px]
              py-[8px]
              rounded-[8px]
              border
              border-[#303133]
              bg-[#282A2C]
              text-[#DCDCDC]
              text-[13px]
              lg:text-[14px]
            "
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              className="
          mt-6
          lg:mt-8
          p-4
          rounded-[12px]
          border
          border-[#303133]
          bg-[#282A2C]
        "
            >
              <p
                className="
            text-[#DCDCDC]
            text-[13px]
            lg:text-[14px]
            leading-[22px]
          "
              >
                No prior experience required. We start from the basics and move
                to advanced techniques.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:max-w-[520px]">
            <h3
              className="
          text-white
          text-[22px]
          sm:text-[24px]
          font-bold
          leading-[30px]
          lg:leading-[32px]
          mb-5
          lg:mb-6
        "
            >
              Workshop Includes
            </h3>

            <div className="space-y-3 lg:space-y-4">
              {[
                "Live Interactive Session",
                "Certificate of Participation",
                "Workshop Recording Access",
                "Exclusive Prompt Pack",
                "AI Tools Guide & Resources",
              ].map((item) => (
                <div
                  key={item}
                  className="
              flex
              items-center
              px-4
              lg:px-6
              py-4
              lg:py-5
              rounded-[16px]
              border
              border-[#303133]
              bg-[#282A2C]
            "
                >
                  <span
                    className="
                text-white
                text-[15px]
                lg:text-[18px]
                font-bold
              "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="
    bg-[#05080D]
    py-10
    lg:py-16
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
  "
      >
        <div
          className="
      w-full
      max-w-[1180px]
      mx-auto
      flex
      flex-col
      lg:flex-row
      justify-center
      items-center
      gap-6
      p-[10px]
      text-center
      lg:text-left
    "
        >
          {/* Instructor Image */}
          <div className="flex-shrink-0">
            <img
              src="/workshopicon.png"
              alt="Ravi Teja"
              className="
          w-[120px]
          h-[120px]
          lg:w-[150px]
          lg:h-[150px]
          rounded-full
          object-cover
          border
          border-lime-400
        "
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 text-white items-center lg:items-start">
            <span className="text-[#B5D334] text-xs font-semibold uppercase tracking-wider">
              Your Instructor
            </span>

            <h2 className="text-[28px] lg:text-[32px] font-bold leading-none">
              RAVI TEJA
            </h2>

            <p
              className="
          max-w-[700px]
          text-[#C8CDD2]
          text-[14px]
          lg:text-base
          leading-6
          lg:leading-7
        "
            >
              Lead AI Filmmaker & Creative Director with over 5 years of
              experience in digital production. Ravi has directed AI-driven
              campaigns for top tech brands and specializes in creating
              hyper-realistic cinematic sequences using generative AI.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
              <span className="px-4 py-2 border border-[#2A2D32] rounded-full text-xs">
                10K+ STUDENTS TAUGHT
              </span>

              <span className="px-4 py-2 border border-[#2A2D32] rounded-full text-xs">
                50+ AI FILMS
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
    bg-[#0F1112]
    py-10
    lg:py-16
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
    flex
    justify-center
  "
      >
        <div className="w-full max-w-[1180px] relative">
          <h2
            className="
        text-white
        text-[32px]
        sm:text-[40px]
        lg:text-[52px]
        font-bold
        text-center
      "
          >
            Student Success Stories
          </h2>

          <p
            className="
        text-[#B8B8B8]
        text-center
        text-[14px]
        lg:text-[16px]
        mt-3
        mb-8
        lg:mb-10
      "
          >
            See what others achieved after taking this workshop.
          </p>

          {/* Arrow Button */}
          <button
            className="
        hidden
        lg:flex
        absolute
        right-0
        top-0
        w-[60px]
        h-[48px]
        items-center
        justify-center
        rounded-[12px]
        bg-[#D0E46A]
        hover:bg-[#c6dd55]
        transition-all
      "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#0F1112"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="
        flex
        gap-4
        overflow-x-auto
        scrollbar-hide
        pb-2
      "
          >
            {/* Card 1 */}
            <div className="bg-[#232529] rounded-3xl p-5 lg:p-6 min-w-[300px] lg:min-w-[380px]">
              <p className="text-[#F0F0F0] text-[14px] leading-[20px] mb-8">
                "This workshop completely changed how I approach content
                creation. The AI workflows are insane and saved me hours of
                editing time. Highly recommended!"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/Fred Lackey.png"
                  alt="Prerna Singh"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-[20px] lg:text-[24px] font-semibold">
                    Prerna Singh
                  </h4>
                  <p className="text-[#A8A8A8] text-[13px] lg:text-[14px]">
                    Freelance Videographer
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#232529] rounded-3xl p-5 lg:p-6 min-w-[300px] lg:min-w-[380px]">
              <p className="text-[#F0F0F0] text-[14px] leading-[20px] mb-8">
                "I had zero experience with AI tools before this. The
                step-by-step guidance was perfect, and I created my first AI ad
                within the 3-hour session."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/Fred Lackey.png"
                  alt="Sneha Joshi"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-[20px] lg:text-[24px] font-semibold">
                    Sneha Joshi
                  </h4>
                  <p className="text-[#A8A8A8] text-[13px] lg:text-[14px]">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#232529] rounded-3xl p-5 lg:p-6 min-w-[300px] lg:min-w-[380px]">
              <p className="text-[#F0F0F0] text-[14px] leading-[20px] mb-8">
                "The prompt pack alone is worth 10x the price of this workshop.
                It took away all the guesswork. Best investment I've made for my
                agency."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/Fred Lackey.png"
                  alt="Rahul Mehta"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-[20px] lg:text-[24px] font-semibold">
                    Rahul Mehta
                  </h4>
                  <p className="text-[#A8A8A8] text-[13px] lg:text-[14px]">
                    Creative Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
    bg-[#0F1112]
    py-10
    lg:py-[64px]
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
  "
      >
        <div
          className="
      max-w-[1180px]
      mx-auto
      flex
      flex-col
      lg:flex-row
      overflow-hidden
      rounded-[16px]
    "
        >
          {/* Left Banner */}
          <div className="flex-1">
            <img
              src="/workshopbanner.png"
              alt="Workshop Banner"
              className="
          w-full
          h-[250px]
          sm:h-[320px]
          lg:h-[491px]
          object-cover
        "
            />
          </div>

          {/* Right Card */}
          <div
            className="
        relative
        w-full
        lg:w-[379px]
        min-h-[441px]
        border
        border-[#D0E46A]
        bg-[#0F1112]
        px-5
        lg:px-[24px]
        py-8
        lg:py-[32px]
      "
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-[#D0E46A] rounded-bl-[8px] rounded-tr-[16px] px-3 py-1">
              <span className="text-[11px] font-bold text-[#0F1112]">
                70% OFF TODAY
              </span>
            </div>

            <h3 className="text-white text-[20px] font-bold mb-2">
              Workshop Access
            </h3>

            <p className="text-[#A8A8A8] text-[12px] mb-6">
              Everything you need to start creating AI films.
            </p>

            <div className="flex items-center gap-2 mb-8">
              <span className="text-white text-[24px] font-bold">₹299</span>

              <span className="text-[#707070] text-[14px] line-through">
                ₹999
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {[
                "Full Live Session Access",
                "Lifetime Recording Access",
                "Verified Certificate",
                "Exclusive Prompt Pack",
                "Private Community Access",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#D0E46A] text-sm">✓</span>
                  <span className="text-white text-[14px]">{item}</span>
                </div>
              ))}
            </div>

            <button
              className="
          w-full
          flex
          justify-center
          items-center
          rounded-[8px]
          bg-[#D0E46A]
          px-[30px]
          py-[12px]
          text-[#0F1112]
          text-[16px]
          font-bold
        "
            >
              BOOK MY SEAT NOW
            </button>

            <p className="text-center text-[#7C7C7C] text-[10px] mt-4">
              Spots are filling up fast. Secure yours today.
            </p>
          </div>
        </div>
      </section>

     <section
  className="
    bg-[#0F1112]
    py-10
    lg:py-[64px]
    px-4
    sm:px-5
    md:px-10
    lg:px-[93px]
  "
>
  <div className="max-w-[1180px] mx-auto flex flex-col gap-6 lg:gap-[30px]">

    {/* Heading */}
    <div className="text-center">
      <p
        className="
          text-[#D0E46A]
          text-[11px]
          lg:text-[12px]
          font-semibold
          uppercase
          tracking-wider
          mb-2
        "
      >
        NEED MORE DETAILS?
      </p>

      <h2
        className="
          text-white
          text-[28px]
          sm:text-[34px]
          lg:text-[42px]
          font-bold
          uppercase
          leading-tight
        "
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
    </div>

    {/* FAQ List */}
    <div className="flex flex-col gap-3">

      {/* Active FAQ */}
      <div className="border border-[#2A2A2A] rounded-[8px] bg-[#121415] overflow-hidden">
        <button className="w-full flex items-center justify-between px-4 lg:px-6 py-4 text-left">
          <span className="text-white text-[13px] lg:text-[14px] font-medium pr-4">
            How is this AI Filmmaker different from YouTube tutorials?
          </span>

          <span className="text-white text-lg lg:text-xl shrink-0">
            −
          </span>
        </button>

        <div className="px-4 lg:px-6 pb-4">
          <p
            className="
              text-[#A8A8A8]
              text-[12px]
              lg:text-[13px]
              leading-5
              lg:leading-6
            "
          >
            Because we provide real projects, AI tools, structured
            workflows, and personal guidance. You'll learn practical
            techniques used by professionals instead of scattered free
            content.
          </p>
        </div>
      </div>

      {/* FAQ Items */}
      {[
        "What's the difference between buying a single recording and getting AI Access?",
        "How long will I have access to the workshop?",
        "How is this workshop different from YouTube tutorials?",
        "What’s the difference between buying a single recording and getting AI Access?",
        "How long will I have access to the course?",
      ].map((item, index) => (
        <div key={index} className="border-b border-[#232529]">
          <button className="w-full flex items-center justify-between py-4 text-left gap-4">
            <span className="text-white text-[13px] lg:text-[14px]">
              {item}
            </span>

            <span className="text-white text-base lg:text-lg shrink-0">
              +
            </span>
          </button>
        </div>
      ))}
    </div>

  </div>
</section>
    </div>
  );
};

export default Workshoppagefull;
