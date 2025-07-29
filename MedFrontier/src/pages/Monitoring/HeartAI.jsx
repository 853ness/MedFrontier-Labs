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

            {/* Intro */}
            <p className="text-[#9daeb8] text-sm font-normal">
              Explore a range of wearable devices designed to monitor your health metrics and provide valuable insights into your well-being.
            </p>

            {/* Featured Wearables */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Wearables
            </h2>
            <div className="flex overflow-y-auto scrollbar-hide justify-center">
              <div className="flex items-stretch justify-center p-4 gap-3">
                {/* SmartWatch Pro */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/…SmartWatchPro.jpg")`
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium">SmartWatch Pro</p>
                    <p className="text-[#9daeb8] text-sm">
                      Advanced health tracking with real-time data.
                    </p>
                  </div>
                </div>

                {/* FitTrack X */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/…FitTrackX.jpg")`
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium">FitTrack X</p>
                    <p className="text-[#9daeb8] text-sm">
                      Comprehensive fitness metrics and personalized insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wearable Categories */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Wearable Categories
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
                  Smartwatches
                </h3>
                <p className="text-[#9daeb8] text-sm">
                  Track your daily activity, sleep patterns, and receive notifications.
                </p>
              </Link>

              {/* Heart Rate Monitors */}
              <Link
                to="/monitoring/heart-ai"
                className="flex flex-col gap-3 rounded-lg border border-[#3c4a53] bg-[#1c2226] p-4 hover:bg-[#2a3136] transition"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/…HRMonitorIcon.jpg")`
                  }}
                />
                <h3 className="text-white text-base font-bold leading-tight">
                  Heart Rate Monitors
                </h3>
                <p className="text-[#9daeb8] text-sm">
                  Keep an eye on your heart rate throughout the day.
                </p>
              </Link>

              {/* Blood Pressure Monitors */}
              <Link
                to="/monitoring/smart-sensors"
                className="flex flex-col gap-3 rounded-lg border border-[#3c4a53] bg-[#1c2226] p-4 hover:bg-[#2a3136] transition"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/…BPMonitorIcon.jpg")`
                  }}
                />
                <h3 className="text-white text-base font-bold leading-tight">
                  Blood Pressure Monitors
                </h3>
                <p className="text-[#9daeb8] text-sm">
                  Regularly monitor your blood pressure levels.
                </p>
              </Link>
            </div>

            {/* Benefits */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Benefits of Wearable Monitoring
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Wearable devices offer numerous benefits for managing your health. They provide continuous
              monitoring of vital signs, allowing for early detection of potential health issues. They also
              help you stay motivated and engaged in your health journey by tracking your progress and
              providing personalized insights. With real-time data, you can make informed decisions about
              your lifestyle and proactively manage your well-being.
            </p>

            {/* Next Page Button */}
            <div className="flex justify-end px-4 py-6">
              <Link
                to="/monitoring/ai-companions"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#197fe5] text-white text-lg font-bold"
              >
                &gt;
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
