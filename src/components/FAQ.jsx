import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is Turflo and how does it work?",
    answer:
      "Turflo is a platform that helps you find and book sports venues near you, connect with like-minded players, and participate in sports challenges. Simply sign up, choose a venue, and start playing!",
  },
  {
    question: "When will the app be available for download?",
    answer: "The app will be available for download soon. Stay tuned for updates!",
  },
  {
    question: "Which cities will the app be available in?",
    answer: "The app will be launched in major cities first, with more locations coming soon!",
  },
  {
    question: "How do I book a sports venue?",
    answer: "Simply sign up, search for a venue, select a time slot, and confirm your booking.",
  },
  {
    question: "Can I find people to play with on the app?",
    answer: "Yes! You can connect with like-minded players based on your interests and skill level.",
  },
  {
    question: "Will there be any discounts or offers?",
    answer: "Yes, we will have promotional discounts and offers. Stay updated through our app.",
  },
  {
    question: "Do I need to pay a membership fee?",
    answer: "No, signing up is free! However, some premium features may require a subscription.",
  },
  {
    question: "What types of sports venues can I book?",
    answer: "You can book venues for football, cricket, badminton, tennis, and more!",
  },
  {
    question: "How can I contact you for partnerships or collaborations?",
    answer: "You can reach us through our contact page or email us at support@turflo.com.",
  },
  {
    question: "How can I stay updated on the app launch and new features?",
    answer: "Follow us on social media or subscribe to our newsletter for the latest updates!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-heading">Frequently Asked Questions (FAQs)</div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span className="faq-title">{faq.question}</span>
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default FAQ;
