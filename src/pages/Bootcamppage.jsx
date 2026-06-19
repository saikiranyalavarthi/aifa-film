"use client";

import Hero from "./Bootcamp/Hero";
import VideoSection from "./Bootcamp/Videosection";
import LearnSection from "./Bootcamp/LearnSection";
import BuildSection from "./Bootcamp/BuildSection";
import FAQSection from "./Bootcamp/FAQSection";
import TestimonialsSection from "./Bootcamp/TestimonialsSection";
import InstructorsSection from "./Bootcamp/InstructorsSection";
import WhoSection from "./Bootcamp/WhoSection";
import CourseContent from "./Bootcamp/CourseContent";
import IncludedSection from "./Bootcamp/IncludedSection";

export default function Bootcamppage() {
  return (
    <div className="bg-[#0B0F19] flex flex-col">
      {/* HERO */}
      <Hero />

      {/* VIDEO */}
      <VideoSection />

      {/* WHAT YOU LEARN */}
      <LearnSection />

      {/* WHAT YOU BUILD */}
      <BuildSection />
<IncludedSection/>
<CourseContent/>
      {/* WHO IT'S FOR */}
      <WhoSection />

      {/* INSTRUCTORS */}
      <InstructorsSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />
      <div
  className="
    fixed
    bottom-0
    left-0
    right-0
    z-50
    bg-[#05080D]
    border-t
    border-[#232529]
    px-4
    lg:px-8
    py-4
  "
>
  <div
    className="
      max-w-[1180px]
      mx-auto
      flex
      flex-col
      sm:flex-row
      items-center
      justify-between
      gap-4
    "
  >
    {/* Left Content */}
    <div>
      <div className="flex items-center gap-3 flex-wrap">
        <h3 className="text-white text-[20px] font-bold">
          AI Filmmaking Bootcamp
        </h3>

        <span className="text-[#D0E46A] text-[28px] font-bold">
          ₹299
        </span>

        <span className="text-[#6B7280] text-[24px] line-through">
          ₹999
        </span>
      </div>

      <p className="text-[#A8A8A8] text-[14px] mt-1">
        Live Workshop + Recording Access + Prompt Pack
      </p>
    </div>

    {/* CTA Button */}
    <a
      href="https://wa.me/919390627367"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        justify-center
        gap-2
        px-8
        py-3
        rounded-[8px]
        bg-[#D0E46A]
        text-[#0F1112]
        font-bold
        text-[16px]
        whitespace-nowrap
        hover:bg-[#c6dd55]
        transition-all
      "
    >
      Book Your Seat
      <span>→</span>
    </a>
  </div>
</div>
    </div>
  );
}
