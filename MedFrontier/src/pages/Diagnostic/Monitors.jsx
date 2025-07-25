
// src/pages/Diagnostic/Tools.jsx
import React from "react";

export default function Monitors() {
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
                Diagnostic Monitors
              </p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Explore our advanced diagnostic tools designed for accurate and timely health assessments. Each tool is operated by skilled professionals to ensure the highest quality results.
            </p>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Imaging
            </h2>

            {/* MRI Scanner */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">IBM Watson Health </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                   AI enhances MRI interpretation by automating tumor detection (e.g., brain, prostate, or breast cancer), reducing scan times, and improving image clarity.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcJLiyTo-2YlL6bPCIe9knr8MYCCosUuwLahgGBB0Kwk-saOpDrgHzlTNSJ03Wg2cqhEKqQaHSZdtIm6qkkTvzsquXKz_7bhXOvTFa5p8s5FgEb1Ze8uCKVH7hRLMuYnznfTAgJCUm7XxwSnp3f5IZpRc9N6w2wrYBwMMJInsXeA7Qf8crVZ8XaiZUfnzVckdFnKy0iRfWFTQA15uFLv0w9suDcCVmsXjsCrU1DTrIpHMlfZXnq7Lkkd2K_Qz6W138H4eAL-zrUIw")',
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
