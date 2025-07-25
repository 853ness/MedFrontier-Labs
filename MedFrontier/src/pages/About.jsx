// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/image.jpg';

export default function About() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111a22] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      {/* ——— Main Content ——— */}
      <div className="px-40 flex flex-1 justify-center py-10">
        <div className="max-w-[720px] w-full">
          
          {/* About Me + Headshot */}
          <div className="flex flex-col md:flex-row items-start gap-2 mb-4">
            {/* Text */}
            <div className="md:flex-1">
              <h1 className="text-white text-3xl font-bold mb-4">
                Hello, I am Lynn Nzouadja-Keundo
              </h1>
              <p className="text-[#9db1be] text-base leading-relaxed">
                A senior computer science major at the Illustrious Delaware State University exploring how AI transforms healthcare. MedFrontier Labs is my platform to share research on AI-powered medical tools, and this first website marks my journey in tech.
              </p>
            </div>
            {/* Image */}
            <img
              src={Profile}
              alt="Lynn Nzouadja-Keundo"
              className="rounded-2xl w-50 h-60 object-cover"
            />
          </div>

          {/* All the other sections stay full-width under the image/text block */}
          <div className="px-6">
            {/* My Focus */}
            <h2 className="text-white text-2xl font-bold mb-4">My Focus</h2>
            <ul className="list-disc list-inside text-[#9db1be] space-y-2 mb-8">
              <li>Demystify AI’s role in medicine using data-driven insights</li>
              <li>Highlight studies where technology improved treatment accuracy and outcomes</li>
              <li>
                Ease concerns by emphasizing:
                <ul className="list-disc list-inside pl-6 space-y-1 mt-1">
                  <li>Healthcare will always need human expertise</li>
                  <li>When thoughtfully integrated, tech accelerates healing</li>
                </ul>
              </li>
            </ul>

            {/* Why This Matters */}
            <h2 className="text-white text-2xl font-bold mb-4">Why This Matters</h2>
            <p className="text-[#9db1be] text-base leading-relaxed mb-4">
              My research reveals AI isn’t about replacement it’s about <strong>augmenting human skill</strong>. From diagnostic tools to predictive analytics, I explore how these innovations:
            </p>
            <ul className="list-none space-y-2 mb-8 text-[#9db1be]">
              <li className="flex items-center"><span className="mr-2">✅</span>Reduce human error</li>
              <li className="flex items-center"><span className="mr-2">✅</span>Personalize treatments</li>
              <li className="flex items-center"><span className="mr-2">✅</span>Expand access to care</li>
            </ul>

            {/* About This Website */}
            <h2 className="text-white text-2xl font-semibold mb-3">About This Website</h2>
            <ul className="list-disc list-inside text-[#9db1be] space-y-2 mb-8">
              <li>Analysis of emerging medical AI technologies</li>
              <li>Ethical considerations in tech-assisted care</li>
              <li>Evidence that human+AI collaboration saves lives</li>
            </ul>

            {/* Call to Action */}
            <p className="text-[#9db1be] text-base leading-relaxed">
              Let’s reshape the narrative together, reach out to discuss responsible innovation in healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* ——— Footer ——— */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-col gap-6 px-5 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            </div>
            <p className="text-[#93adc8] text-base">
              ©Delaware State University |  MedFrontier Labs | Knowledge for all
            </p>
            <p className="text-[#93adc8] text-base">
              I'd like to thank Dr.Boukari for this internship opportunity and to Noah Klaus for all your help and advice throughout this journey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
