
// src/pages/Diagnostic/Tools.jsx
import React from "react";

export default function Sesnors() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111518] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full flex-grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Diagnostic Sensors
              </p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Explore our advanced diagnostic tools designed for accurate and timely health assessments. Each tool is operated by skilled professionals to ensure the highest quality results.
            </p>

            {/* EEG */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">BrainScope One</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                  Uses AI to analyze EEG signals fro traumatic brain injury (TBI) and neurological disorders. Provides rapid, potable assessment with machine learning algorithms to detect abnormalities
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>

            {/* Button under MRI */}
            <div className="px-4 py-4 flex justify-end">
              <button
                onClick={() =>
                  window.open(
                    "https://example.com/your-research-paper.pdf",
                    "_blank"
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </button>
            </div>

            {/* CT Scanner */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">CT Scanner</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Computed Tomography (CT) scans use X-rays to create cross-sectional images of the body, aiding in the diagnosis of various conditions.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANf75ZE37XVVDkXbm4OBCE91GIw8jdLdAfOSMQTeptmStAFVKvId4Vc83hQocyGb7nXmDAtVeMDO-jpVOsmyDBbEsIYQH27g8He1am6thRUZmziWxkywvWgx9bX2XqL9dLjlXUkujxHGOsMn_rkwzvEcEhnvNyIvD9dpgHPVHZ3doc7tTRwOqzWFc6xBRR_vz61kQJoE9JeM2jGXxtOC1F-bYiT41zfCWM9vaHlsVEe3V1EUlU1FOmola0_LjwaRYbQtOvPrNfaiA")',
                  }}
                />
              </div>
            </div>

            {/* Button under MRI */}
            <div className="px-4 py-4 flex justify-end">
              <button
                onClick={() =>
                  window.open(
                    "https://example.com/your-research-paper.pdf",
                    "_blank"
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </button>
            </div>

            {/* Ultrasound */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Ultrasound</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Ultrasound uses sound waves to produce images of structures within the body, often used for monitoring pregnancies and examining organs.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1CRRCwy7n4qGYzwqf4NVK8YsIUjbpF1HqrYl4YCM7xWlRoLVDd8UoYGiFO5C_YuL_Rwg0rQMCiglxKdrtDnjWBny-SSJrWlJ7Bjy9HZTboAsZmVKzyAaJeD2K3pgrUkWCqEH7T7E-5WMBo6fmgHoyNzBeg2hMLb00Kq_b-j0XnnMCF6XLncwKDI8ZD6Adq6_cHo2X984gYrpje-XXPRphcuxSTT_0sWx_2-QHO48Pu24yJBEP3kW3SZsEHNuMAfYeEDp_xC_v9Y")',
                  }}
                />
              </div>
            </div>

            {/* Button under MRI */}
            <div className="px-4 py-4 flex justify-end">
              <button
                onClick={() =>
                  window.open(
                    "https://example.com/your-research-paper.pdf",
                    "_blank"
                  )
                }
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </button>
            </div>

            {/* Laboratory */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Laboratory
            </h2>

            {/* Blood Analyzer */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Blood Analyzer</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Our state-of-the-art blood analyzers provide quick and accurate results for a wide range of blood tests, aiding in the diagnosis of various conditions.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhzxMVFUfnL1Ivz6I7spd2asGPKE1B6TBaHqenzW5NIZMFsVzuEbvdRpwbpea9AX7Q6qLM9HDZjMYgr_a0R9fF8D6-YGzqYDrmsFXkTsU9dfOE0FGWS0qRnOvdTS-9mAKyyYyMfoeeaMSC0EwEROvO_GxefA5sU77UODS6L60LvAK6827VxaSiKjDdc7ZiqPfw5BLO4hOWieRdEoQVzWH-fM_PsqlhjTnQn5SFajfOEhO4hFSFQ")'
                  }}
                />
              </div>
            </div>

            {/* Microscope */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Microscope</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    High-resolution microscopes are used to examine tissue and cell samples, assisting in the diagnosis of diseases at a cellular level.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCls3pe35nBFmkWK2cUm3OZm2ZgHMiWq6Ro-oPGvIrRUN-wqjTwovJx3cQGRQZjOFQP4uc2ir7vXK5GgObOrKYqFPz5Ag7fuP0iuyBL0E38FWkExI4lFfdV0f5kpWUpClHKHGfATaqL8h4sKd2BJIw9nlOIS9lNl0WhFq9MyszZxErDzZ_lSUwjJsz47-wPjVcAxQ3XczKmqOqifti_yeSxQ_9faQVsdRm5ypnY-jxldWLcoignqKIFdLJpNhvv-S0ydY0dCC3ZZQA")'}}
                />
              </div>
            </div>

            {/* Genetic Testing Equipment */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Genetic Testing Equipment</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Advanced equipment for genetic testing allows us to analyze DNA samples for genetic predispositions and inherited conditions.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP70ZUaDDfTsiCT8neiJifbPLVBcgznR7fsfXXfZdGZ9Rl3092gqf6E8YY")'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
