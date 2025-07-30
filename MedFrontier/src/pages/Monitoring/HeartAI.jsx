// src/pages/Monitoring/Wearables.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeartAI() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111518] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-8">

         
            {/* Featured Wearables */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Heart AI 
            </h2>
            <div className="flex overflow-y-auto scrollbar-hide justify-center">
              <div className="flex items-stretch justify-center p-4 gap-3">
                {/* Zio */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9EZQuUBm-0aQtb97UZ24tL1l0rrltHqA-g&s")`
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium">Zio XT Patch</p>
                    <p className="text-[#9daeb8] text-sm">
                      The Zio XT Patch is a discreet, adhesive ECG monitor worn continuously on the torso for up to 14 days, capturing every heartbeat during daily activities.
                       After the wear period, recordings upload to the ZioSuite cloud, where an FDA-cleared 
                       deep-learned algorithm, rained on over 1.5 billion hours of ECG data, analyzes the full 
                       waveform to detect more than 20 arrhythmia types with 99 % physician-agreement accuracy. 
                       Its convolutional neural network segments and classifies P-, QRS-, and T-waves, automatically 
                       flagging clinically significant events for review by Certified Cardiographic Technicians. 
                       This end-to-end service reduces Holter analysis time by 42 % and yields patient compliance 
                       rates near 98 %. Regulated software updates enhance algorithm performance while preserving 
                       HIPAA compliance. By combining continuous wear, advanced AI analysis, and expert review, the 
                       Zio XT Patch streamlines ambulatory ECG monitoring and improves diagnostic yield.
                    </p>
                    <div className="px-0.2 py-4 justify-start">
                    <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                     onClick={() =>
                    window.open(
                    "https://www.irhythmtech.com/us/en/solutions-services/fda-cleared-ai?utm_source",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
                  </div>
                </div>
                </div>

                {/* Eko DUO AI Stethoscope */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url("https://cdn11.bigcommerce.com/s-irr3ntsf5r/images/stencil/500x659/products/551/2365/2000x2000_partner_master_NEW_UI_-_Primary_Image__31849.1649097661.jpg?c=2")`
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium">Eko DUO AI Stethoscope</p>
                    <p className="text-[#9daeb8] text-sm">
                      Eko’s DUO digital stethoscope combines acoustic heart- and lung-sound capture with 
                      single-lead ECG recording, streaming data via Bluetooth to the Eko mobile app. 
                      Proprietary deep-learning models, trained on thousands of annotated recordings, 
                      analyze heart sounds to detect murmurs and reduced ejection fraction, and ECG waveforms 
                      to screen for atrial fibrillation in real time. An AI algorithm developed with Mayo 
                      Clinic achieved FDA clearance for identifying heart failure with reduced ejection 
                      fraction in seconds. AI-flagged analyses and waveforms can be exported as PDFs or 
                      secure links into EHR systems, streamlining clinical documentation. Regular, 
                      FDA-regulated software updates refine detection algorithms under HIPAA-compliant 
                      data handling. By integrating multi-modal auscultation with AI, the DUO expands 
                      point-of-care cardiac diagnostics beyond traditional stethoscope capabilities
                    </p>
                    <div className="px-0.2 py-8 justify-start">
                    <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                     onClick={() =>
                    window.open(
                    "https://www.ekohealth.com/",
                    "_blank"
                  )
                }>
                  Learn More
                </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wearable Categories */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Dive Into More Monitoring Devices
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Smartwatches */}
              <Link
                to="/monitoring/wearable-devices"
                className="flex flex-col gap-3 rounded-lg border border-[#3c4a53] bg-[#1c2226] p-4 hover:bg-[#2a3136] transition"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/…SmartwatchIcon.jpg")`
                  }}
                />
                <h3 className="text-white text-base font-bold leading-tight">
                 Wearable Devices
                </h3>
                <p className="text-[#9daeb8] text-sm">
                  Track your health in real time with powerful wearables that do more than just count steps.
                </p>
              </Link>

              {/* Heart Rate Monitors */}
              <Link
                to="/monitoring/smart-sensors"
                className="flex flex-col gap-3 rounded-lg border border-[#3c4a53] bg-[#1c2226] p-4 hover:bg-[#2a3136] transition"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/…HRMonitorIcon.jpg")`
                  }}
                />
                <h3 className="text-white text-base font-bold leading-tight">
                  Smart Sensors
                </h3>
                <p className="text-[#9daeb8] text-sm">
                   Discover how tiny, intelligent sensors are unlocking big breakthroughs in personalized care.
                </p>
              </Link>

              {/* Blood Pressure Monitors */}
              <Link
                to="/monitoring/ai-companions"
                className="flex flex-col gap-3 rounded-lg border border-[#3c4a53] bg-[#1c2226] p-4 hover:bg-[#2a3136] transition"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/…BPMonitorIcon.jpg")`
                  }}
                />
                <h3 className="text-white text-base font-bold leading-tight">
                  AI Companions
                </h3>
                <p className="text-[#9daeb8] text-sm">
                  Meet the next wave of digital assistants, AI companions that listen, learn, and support your well-being every day.
                </p>
              </Link>
            </div>

            {/* Benefits */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
