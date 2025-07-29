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
                                Robotics & AI Research
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

                        {/* Precision Surgical Robot */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Precision Surgical Robot
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        This advanced surgical robot offers unparalleled precision and control,
                                        enabling surgeons to perform complex procedures with minimal invasiveness.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkajEI3-lK99s1i3iZJwmiLWHXLHOxhhT6dS12PbjqzrhrL1JbrxcJF60xLPj9m4XsbvdLR_ghCH_BaWFquKlixvQj0U_NLRN-inv8adZES_0RlH3V4RAx0I7d8M9390d14rpZVwes48mqXInGAP0tthKPi56wiKW5-sA3IlecCkRHZWsEWFtlHoqZIhtXLhhRLYYhWsXzFvjd-LobucHB0pBWUB2bkurDUPQeMrx1AMaKVnIHmipZtIVgJ8CbrMfTwdOmKC4N3o")',
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
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Rehabilitation Exoskeleton */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Rehabilitation Exoskeleton
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Our rehabilitation exoskeleton assists patients in regaining mobility and
                                        strength after injury or illness, providing personalized support and feedback.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8uB4ySnDtIvS3VJogW9U2drIND7j9bL8crKrpw6NKyaOl1QS4gDf4rycn7MKmjaz9DSy3EQqi8krIuAz-Xfys108rikibDQzuyHkU8oRahsIpPyS-Z1jNdgqOKReEVeY107p0cGwAH7AT4eBdpsPM-1yhwtMPM3g0ql8niFrZgMthQgyhSjLhqhu1OSInYQ9XZ170Nz8XrdFiDe7AoHUYOAIfuOwvvR-UaW6qSDjo_eOj0ijpUYMuV2XEQpiq_QEVoEfdY_Z3-78")',
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
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Diagnostic Imaging Robot */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Diagnostic Imaging Robot
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        This robotic system enhances diagnostic imaging, providing high-resolution scans
                                        with reduced radiation exposure for both patients and medical staff.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3wK3z3WOFZOY1Gi0G3dpPuD8-NQuYHOqiXR0bfyJsAtdjFdEKksFLVe4WZTzhNmFsMMX093tXDn2uKtPlDzP8YXPFH3xZ6yxW30KUIVo8-IZKrs7dX07EO-DsjC1Xe9coHzJjaYPJM8VFgntFc_K5FR_44OGFC8_j_M2bJSTJ6_qF5svdU3nfT5b8yRrsSO0LEbjF44C1sKNotLIzBriN6jPD9qWtZ_6OhPOAExDaTLH8lW72z3tJbEsl6Bbd77DCupzBvjNKRbs")',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="px-4 py-4 justify-start">
                            <a
                                href="https://ieeexplore.ieee.org/document/XXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Drug Delivery Micro-Robots */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Drug Delivery Micro-Robots
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Our micro-robots are designed for targeted drug delivery, navigating through the body
                                        to deliver medication directly to affected areas, maximizing effectiveness and minimizing side effects.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxvL3ixBB6iqfUNWZcNwhItCJsGtF-H-roalUXMg2yODHJZlkN1PaviXOKJJAFoevKoaleC6zw5nL-wvNqOVguEcNzbZD33wdxEEcFvmjMFtTc4195bYUgP4lLWLY46YSEe5kdxyy7AUubNu5N2a_YPNwJHYgYU-bArzGbvrJFFz5r2tlWeRGDav1CoKl66So1eJEl1_EdWmgjE4gRqJjRtWz6UW9sI-F69yCpbrVecDBfo0_NHwxmRlXEguzpKL68u5pVRJDn-Sw")',
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
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Robotic Prosthetic Limbs */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Robotic Prosthetic Limbs
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        These advanced prosthetic limbs integrate seamlessly with the human body,
                                        offering intuitive control and a wide range of motion for individuals with limb loss.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw5rK4OOnUsT2f5IGfEg6eqkmwJpu9BYjlN4TRkKI2rR2R0PkSkS0jW2Wja7UA7pTRZEVH65_ZrYE-MKY8m-VAU3vj0HsKL4A46JMkZ5vhC4DE5JlMBgsajUcW1S6l6BiRhY_A73H_y3TL8zLSxbnDz_vRTOwts8BYAnVdSQasCBwduezi9D2sLtVMsU-w-OC4_fP5eCro-ONXl7XwjVmbATyN-SXr7KfpKbpoAbCkkOjmIU_Ahv_ql6eMdesaFDm0TW4W7QFSwwk")',
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
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full">
                                    Learn More
                                </button>
                            </a>
                        </div>
                        {/* Next Page Button */}
                        <div className="flex justify-end px-4 py-6">
                            <Link
                                to="/monitoring/wearable-devices"
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
