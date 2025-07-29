// src/pages/Diagnostic/RoboticsTools.jsx
import React from "react";

export default function RoboticsAI() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111a22] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full flex-grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-8">
            {/* Page Title */}
            <div className="flex flex-wrap justify-between gap-3 p-6">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Robotics & AI 
              </p>
            </div>

            {/* Intro Text */}
            <>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                Dive into our cutting-edge research on robotic surgery, rehabilitation exoskeletons,
                diagnostic imaging robots, drug-delivery micro-robots, and prosthetic limbs.
                Click “Learn More” to explore the full research papers and technical details.
              </p>
            </>

            {/* Da Vinci 5 */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">
                    Da Vinci 5
                  </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    The da Vinci 5 is Intuitive Surgical’s latest multiport robotic platform,
                    delivering 10 000× the computing power of its predecessor to enable AI-driven
                    force-feedback, tremor filtration, and advanced 3D vision for minimally
                    invasive procedures. Surgeons operate from a high-definition console while 
                    real-time kinematic and video data feed onboard analytics that optimize instrument 
                    trajectories and warn of potential collisions. Its Force Feedback technology, 
                    powered by sensor data at the instrument tips, transmits tissue resistance cues 
                    back to the surgeon, reducing applied force by up to 43% and enhancing surgical 
                    precision. Case Insights, a machine-learning module, analyzes system telemetries 
                    and recorded video to benchmark performance, suggest workflow improvements, and 
                    personalize surgeon training. Designed for seamless integration, da Vinci 5 fits 
                    into existing ORs and can connect to hospital PACS/EHR systems via standardized APIs. 
                    FDA-cleared and CE-marked, it supports a wide range of urologic, gynecologic, 
                    cardiothoracic, and general-surgical indications with the goal of reducing 
                    complications and shortening patient recovery times.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>
            <div className="px-4 py-4 justify-start">
              <a
                href="https://doi.org/10.1109/ICRA.2020.XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                onClick={() =>
                    window.open(
                    "https://www.intuitive.com/en-us/products-and-services/da-vinci/5",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
              </a>
            </div>

            {/* Versius Surgical System (CMR Surgical) */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">
                    Versius Surgical System (CMR Surgical)
                  </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                   Versius is a modular, portable robotic platform designed to mimic the 
                   human arm with independent, fully wristed instruments and 3D HD vision, 
                   enabling surgeons to perform soft-tissue minimal-access procedures with 
                   sub-millimeter precision. A built-in digital ecosystem captures intraoperative 
                   kinematic and system-telemetry data—instrument trajectories, joint angles, 
                   and task timings, for every case. Post-procedure, machine-learning algorithms 
                   (including supervised performance classifiers and unsupervised clustering models) 
                   analyze this data in a secure cloud to benchmark surgeon performance, highlight 
                   workflow bottlenecks, and personalize training pathway. Unlike autonomous surgical 
                   robots, Versius focuses its AI on data-driven quality improvement rather than 
                   intraoperative decision-making, delivering actionable insights through interactive 
                   dashboards. Its compact footprint and quick-attach arms allow seamless movement 
                   between ORs without disrupting existing laparoscopic workflows. To date, over 20,000 
                   surgical cases worldwide have leveraged Versius’s data analytics to refine techniques 
                   and enhance efficiency, demonstrating how AI-powered feedback can drive continuous 
                   surgical improvement.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>
            <div className="px-4 py-4 justify-start">
              <a
                href="https://doi.org/10.1038/s41467-019-XXXX-XXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                 onClick={() =>
                    window.open(
                    "https://us.cmrsurgical.com/",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
              </a>
            </div>

            {/* Deep Learning Intra-Operative Metastasis Identifier (CASL Prototype)t */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">
                    Deep Learning Intra-Operative Metastasis Identifier (CASL Prototype)
                  </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    The CASL system is a laparoscopic research prototype that applies CNN-based 
                    deep-learning to live video feeds to identify peritoneal surface metastases 
                    during staging procedures. Trained on over 4,200 annotated lesion images from 
                    132 patients, its model segments video frames to distinguish metastatic nodules 
                    from benign tissue with an AUC of 0.79 versus 0.69 for surgeons alone in 
                    controlled tests. Intra-operatively, the AI highlights suspicious regions and 
                    recommends biopsy targets within seconds, reducing the risk of missed lesions 
                    and early recurrence. Surgeons review flagged areas on an auxiliary OR monitor, 
                    making sampling decisions with AI assistance while retaining full clinical oversight. 
                    All inference runs on a secure workstation in the OR, ensuring compliance with 
                    patient-data regulations and eliminating the need for external servers. 
                    Controlled software updates refine sensitivity and specificity over time, 
                    with a long-term goal of integrating the system into commercial laparoscopic platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 justify-start">
              <a
                href="https://ieeexplore.ieee.org/document/XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                onClick={() =>
                    window.open(
                    "https://pubmed.ncbi.nlm.nih.gov/38577794/",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
              </a>
            </div>

            {/* Ion Robotic Bronchoscopy System (Intuitive Surgical)*/}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">
                    Ion Robotic Bronchoscopy System (Intuitive Surgical)
                  </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Ion is a catheter-based, robot-assisted bronchoscopy system that combines AI-informed shape-sensing and 3D CT 
                    planning to guide ultra-thin tools to peripheral lung nodules with sub-millimeter precision. 
                    Preoperative CT scans are processed by encoder–decoder CNNs to create detailed 3D airway maps, 
                    which clinicians adjust to select optimal biopsy paths. During the procedure, proprietary 
                    fiber-optic shape-sensing algorithms update catheter position hundreds of times per 
                    second, while real-time computer-vision models analyze endoscopic video to confirm tool 
                    location and flag off-path deviations. The AI continuously refines trajectory 
                    recommendations as respiratory motion occurs, reducing procedure times and improving 
                    diagnostic yield. Case data streams into the My Intuitive cloud portal, where 
                    unsupervised ML uncovers practice-variation patterns and suggests workflow 
                    optimizations. Ion’s FDA clearance for lung nodule biopsy underscores its dual 
                    role as a diagnostic and therapeutic platform in minimally invasive pulmonary care.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>
            <div className="px-4 py-4 justify-start">
              <a
                href="https://www.sciencedirect.com/science/article/pii/XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                onClick={() =>
                    window.open(
                    "https://www.intuitive.com/en-us/products-and-services/ionS",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
              </a>
            </div>

            {/*  MONARCH Quest*/}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">
                     MONARCH Quest
                  </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    MONARCH Quest is an AI-powered software upgrade for J&J’s Monarch robotic bronchoscopy platform, FDA-cleared in early 2025 to enhance navigational accuracy during lung biopsies. It leverages NVIDIA RTX–accelerated computing to run CNN-based vision algorithms that fuse live endoscopic video with 
                    cone-beam CT reconstructions, continuously updating airway maps and correcting for CT
                    to-body divergence as the patient breathes. This 260 % increase in registration throughput enables real-time 
                    adaptive path-planning and overlays optimal biopsy trajectories onto the bronchoscope’s video feed, alerting physicians to millimeter-scale deviations. After procedures, Polyphonic™ analytics 
                    apply ML to correlate procedural variables uch as path deviations and instrument dwell times—with diagnostic yield, guiding practice improvements. 
                    Standardized APIs push AI-flagged images and quantitative reports directly into hospital EHR and imaging systems, streamlining documentation and reducing cognitive load. By embedding advanced deep-learning within an established clinical workflow, Quest boosts operator confidence for peripheral-nodule access without altering surgical routines.

                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,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")',
                  }}
                />
              </div>
            </div>
            <div className="px-4 py-4 justify-start">
              <a
                href="https://www.nature.com/articles/s41551-020-XXXX-XXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                onClick={() =>
                    window.open(
                    "https://www.jnj.com/media-center/press-releases/johnson-johnson-medtech-announces-clearance-of-monarchtm-quest-for-enhanced-robotic-assisted-bronchoscopy",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
