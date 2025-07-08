import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is SKSM Trade?',
    answer: 'SKSM Trade provides real-time trading signals and expert analysis for crypto and forex markets, helping traders make informed decisions.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply sign up on our platform, choose a trading plan, and start receiving signals directly to your dashboard or preferred channel.'
  },
  {
    question: 'Are the trading signals suitable for beginners?',
    answer: 'Yes! Our signals are designed for both beginners and experienced traders. Each signal comes with clear entry, exit, and risk management guidance.'
  },
  {
    question: 'Which markets do you cover?',
    answer: 'We cover major cryptocurrencies, forex pairs, and occasionally other financial instruments based on market opportunities.'
  },
  {
    question: 'How accurate are your signals?',
    answer: 'Our team of analysts has a proven track record, and our signals have a high success rate. However, trading involves risk and past performance is not a guarantee of future results.'
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-cyan-700 rounded-lg overflow-hidden bg-slate-800/80">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-slate-900/80 focus:outline-none focus:bg-cyan-900/60 transition-colors"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-medium text-left text-amber-50">{faq.question}</span>
                <svg
                  className={`w-5 h-5 ml-2 transform transition-transform duration-300 text-cyan-400 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-slate-950/80 border-t border-cyan-800 animate-fade-in">
                  <p className="text-cyan-100">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 