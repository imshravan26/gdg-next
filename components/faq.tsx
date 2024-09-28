"use client";
import React, { useRef, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  borderColor: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, borderColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4">
      <button
        onClick={toggleFAQ}
        className={`flex justify-between border-1 ${borderColor} items-center w-full bg-gray-100 py-3 px-5 rounded-full text-xl font-semibold focus:outline-none transition-all duration-300  dark:border-2  dark:bg-neutral-950`}
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform duration-500 ${isOpen ? "rotate-88" : "rotate-0"}`}
        >
          {isOpen ? "▾" : "▸"}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div
          className={`mt-3 p-4 border-l-4 ${borderColor} bg-white rounded-lg shadow-md dark:shadow-gray-400 dark:bg-neutral-950`}
        >
          <p className="text-gray-600 dark:text-gray-200 text-xl ">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

      <FAQItem
        question="What is GDG?"
        answer="Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
        borderColor="border-red"
      />

      <FAQItem
        question="How can you become a part of GDG?"
        answer="We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and a personal interview. Students acing both rounds are selected to be part of the core team."
        borderColor="border-green"
      />
      <FAQItem
        question="What does a GDG Lead do?"
        answer="A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners."
        borderColor="border-blue"
      />
      <FAQItem
        question="How is DSC related to Google?"
        answer="A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners."
        borderColor="border-yellow"
      />
      <FAQItem
        question="How to reach us?"
        answer="Mail us at dsc.rknec@gmail.com"
        borderColor="border-red"
      />
    </div>
  );
};

export default FAQ;
