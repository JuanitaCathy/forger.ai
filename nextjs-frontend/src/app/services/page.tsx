"use client";

import React from "react";

const questions = [
  {
    question: "What is cold emailing?",
    answer: "Cold emailing is the practice of sending unsolicited emails to potential customers or contacts with the aim of establishing a business relationship. It involves reaching out to individuals who may not be familiar with your product or service, often with the goal of generating leads or sales.",
  },
  {
    question: "What is a cold email generator?",
    answer: "A cold email generator is a tool that helps users create personalized and engaging cold emails efficiently. It uses templates and often incorporates AI to suggest content that resonates with the recipient, improving the chances of a positive response.",
  },
  {
    question: "How does a cold email generator impact GTM strategy?",
    answer: "A cold email generator can significantly enhance a go-to-market (GTM) strategy by streamlining outreach efforts. It allows businesses to quickly craft tailored emails to potential clients, increasing engagement and conversion rates. This tool saves time and helps maintain consistency in messaging across campaigns.",
  },
  {
    question: "What are the best practices for cold emailing?",
    answer: "Best practices for cold emailing include personalizing your message, keeping it concise, using a compelling subject line, and following up strategically. It's also important to ensure compliance with email regulations and to respect the recipient's privacy.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h1 className="text-4xl font-bold text-white mb-6">Cold Emailing <span className="text-pink-600">Services!</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {questions.map((item, index) => (
          <div key={index} className="relative border border-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-pink-500">{item.question}</h2>
            <p className="text-gray-300 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
