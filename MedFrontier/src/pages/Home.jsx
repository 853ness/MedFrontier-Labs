import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" 
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbSGvqtu_367V98RR8qZ3t5UlOGJnFh2OFSo4xQyAFM2w6QjPdgGvv0tO7WFSMGTbAbpId0CrTQ3eWrYgCg6jOg3rWaH41JA7ZYy9z3DVPfzBRfgniLSc1kNNDM-gzPflqXzy88HvCXSL2pdJC2LyTYrMpHEJY9dZzRD2fywjbIjqFW-Gz7MphaqI_aPf7wNgrowo4Tp9yfIo5Ef1K2hDeFbFeJdJ2jWIUOK_zWJQP9iO7NqndVNrGRbSB9Gdk5W8ehr2AKryULA")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      MedFrontier Labs
                    </h1>
                    <h2 className="text-white text-l font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Explore how AI-powered tools quietly elevate healthcare without replacing the human touch.
                    </h2>
                  </div>
                  <Link to="/diagnostic/tools">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black/50 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Click here to see more</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Featured Categories</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiBV52HfZZsYsFpGAJiiQW7GG7pgOLA7FxQ8M0x94SR1fa37JEUq9JvVj_dv9rIVrry6hwChM_tUUuYznK1bLvnkxghS42m9ldjXHuK0O8MD4HIHyhNv0WfIkYnvbQBzbnwudrMvzjAEk5C4qK2BryF5IUfve3yGwhIYnr485IbFwdjYn56yX2iXBddlgjSZyVc7QdXmtU7uULPMZvQvKsVG7ROqt7Zf6iHvX9_vB6EN6gfHGAtiIKKBcGuD6SVu8oRZN_Cai-kg")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Diagnostic</p>
                  <p className="text-[#93adc8] text-sm font-normal leading-normal">Where clincian intuition meets AI analysis to conquer diagnostic uncertainy.</p>
                </div>

              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUrFaLHytr7i6MHHGk3G13akURF40ftYvewHRtkDH7zQ87AvAyERh03cOKdnfAv9-mGRzcXaa-LMDKO5FgmzDpRTrkvLDw-tGPD0jzhAGmVHi9LMwTkaaKfdC_vblJtiCw6wQOk-dQKiXjbzJ9XXsxWP4SxWmRGMczeFbD14z79inDmASd5JCibrJi1jrpNrROxx9bPxfejHok6PT3QRFtvTiP1A71PAgSOM2M1cwDyI9REGDeHjBMJAFfOQswhxt4V0EwovYT7w")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Surgery</p>
                  <p className="text-[#93adc8] text-sm font-normal leading-normal">The surgeon’s hand and the robot’s precision, together they silence surgical risk.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJp0__zPJpsLxQ-Bi2_IX6jPODguQ266l85xbm0ih4oKrtJwNBbouQ2HGU1PsMmBvuq0hoBo3o7-epS5e1vie8PacCepNKM2Vq_3HXtygbQnUz3IXUwbg2E07HCnIVut0zpV1RxpRFC0JfcxknpNVrGwu8YEJ9BZ0obMPTqYNeT0xTDD8wxf37w3xSteQcicciwj7ia1nlxOM7jIHB0uTsS4Cc_lUjdF0Hlj2-zBAYOF2hS-O_XrbimN3rEJYffnJLlRvj1zDCMg")' }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Monitoring</p>
                  <p className="text-[#93adc8] text-sm font-normal leading-normal">Human vigilance partnered with smart systems to outpace complications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Footer */}
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-col gap-6 px-5 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <Link to="/about" className="text-[#93adc8] text-base">About Me</Link>
            </div>
            <p className="text-[#93adc8] text-base">
              ©Delaware State University |  MedFrontier Labs | Knowledge for all.
            </p>
          </div>
        </div>
      </footer>
    </div>  
  );
}