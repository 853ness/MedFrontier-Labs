// src/pages/Diagnostic/Sensors.jsx
import React from 'react';

export default function Sensors() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111b22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* ——— MAIN CONTENT ——— */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-6">

            {/* Page Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
               Diagnostic Sensors
              </p>
            </div>

            {/* Description */}
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
             From brainwave scanners to voice-based diagnostics, AI-powered sensors are reshaping how we assess, 
             detect, and respond to health challenges. These next-gen tools pair real-time data with intelligent analysis, 
             bringing faster, smarter, and more personalized care within reach. Dive into the tech driving tomorrow’s diagnostics.
            </p>

            {/* Alive */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                   <p className="text-white text-base font-bold leading-tight"> AliveCor KardiaMobile 6L (Portable ECG Monitor)</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    The AliveCor KardiaMobile 6L is an FDA-cleared, six-lead personal ECG device that enables users to record medical-grade heart 
                    rhythms in just 30 seconds by placing fingers on its sensors. It connects to a smartphone app and uses AliveCor’s KardiaAI 
                    platform to analyze ECG waveforms, detecting conditions like atrial fibrillation (AFib), bradycardia, and tachycardia. 
                    The device provides real-time feedback and is widely used for early detection and remote monitoring, especially in high-risk 
                    populations such as stroke survivors. Though AliveCor claims high accuracy, exact sensitivity (e.g., 98%) is not independently 
                    published. The KardiaMobile 6L supports telehealth integration, offering clinical-grade diagnostics outside traditional settings 
                    and reducing the need for in-hospital ECGs. It was the first FDA-cleared six-lead ECG device for personal use.
                  </p>
               </div>

               <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                  style={{
                    backgroundImage:
                      'url("data:image/jpeg;base64,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")',
                    }}
                />
              </div>
            </div>

            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://alivecor.com/biopharma/resources/breakthrough-jama-study-kardiamobile-6l-device-rivals-traditional-12-lead-in-efficiency-and-effectiveness",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-base font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

            {/* BrainOne */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">BrainScope One</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                   BrainScope One is a handheld EEG assessment device that acquires multi-channel 
                   brainwave data via disposable forehead sensors in under 10 minutes and uses AI-driven signal-processing 
                   algorithms to evaluate brain injury and concussion at the point of care. Its machine-learning classifiers,
                   trained on thousands of de-identified EEG records, detect electrophysiological signatures of intracranial hemorrhage
                   and concussion-related dysfunction, producing a quantitative Brain Function Index along with separate Bleed and Concussion 
                   Risk Scores. These results appear within minutes on the device screen, enabling clinicians to triage patients rapidly and potentially 
                   reduce unnecessary CT scans by up to one-third. The radiation-free, FDA-cleared system integrates seamlessly into emergency departments, 
                   sports fields, or military settings for early detection of brain injury. Periodic model updates, delivered through secure software upgrades, 
                   refine its sensitivity and specificity while maintaining HIPAA-compliant data handling. Clinical studies and peer-reviewed 
                   publications support its utility in accelerating decision-making, optimizing resource use, and improving patient outcomes.
                   </p>
                </div>

                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl overflow-hidden flex-1"
                  style={{
                    backgroundImage:
                      'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>

            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://www.brainscope.com/all-pr/2019/1/2/brainscope-receives-fda-clearance-for-multi-modal-multi-parameter-concussion-assessment-0",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-base font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

            {/* Spectral */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Spectral AI DeepView</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                   The Spectral AI DeepView® Wound Imaging System is a non-invasive diagnostic tool used to assess 
                   wounds such as burns and diabetic foot ulcers (DFUs). To use it, clinicians position the imaging device over 
                   the wound for less than 2 seconds, capturing multispectral images that are instantly analyzed by the system’s 
                   onboard AI. The AI then provides a binary “yes” or “no” prediction on whether the wound will heal within a clinically 
                   significant timeframe (e.g., 50% closure in 4 weeks for DFUs), enabling faster, objective treatment decisions. 
                   The system incorporates deep learning models, specifically convolutional neural networks (CNNs) and segmentation 
                   algorithms, trained on millions of annotated tissue data points. These models analyze wound tissue at the pixel level, 
                   outperforming clinicians in both sensitivity and accuracy. DeepView’s AI also includes predictive analytics for tissue 
                   oxygenation and healing progression, making it a valuable clinical decision support tool. By eliminating guesswork and 
                   standardizing wound assessments from Day One, DeepView improves outcomes while reducing treatment delays.
                   </p>
                </div>

                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl overflow-hidden flex-1"
                  style={{
                    backgroundImage:
                      'url("data:image/jpeg;base64,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")',
                      }}
                />
              </div>
            </div>

            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://www.spectral-ai.com/blog/bringing-ai-objectivity-to-diabetic-foot-ulcer-assessment/",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-base font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

            {/*  */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Medtronic’s GI Genius™</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                   Medtronic’s GI Genius™ module is integrated into standard white-light colonoscopy systems and 
                   actively analyzes video frames in real time using trained convolutional neural network models. 
                   When a possible polyp is detected, it overlays a green box and gives an auditory prompt within milliseconds, 
                   effectively serving as a second set of eyes for the endoscopist. The AI was trained on more than 13 million 
                   annotated polyp images to recognize lesions of various morphologies. Clinically, GI Genius™ increases adenoma 
                   detection rates by about 14 percentage points and reduces polyp miss rates by nearly 50%. With sensitivity rates 
                   as high as 99.7% and false positive rates under 1%, it provides evidence-based decision-support without slowing down 
                   procedures. The deep learning module is optimized for low latency and high accuracy, making it a reliable real-time 
                   aid during colonoscopy.
                   </p>
                </div>

                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl overflow-hidden flex-1"
                  style={{
                    backgroundImage:
                      'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>

            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://news.medtronic.com/2021-04-12-U-S-FDA-Grants-De-Novo-Clearance-for-First-and-Only-Artificial-Intelligence-System-for-Colonoscopy-Medtronic-Launches-GI-Genius-TM-Intelligent-Endoscopy-Module?utm_source=chatgpt.com",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-base font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>
            

            {/* Product Showcase (4-Box Grid) */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Recording Devices
            </h2>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="flex flex-col overflow-hidden rounded-xl bg-[#1f282e]">
                  <div
                    className="w-full aspect-video bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlINVymkYnkLwY6ekrP-mvIJ44uk-p_BNcvJpo6_y4WfklER2D-raYTC5I-4GKTK12U7TZ0FA7y8q7eQwgGBCnBpGwQEy6jAWhCIgdtbtkWE3OhSoikPNOrCuxCZfLt7hQZWB7Wv7h45jDFlxYFU8EupI6vvxA_E8MqqH2H8juQVwsXNOfVZZ7zshUwQZ2TIK4MYBL-fuzOB7JV_j5gKQvHdbi7g-vgI5-bJMIxTOZT2CO8Tk5mwpFe8-1-Nv0Jv_3kL1igIxD5E8")',
                    }}
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        PD Voice Analyzer
                      </p>
                      <p className="text-[#93b3c8] text-base leading-normal mt-1">
                      PD Voice Analyzer is a mobile-assisted speech-analysis platform that screens for Parkinson’s
                      disease by capturing patient voice samples typically sustained vowels or standardized phrases
                      via a smartphone or tablet app The recorded audio is uploaded to a secure server where signal-processing
                      pipelines extract acoustic features (jitter, shimmer, pitch variability, and Mel-Frequency Cepstral Coefficients). 
                      These features feed into machine-learning classifiers (e.g., SVM, Random Forest) trained on thousands of 
                      PD and healthy control recordings; in published studies, Random Forest models achieved up to 94 % accuracy 
                      in distinguishing PD from non-PD voices. Results, PD risk scores and feature importance maps, are returned to 
                      clinicians via an online dashboard, enabling early, non-invasive screening and longitudinal monitoring. 
                      All model updates are delivered through regulated software releases under HIPAA compliance, ensuring data 
                      privacy and continual performance improvements. By reducing reliance on specialist in-person assessments, 
                      PD Voice Analyzer offers scalable, patient-friendly access to early detection tools.
                      </p>
                    </div>
                    <button className="self-start mt-4 px-4 h-8 rounded-full bg-[#1993e5] text-white text-sm font-medium"
                     onClick={() =>
                       window.open(
                    "https://www.nature.com/articles/s41598-025-96950-3",
                    "_blank"
                  )
                }
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col overflow-hidden rounded-xl bg-[#1f282e]">
                  <div
                    className="w-full aspect-video bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://pharmaphorum.com/wp-content/uploads/2021/10/Cognetivity_Cognica_ICA_dementia.jpg")',
                    }}
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        Cognitively’s Integrated Cognitive Assessment (ICA)
                      </p>
                      <p className="text-[#93b3c8] text-base leading-normal mt-1">
                        The Integrated Cognitive Assessment (ICA) by Cognitively Neurosciences is a 5-minute, 
                        self-administered tablet-based test that evaluates visual categorization speed, accuracy, and error patterns to assess cognitive impairment.
                        Users rapidly classify a randomized sequence of natural images (animals vs. non-animals), and the AI backend, built on transformer-augmented CNN models
                        analyzes reaction times, memory errors, and visual processing metrics to generate a composite cognitive score. In clinical validation, the ICA AI model 
                        achieved an AUC of 0.88 for distinguishing mild Alzheimer’s patients and 0.81 for mild cognitive impairment, outperforming traditional pen-and-paper tests.
                        The system’s cloud-based AI orchestrator provides real-time results and longitudinal trend analyses, enabling primary-care triage and monitoring without specialist administration. As a fully digitized,
                        language-independent tool, ICA reduces test-retest variability and supports remote assessments. All data handling and model updates follow HIPAA-compliant protocols and regulated software-release processes, ensuring both accuracy and patient privacy.

                      </p>
                    </div>
                    <button className="self-start mt-4 px-4 h-8 rounded-full bg-[#1993e5] text-white text-sm font-medium"
                      onClick={() =>
                       window.open(
                    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8339427/?utm_source",
                    "_blank"
                  )
                }>
                      Learn More
                    </button>
                  </div>
                </div>

              </div>
            </div>
            {/* …end of layout-content-container… */}
          </div>
        </div>
      </div>
    </div>
  );
}
