import React from "react";
import { Link } from "react-router-dom";

export default function SmartSensors() {
    // src/pages/Diagnostic/RoboticsTools.jsx
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
                                Smart Sensors
                            </p>
                        </div>

                        {/* Intro Text */}
                        <>
                            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                                From wearable tags that track your breathing to smartwatches that flag irregular 
                                heart rhythms, and even thermostats that adapt to your habits, smart sensors are turning 
                                everyday routines into moments of meaningful health insight. These discreet and intelligent 
                                tools are designed to learn from you, helping you stay ahead of what your body needs.
                            </p>
                        </>

                        {/*Nest Learning Thermostat */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Nest Learning Thermostat
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        The Nest Learning Thermostat uses supervised‐learning (“Auto-Schedule”) to map your 
                                        manual temperature adjustments and phone-based Home/Away occupancy sensing into a 
                                        personalized heating/cooling schedule within days, running all ML locally on the 
                                        device for privacy . Its Savings Finder then analyzes historical energy-use data to 
                                        recommend tweaks, cutting heating bills by ~12 % and cooling bills by ~15 % on average.
                                        When the house is empty, it automatically switches to Eco Temperatures and reverts on your 
                                        return. Integration with Google Assistant and the Google Home ecosystem enables voice 
                                        commands and coordinated automations. Installation is DIY, and all learning occurs on-device 
                                        without sending raw data to the cloud.
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
                                            "https://blog.google/products/google-nest/new-learning-thermostat/#:~:text=It%20features%20a%20larger%20display%2C%20improved%20AI,health%20and%20send%20alerts%20for%20potential%20problems.",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Withings ScanWatch*/}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Withings ScanWatch
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        ScanWatch is FDA-cleared for on-demand ECG and SpO₂ measurements, combining PPG 
                                        and single-lead ECG sensors with on-device signal-processing and ML-based classification 
                                        algorithms to detect atrial fibrillation with clinical-grade accuracy. 
                                        ECG capture is user-initiated via wrist-touch, and AFib detection was validated against 
                                        12-lead ECGs in a Good Clinical Practice trial (NCT04380389). 
                                        Sleep-apnea notifications rely on sustained overnight SpO₂ desaturations rather than 
                                        full polysomnography. Data syncs securely to the Health Mate app for long-term trends and 
                                        export for telehealth. All processing and encryption meet HIPAA standards
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
                                            "https://support.withings.com/hc/en-us/articles/360004508038-ScanWatch-Clinical-studies?utm_source",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Spire Health Tag */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Spire Health Tag
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                       The Spire Health Tag is an adhesive sensor that continuously measures respiratory rate 
                                       (via bioimpedance), heart rate (via PPG), and activity (via a 3-axis accelerometer), 
                                       uploading data to a secure cloud analytics engine. Proprietary ML-driven pattern-recognition 
                                       models compare live data against patient-specific baselines to detect deviations indicative 
                                       of COPD or asthma exacerbations days before symptoms arise. When risk thresholds are crossed, 
                                       the system sends encrypted alerts to clinicians via a Home Hub and mobile dashboard. 
                                       Interactive trend graphs and risk scores support early intervention and remote care. 
                                       All algorithm updates are delivered through regulated software releases under HIPAA 
                                       compliance, ensuring continuous performance improvements.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/fiercebiotech/1558531930/Spire_Health_Tag_Placement.jpg?VersionId=vTT0xHsjM2iEDo0yjwFFVMZC4b0JEYJ9")',
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
                                            "https://www.fiercebiotech.com/medtech/spire-health-launches-copd-tracking-study-its-machine-washable-wearable?utm_source",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>
                        
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
