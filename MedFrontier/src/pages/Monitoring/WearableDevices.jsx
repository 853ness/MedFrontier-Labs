import React from "react";
import { Link } from "react-router-dom";

export default function WearableDevices() {
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
                                Wearable Devices
                            </p>
                        </div>

                        {/* Intro Text */}
                        <>
                            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                                From rings and watches to fitness straps, the things we wear every day are quietly 
                                monitoring our sleep, stress, heart health, and more. Behind the scenes, AI is working around the clock, 
                                analyzing patterns, making predictions, and offering insights that help us live healthier without even thinking about it.
                            </p>
                        </>

                        {/* Apple Watch  */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Apple Watch Series 9
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Apple Watch Series 9’s S9 SiP features a 4-core Neural Engine that executes
                                        on-device ML models for its FDA-cleared ECG app, Fall & Crash Detection, and
                                        sleep-stage tracking by analyzing heart-rate, accelerometer, and gyroscope
                                        data locally, preserving privacy and reducing latency. The ECG feature uses
                                        signal-processing algorithms enhanced by deep-learning-derived classification
                                        models to detect atrial fibrillation with over 98 % sensitivity in clinical studies.
                                        Fall and Crash Detection rely on time-series ML algorithms to recognize abrupt motion
                                        patterns, automatically triggering emergency alerts when the user is immobile. Sleep
                                        staging in watchOS 9 applies on-device classifiers to heart-rate variability and motion data
                                        to segment REM, Core, and Deep sleep. All health analytics run locally on the Neural Engine,
                                        and on-device Siri enables voice-activated health queries without sending data to the cloud.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png")',
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
                                            "https://support.apple.com/en-us/111833?utm_source",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Fitbit Sense 2*/}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Fitbit Sense 2
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Fitbit Sense 2’s Body Response uses continuous electrodermal activity (cEDA) 
                                        alongside heart-rate variability and skin-temperature inputs in a supervised ML 
                                        model trained on lab-induced stress tasks to detect acute stress episodes in real time
                                        The Stress Management Score aggregates overnight and prior-day physiological data to gauge 
                                        resilience, prompting guided breathing or mindfulness via the Fitbit app. An FDA-cleared ECG 
                                        app uses proprietary PPG-based algorithms to screen for atrial fibrillation on demand. Sleep 
                                        staging leverages ML models on PPG and accelerometer data, achieving ~88–90 % agreement with polysomnography. 
                                        All analysis occurs on-device or within Fitbit’s HIPAA-compliant cloud, with data integrations through Google Health Connect.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9PUT-N-PZ9qQsBONr0v6u__AFasY4T-Z6g&s")',
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
                                            "https://www.zdnet.com/article/fitbit-sense-2-review/",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Oura Ring Gen 3 */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        Oura Ring Gen 3
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Oura Ring Gen 3’s Symptom Radar applies ML-driven pattern analysis, developed from the UCSF 
                                        TemPredict study, to monitor dermal temperature, HRV, respiratory rate, and activity, flagging 
                                        early signs of illness up to two days before symptoms appear. Alerts categorize risk as Minor or 
                                        Major based on multivariate biomarker deviations from personalized baselines. Daily risk 
                                        estimates integrate with Readiness and Sleep Scores in the Oura app, empowering proactive 
                                        rest and recovery. All processing occurs locally or in a HIPAA-compliant cloud, with 
                                        controlled software updates refining model performance. Pilot data show 70 % concordance 
                                        between alerts and self-reported illness.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("data:image/jpeg;base64,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MEHgtYbc9ljMQ35qSzHm5fE77OQ8fI/865LaCIORa7ZyahkdGGmOQX3opMibalpOTlje9cx245pa8ZEEWN/I6LrXaDZum2hZuzRgn3XDKRp4EOGa1jtN2dzUzTeMV8I9k+zVxD8Lxr68syVFiZWqsKxD6E+5zOV2kaHgbEj+ulwZPSbWT4PTyU++wh13AAHeu8k3va1r8jmo/i+BmEtbC98gzvHNZk8XLUjeac8wLZLGy0roRYhwcODrFp52It/PRZbx6+uzi5/HxmKXGDA0B1yCd4kkAFzuZ/3tYKzLzUOMrs733BpYHj8AAOgCx4nLftGO62A8Whz9QvUuIh+gPwVs56Z8vJd21k8OpHYnNHCzN0jg1vLPiegUs2ipqTC3fRKbxFjQyaTXvZrgE8g2+ShGF0dTUvDmNdGB7zhuttyz1WVqHfRnFjHd7M/weD2GXyO6OLjpfhnzVbi3c1247i+vXatE/vCHDTvJLeV2n+azNGyOlq6+UsBkY8CFx9wyRgvI65/Mq0wXDxLJHHcbsY+sd7updI/yzPmAFNezfZw4/NLXSttAZXyRg6TOBswdWNAF+ZyzzWy6Y9nWz37Li7+QWlmFwDqyM5hvQnIn+EcFMERAREQEREBERAREQEREBERAREQEREBERAREQEREGHxvZikxwETRNcT7wADr8+p81AMZ7JDmaac24Mkz9Lm9/iFtdEHPNd2d19H7gIHFunyuPmsS/A6yDhb0H8l04vEkTZNWg+YBQcy/saebJ8kh6NFlk8J2TkkNo4nC+TnWLpCDroL26ALoMUUQ/wDGz8o/2VZrQ3IC3kie2tsB7PDI3dn+riP2rAfrpxf2HOabRx9AS4/h0WxqeFtM1rGNDGtAaxrQA1rQLBoA0CqIiBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z")',
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
                                <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                                 onClick={() =>
                                        window.open(
                                            "https://ouraring.com/blog/symptom-radar/?srsltid=AfmBOoqWZT7z7KZ_teZedpcPe8w24qO1MZ_DoZvdrhkC4YxLG0tD4BSL&utm_source",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* WHOOP Strap 4.0*/}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                        WHOOP Strap 4.0
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                       WHOOP Strap 4.0 captures heart rate, HRV, respiratory rate, and sleep metrics at up to 100 Hz, 
                                       feeding these into proprietary ML classifiers, reported to use over 250 features and gradient, 
                                       boosted decision trees—to compute Strain and Recovery Scores. The Strain Score quantifies cardiovascular 
                                       load from zone-based heart-rate and muscular output, while Recovery integrates overnight HRV and sleep 
                                       performance to guide daily training recommendations. WHOOP Coach, a custom ML–powered assistant, 
                                       provides personalized insights based on user goals and historical data. Continuous algorithm refinements 
                                       are delivered via regulated software updates, and all data is encrypted end-to-end.
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                                    style={{
                                        backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxgaGRgXGRgVHRcYGhoXGBgaGBgeHSgiGBslHh4YIzIhJSkrLi4wFyA1ODMsNygtLysBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwQIBQb/xABHEAABAgMFAwgFCQcEAgMAAAABAhEAAyEEEjFBUQUiYQYHEzJCcYGRI1KhsfAIFFNygpLB0eEzQ2KTorLxc4OzwiTSFTSj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxhCEAhCEAhCEAhCNXaW0pNnlmbOmJloGKlFvAangKmA2oRGu2+diWlSpdllFawl0qmuhKvqpG8R3sXyasfF7T5wrdOSV9MpMvqrly2kqRRypKwb/8AU+mcBPpMalo2rIlglc6UkDG8tKW73Mc32va86Y1+bMUFdSdeU4U3UJeo73xPfGoqeszPVneN2aHbq/jrxxDoi1ctNny6qtMutAzqc8CAXjzZ/OVs9JuhcxRYkAS1JdtL114gJNrACikMjCZKNQCxDsB7WbxjRtdvpcS60iovUKGcli/hkeAgJ0tfPFY0jckz1HMG4hhqQVP7MxHjWvn0lj9nZCrQmY2uO5+cQpaZyjUuovphgzcGEaqphaoV3YawEv2jn1tXZsshPFS1r0yF3XWNCZz47QeiLKBmLkw+D9J7eMRUQmrhX5xabtMvOkBMNk597UP2lnkLrW6pcqnjeY8eEfU7G58LFMYT5M2QSeslpyANSQyvJJjnRhWv6xUBjj+nlAdnbH21Z7Ui/Z5yJqRQlCgWOhGIPAxvxxfs3as6RM6WTMUhaWZSDdVlod4YUNDE38gOeRM0pk7QZCyQlM5IZJJYATR2C/aG7j1QKhMMIoDFYBCEIBCEIBCEIBCEIBCEIBCERRzwct5kpQsNmXcWQDOmAsUJLAJSodUkFycWIaA+i5fcv5dhBlSgJtqKSQhwyNDMq5JxCRUscBWIO2tt6bal9NaJpmhYuqKgNxsQlIACQ5qAH4HPxitRwDTEPQAm+FKKiQ9Vi9mqlRQxaqaE737tbBVSQCzkCrrIqGDJfhAb0xZPoyXIrLUa6sCcDpkcmOAt+eF+lZlppMTrV3UC2rgm6aNWNOYk1lEspAdKiWYNg4FBgGTWKCYaLDuOsliSQ4KilOQqd5XGAz9OnAh5cwUo7FzgMSMcBmN7ERaVqUySd9NULrXHE4cLrq6xpGFwAXLy1MVHEJUQHvKd1mmDtj3xiCVFpd28skBFA6rzhIA7IJYa18g9Sx2PpgZswlKaJ3etNWAlRCSRusCgqWzC8kAEqAimzbSmyT0zZlnl2lCXeVOe6XYPoVMMVBQzZ2I9laQlkJLpli4k6hJN5X21la+5QGUeNtsC48B97aebyy7Rswt2x1dGWIXZpiiU3w15AU5KFcC6S6cBET22TMkqMuahaJiVMpK03Sk4szaN58Ylb5Ou0VC1Wmz9hckTeAVLWlGGpEz+kRInOTyBlbRlX0Mi1IG4s0CwHPRzNU1LHFJwo4Icu9OKthl8frFxXgC3H4w9sZdoWNUqauVNSUTEKKVJUKgjL9RjlGqZYdsDAF65Yf4gqVVs4oEEYGBJDjWAxlMAoiMgXWow0/KKBQ8Tnp4GAl7mh5zDIUmx2tTyFFpcxR/YnAJUT+7JZvVJ06s/xxKnhl4PHQfMby2NolfMZx9LJS8tRxXKFLvFSKDikjQmAleEIQCEIQCEIQCEIQCEIQGttK2okypk5ZZEtKlKPBIcxydtW3m0TZs+aKz1qN44JJ3kj+KgYDRtBE28+23eisaLMksu0LrwloIKvaUjueIIQUsKkoUAkFgSlQDHowerVnXAXXjWnpEYgkb6AxJmKGRoyQfdUJgG8HKJgILUOY3A24h/dFFhVEki+k7pqUqwFKPMW78Ipf6yrpIP7RBJBfeYrVkM2EBaQ7IURuk9GqpSKgskdtRPtiqVE7wG/wBtGawyXUo5B8hFLvVST1m6JbVxASEB90cTFocvhfSBeS9CAAHWrtGuHHwgCiAHLGWrBTbqDVwhOZd6x6GwJR6RUyvoUm6osT0q1KRLP1kuuZ/sx5xNCpPVVQvRjXqJ7Ke+PoNlybklAOK3mqw7W7KHggFXdPgNlgAwwGEeDyhnVSjxP4R7izHyNun31qVk9O4UEB6XJHa06yWqVaZL3kLSCPXSospB1BD+w5R18I5f5t9ifOLbZZLOArp5nBKWIfgwA/3hHUEBE3PnyLE6SdoSUjpZKfTAD9pKHaOqkB6+q+gjn8zBg9TjoK8cMvKO11oBBBAIIYg1BBxBEco85HJgWG3TZIG5RcvjKW93vukKS/8ACID5h+1kKagnvamGesUu4DM4/oc4suNUOIpeUxHrY8fCAuIeLVARd0oxyGCcdM8v0i4JemJLOSzjDA5wGC5HocntrTLLaJVolFpktYUMgWxSeCg6TwUY1WFSCbvt8oxlBB73wy79IDs/YW1Zdqs8q0SjuTUBQ1D4g8QXB4iN6Ic+Txt+9KnWJaqoPSywfVUWmADGi2P+5ExwCEIQCEIQCEIQCEI8nlZtcWSxz7QcZcslPFRogeKiICAOdTbXzraU26Rdkjopbml5CgVMMyVXg2fm3yPrKbEelSTXPeWewHrdEUqWKqlZ6/bCrxL4MnEOo/hFQSMGCkimJRMDMGDPMXm+FPMKB91LmtJK6A4gBKR2BjvGLFHEgBxRScUlwoORitcZHTvUVcJ30EspJehmKyFHYN+EY1AkpF43sJa2a8GSAlKMscTqIASB6xQrJ98EEgBWSE0+MqY3QSLyWKV1udkAAdpVD5cDFTW+UoAI66HBGCheUo9YuQWHGLVLSKu6Cd09pDP1E9kPnAXWeymbNQgApXMUEklxUlLqbICpbhH1C5gUSpIZJO6GZkABMtLcEBI8I8TYMjemLNbiejFa35t5B8pSZx7wI9hRgNLa8+7LVqaDx/R4+cskm+tKcATU6AVUfAPHocoJzqSnQOe8/p74xbKkKU91N5SymUgespeI8QLv2xATjzEbGaXPtyksZyrkvhLSd5vtMn/ZEStHncntlpstmk2dNRLQlL+sQN5XeS58Y9GARFHyg9g9LZJVrSN6Qu6vjLmECurLCPvGJXjzeUmzBarLPs5/eyloB0JBunwLHwgOOWoDgSaA1cZ1hcq2DOCPjxgt00IKTUMrIVB4guPZFyFg8Ugu1LxObawFt3hFi5XfGU4YuqhcdlqMoa0ihzfDI+tVqQGO+zPVsGo0BM41OKv0i9Scs9IsKQYD6rmz2z812lZ5r7hXcX9SZuEngCUq+zHWMcRSiQeINDpx90dlcmdpfObJZ5/0spCzwJSCR4F4D04QhAIQhAIQhAIijn+2xdkSLICxmrvq+ojDzJ/piV45r52NrfONqTyxWiQkSgkFqJe/wG8pVeA4QHyFReoHSB0iHoQEsFKU+NeqnXyLbdqSkvcVQLDEJZv3aWH+YopXU3qB+jWATdLtdSkmpLdY6aiKBTOyQ4Drlu4LCilq1N47ogLSFcLw+4sdVwMZi3LvqD4gQAaKKe0nBaTqo9hLjARUpFKkp7CgGUOyAE9hLjGLejxwChU+ooN2lM61Pl3wBQDJdQp1JnZowAA7SqY8IoXBOKVmi0mpVg5J7IfIVpFCvQKumhSRvA1Po09lLn4IixUtSrstLKKiEpY1JVgFHMuod3lAfRbKl3ZEsMxXemkfWPRo8ghR/wB2MyjGSddClBPVBCE5uiWBLQfFKUnxMaG0512Wo5sw8aQHztrnXlqVqfZl7IkHmX2QZ+0UXgCiy35hLYr3QAeN64R/pxHtm6z5JdX3ageJYeMdA/J/2N0VimWhQ3p62B1RLcf3qmeQgJShCEAhCEBybzibPTJ2la5ek9SgKUTMaYkdzK+Gj5gyw9KGhiR+faylG1SoN6STKUMqi8ip1ZPtiPWBroA+VXbxygMRevfU5l9dYulrc0AfJOWGI0P6xcE1pFsyWIABiMQKl8Xwpr+sFDHi7cANdMq98UUghmq2HCKomOS5uqOKjnw+NIDGUEE+8YR09zIW7pdkyg7mWuag59srSPuqTHMzinZ/hxfHP2RPfyc7Q9ktMs4pnhX3paE/9ICW4QhAIQhAIQhAae2LemRImz1Fky5a1n7IJjkdc4rUqas7yl3it90KJKiFHN/V/SOhOe/anQ7MUgFlT1oljue+r2JbxjnlIAGBbBScSRg8lOrdowF6goXwxCu2jBRAxI9RL5DSLFdneBSC0tbUSRVkpxWXep1g7UcMCClTunNRE1XaVgLsVSvO6XI30tvKGssNup48DpAW1dQbexWhxvgdpSnZOPVEY7wACn3HZKm6ihvMlOJqRWLmDAOCkMUq7MsneIWe0cvGLySFZhbMrIzE47owSGArw74CxjeZ97Igh5gFd9WQYCkbmwkenvsB0SFzGGF4bkv/APUy/ho0QgMR2e0gP6M0DqU7nDD8o9bYstpa1evMSjjdlpvzB982c+HCA3wGAAwAbyjxtvTaJT4/gI9dRj5vasy9NPBh+fteAxSUOGZypQSwxYbym/pjr7kzsz5tZJEjOXLSDxUzrPipz4xzTzZ7J+cbTsstnShQmK+y82veEpT4x1TAIQhAIQhAQB8oyU1ssymd5BB7kzCf+wiKQp8PA/RhxjrpExfKL/b2P/Tnf3S4hxSB8UgLlY+JL/SH8P1i8qxpVqj1Rj4xiDpOoNK5PpoYq4bMjLUUxVwgC2IcaxSYMfH8IvauKXpvHqYYd/5GAPAvShx0w+MIDXLpZu4PE3/JtnUtqP8AQP8AzCvGkQjPGHfh8YRNPybevbfqyP7p0BOMIQgEIQgEIQgIM+UDtS9abPZwxEuWqaocVOz+CD5xF3qh6t6NQopQYUUewgA5ax9HzkW/p9qWpYUAEzBLQWfqMlhqbyVHxj5tSQytwsWK5blxXrzFdnu4wFKbxZN0HfTS6gk/ux2lMItaqU6jdL1UMWmKyGFIuUDQ3qgMiY1FDqXEJzzqa0i1YFWSWL3pbl0l2ClqxxandAU1IAp1h2BWhQnM09sUo1Sq6Xun949AxPZSz+2KvUErDgbkxmDANdSM8w/CAFSyS568t6rbtE9kEKPlxgLVKqbzOKbvVI6r/wASsffHv2VF2VJSWfo75+tNUV/2CV5R84uWVBKEb14slKciaXRqSVDy4x9VaWvrCeqFFKW9WW0tB8UpTAYZimrpHy1VK4qPvMe/tOY0tXGnnSPn5ZZzoCfHAe0iAmP5POzr861WoigSEJP1zUd4CB96JyiPuY3ZfQ7LQohjOmLWX0DSh4EIf7USDAIQhAIQhAQN8oif/wCXZk5JklRo+KyH9ntiJlIamuHEYg8O6JI5+7UDtRKbzXJEsOzsSpa8M6RHCEPuhOLOjNVcb2VcoAv498WLSG97Rek0cNd9bJJwYjtUz4xXMDMu3EOWI0z8oDCHTkFDQ4PhF4IzJb1u0OAGn5xcpOv5d34xatNXz1wgDZGhxDYHUq44tE0fJulUtqv9EPxHTH8YhJKyktRjl7RE/wDydLO1jtC/WnhP3ZaD/wBoCWYQhAIQhAI19oWkSpUyYcEIUo9yQTGxHznODahLsE1w966gjVKlAL8Ll7ygOXVzyq9NWAAtaipZqpJJd0jV88neKB7zML4rdekxIzmqz7j+MfVKTK+hk/ypX/rGJSJX0Ur+XL/9YD5ZK0teJNwmqmrLUAS0sZVKa8BFykqvXbu+OwG3wBUzFZ4EseOsfRlMr6OX/LR+UYyiV9HL+4j8oD5wKF29il94nCWTVpY1qajSC8gSQT1FDrTXLhziMR7NI+hUmX9HL+4j8otuy/o5f8tH5QHl7FP/AJMtZSB0ZVNKUigMlKpreN1He4GUepLSyQNAB5RfKKQld1KE0Cd1KU9ZSXDgeqFeUWKMB5m25m6kal/L/MedIQ4OlHGrVaNnbC3WBoPfHq8hdmm0WyzSQHvz0OP4EG/M/oSqA6h5NWD5vZLPJ+jlISe8JDnzePShCAQhCAQhGK12hMtC5iyyUJKlHQJBJ9ggOYedG2dNtS1qBvATQgCu6ZSBLP8AUD5x8gZT4a4ZRt2i1qnTJkxVVzFqWce2oqJBOVe/8MSQGfHiPjGAxpUXBLBQauI7rusXJSMLpydD72pN7IM3nFLuDj4/xFqkHy959/ugLkGgcgim9gBjQ5mKLTXwpxFawlzHL4K4iitAE5HjFWxDFnqjtDXey/WA1Zg3j3R03zH2Po9kyi37Rc1f9ZQD5JEc0qQMmPc4oMPcY6+5JbP+b2KzSTjLky0n6wSL3teA9aEIQCEIQCI756Ldcs0tD1UpSm1AHRn/AJH8IkSIY+UHPUDZwMGNX1JcNngPKAjY2mNq2BiohiLymb+K70fBiFJI7jHy6rQYzr2tMJcsd8LarOAwDP1Wo0B7LhzUNU0INAFEjvoPvRjvgovszBRID1AVLSK96/6dY8KXblJZsnxzvAJIPBveYuVtNT1Au3bt0OBde82r3qvi8B7ClUSUpcqAZNakqWmmbbvtMa9qnpC1BJdIUq7nRy1c6R5k7aSlA0AJIwcMkJCQgB+qAO+NY2gwH0liW6H1X/Ymv/IPKMyjGls+Z6KXxCz5rKfckeUZJs5hAeNbVvMUeLeVIlDmEsaVW8rUQ8uzqKU5kqUhJUO4Eg/XERUS574lTmG2dNmbQXaACJMmUpBODqWUsnvYEtkw1gOgoQhAIQhAI+N53dp9Bsu0MTemgSUtj6Sim+zePhH2UQrz/wC2PS2ayg9RC5yhxU8uX5DpfMQENpYjUA+KSc0gdbKsFJL4uTnTeGACjgnDCLgnSh1evxhFFOnIFL1DbtMwNcfOAy3wRo2OmPt7xFq/fFl4UqS1AqhUKdVWSQSTFQK0Zw7h905veOfdpAWqS/xpGJS28MPZjr4xnABGmArRj3fGcYLZknCA9rkXs751tCyymcLmofQoSby6fVQqOuY59+T5snpLbNtBFJMth/qTDdBfW4lf3+MdBQCEIQCEIQCI/wCePk4q02UTZaFLXJclKQ5KDdKilPaIKRQVYqZzQyBCA45WqT60WdHKOChEgc/PRf8AyCEIky0lMtKpiwkJMxSybxmKDFd1KUM+DmI0VZwygGxdJzW+AAgNk2ZHrCLDYxqIw9AN1TdajerXFR+PZFgs26oDFNSdRwEBmNhiw2IxYZYF1RBunAA1NSK6RcJKgVJc3saGgHx+EBuy1lMtIPZKh4FlJ9t/zEYZ9ocNGoHIoVYF3NKNlpWMkiWSsJOZYkZQHp8lJFmXbJCbWsy7OVgTFjIVugnsgqYFWQJOUdbbJ2bJs8pMqRLTLljBKQwriTqTqamOQptlJCUS0kqUoAAOSpRBAAAxJwaOvdjSFS7PJlrLrRKQlR1UlIBPnAbkIQgEIQgEco8uNt/OtoWm0CqCu4ku/o0bqFJYZgO2TmOhOczbZsuz5qkH0s30UoarW4p3JvK+zHLsssQGCS9DhnQKJwFMtYDLT2AiLEJNHPx8GKBLYBtU1GgBSOsrXwi5JwFSMlZ8SRlUwGO7WjZUyPeM4tUoOxw8yku5uZMzeUbASH/CmId39kWNqH8sv8wFjl7z1yUG3uC1dwyjFNGeBGWWQoTiDWKilcRoagcRk/5xtbJsK7TaJUiUSVTFpQm9ViqjngHUe4QHQnMbsfoNmJmEMq0LMyuNwbkvwITe+3Ehxr7PsiZMqXKQGRLQlCRolICR7BGxAIQhAIQhAIQhAc8c/NjubSTMPVmSEEjB7pUlSX1LCI2JwU1XFweoQaOM8tYnr5QWxOkskq1BF4yV3VnMS5jB/BYR94xA6iSX7aqOeyHwWMu+AsCcR3GZ3fw+Zi0EUOjdHTFsjTUCnfF3Rg0rcQHPrAkZapf3wcvepeUd1ORD5eqeEBakmozPXfs1Zx5iKkAhnZIdl+sdD5xQJyvEHtKzDh7p1DxRxmBdDsMlHBxxwpAFqLuRdqKYNp5v/TDpbrkNQg4jzbzwiixStXDtgUs7A+w/5j0NhbTNmtUi0AE3FoU1S4SXUGOLpceMBLHMTyXnmaq3z5d2X0ZRJC01UpRSTMS+AABAOd8tnE2xjs09K0JWghSFJCkkVBSQ4I4ERkgEIQgEIR4XLblEiwWObaVMSA0tJ7cxVEJ86ngCcoCHeevlJ09tFmQr0dmSxb6ZYdR43U3QOJVEcTEjBh4eHurFZs5ZWpaiozFKKl3mN91OVAYkkvpF4CSxFTTTXDvbKAwOXxLjAh3+0XcpEWINCMu0jVmAKU4nWsbKZaga6l/efwjHNRm7HEn4xGUBbLUzbxal09YsKXVDBNTFxW5INCMWwapIBziwnhizpyPVG6kZu5qYADdDuH3VUKk9XEYDxgNe2HAAcYlL5P8AsDpbVMtag6bOm6in7yYGBB4S738xOkRhPDkC7v0onefJgBQEuAw1jqvm95PfMbBJkEDpGvzWzmrqryonuSID6SEIQCEIQCEIQCEIQGntnZsu0yJsiYHRMQUlsQ4xGhGIOojknbmzplltM2zzP2qVFBbTFwO0lQYtjUR2FETc+fJEzJXz+SkdJKQUzh60p3C6dpFa43TjusQgi6CG7CM9VUe4rXNjFFTO0WdVAMAA/aGKTQVGUZGrdFQKqzvHE/Wq2hjCF9rWieGAxaudDAVUjsuaB1K7QBYF/WS8UWe0QLlbqeyTgW0NRSLgigQPrKODYnHFBZuEUoa9lOAIxw6wwOBqK0gLFDMuVK8xUgvr3xYA4aj4jCL3LDNSjRzhpdOXcdIsKrpo51yzOT1ygOiuYnlQLRYzZVq9JZmCXxMk9X7pdFMAE6xJ0cg8kuUEywWqXaZQdsUk0WlVFoJyfLFiAco6y2PtOVaZMufJVelzEhST7wRkQXBGRBgNyEIQCOeedzlN89tPRSy8izkpSxouZUTJhPDqp4XjRxH3nPBy4FllfNJKx080Msg1kylYngtWA8TkHhJSQAAk0owZsWy+HgNFKTQOygd1VfJRFVFotOdAw6yM0lusEgsGbMxtTElmIHtc8PjSMPREFwxahSXIIzDZ+MAkkggHezSaGlescHwpFxQ4fKjs/e0YZiAGBe6+6SzoVoSaJfQZeELxG92046LDNicQwIAAgBFK8cfB/jKMSlJQWxBqUnBsfONorTdd+4sca01DVOEaezrFMnzUSkJKpkxSQkCjlVAH0zJ0c5QEgcyXJn53bfnCw8mzXV1FDNNZaR3MVnTdfGOjo8PkXycRYLJLs6WKgHmLFL8w9dX4DgAMo9yAQhCAQhCAQhCAQhCARatAIIIBBDEGoIOIIi6EBzbzr8hFWGb0koAWOatw37pTP0asmxKTpRw1fhFU3mpUJzejY/n4GOxbfYpc6WqVNQFy1ghSVBwQY5z5webyds5YmIvTrGAopUEl5ROU27QY0XQE4scQ+CILt2lVLZDFnxbzEVKElx2E+3ywOODiLymj1vrNGyGPsHuNYLQHu4pS7nVX44DXvgMTmqjVSqDD/B8a0i0o7OlS+X4pyxpWL1V32xoka8OPtgpBDJxUcTp3aeB8IDEn1asXunu8/ZEic0vL42Cb83n/AP1pi94n90ohukDDqndCh45F49mJBBaiU0Jwq2fewxAwMEm82IIwOtIDtGVNSpIUkhSVAEEFwQaggjER8ty+5aS7BLuhlWhaT0aMkj6SZ6qAfFRoMyIO5G859tsMlVnTdmIu+jEyvQklyUs15LPuEgClRUHz7Xb1zyqeozFqUXXMIBdVOvRk9mlBgzBhAatvtMxcxU2ctU1UwnpVHEk1cEBwKkMLoZg0a3Rqe6DvpDpIreGhydmoo0eNla1FwpCsCWunClcMMIwz0puhjVJ3Xy1DnLhTEQGZE9KkpUWTUAnIGjOcE+bdwik+QUl6nSpr3tlh8CuqqaBvOyV0WDiDmeAwreeukZZM1SHSDUB01ooVPc/j5tAUnIvYhu6lGjCEkMXZSeqrgKkE4+TRtmZLUm8AQXD3siBrgY8m0TzMZ+qBQZltdP0gM0ya2AqtnTQVfF8akHPOJv5keQhkIFunp9LMT6FJFUSzisvgpYw0Sf4iB83zQ83PzhSbbak+gSQZaCP2xAoov+7B+8RoKz9AIQhAIQhAIQhAIQhAIQhAIQhAItmICgQQCCGINQQcQRmIuhARNyw5nELUqdYFJlKKSDJmOUE5XFVMv6rEYNdaId23yftNkKZVplLlXqlShRVahKsFHgD+cddxZNlJUClSQpJoQQCCNCDjAcblYLrIZIcJAzOp/wANjpFlw09db+Xe/wCUdRbS5ttlTi6rIhJDsZZVKZ+CCB7I8O1cy+zlElC7RLJ0Whf96FEeBgOdujBZI6oqTrh8MP1jHMDuo0GXFsHicbXzEpYCVbVBi5C5QN4cSFCrv5x5Fr5jra+5aLOsAUCukl17gFd2MBEqjkqhyV+PxplGaTa5kt6liKtgRxGBxPmY+8tXM7tZIJCJS1E1uzQ+tAoD3x5Np5tdryy3zOYp/VVLWPYotnAeRI2q4F4k3OoU4oOOeIxx1jYTtRNXHWYLS1FMesPVJIPmMWjHaOSVvSTesFqS1HEmYoeYDZe0RpnY9oSw6KeG1lTPy7vZAZ5lrQQ10KIO6pSQ+ThfrJbLjlGvaJySXa4xoxNKnD4OUbth5KW6aWl2W0rbH0S0ipGJIAwPwI+z2BzK2+afTmXZkN2iJy3IyQlV3xKh4wEcSVqJ3RVVGbrZBgMSX9sTDzcc0RVdtG0UsjFFnJ3lVcGd6owPRjWrVTEi8keQFi2fvSkFc5mM6YbyuN3JD/wgcXj6qAolIAYUAyisIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQH/2Q==")',
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
                                            "https://pmc.ncbi.nlm.nih.gov/articles/PMC11853583/?utm_source",
                                            "_blank"
                                        )
                                    }>
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Garmin Venu 3 */}
                        <div className="p-6">
                            <div className="flex items-stretch justify-between gap-6 rounded-xl">
                                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                    <p className="text-white text-base font-bold leading-tight">
                                       Garmin Venu 3
                                    </p>
                                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                                        Garmin Venu 3’s Body Battery metric uses Firstbeat Analytics’ proprietary 
                                        ML models to combine HRV, stress, sleep quality, and activity into an energy-reserve s
                                        core, helping users balance exertion and rest. Its Sleep Coach applies on-device predictive 
                                        modeling, analyzing multi-night sleep trends and HRV, to recommend personalized sleep-duration 
                                        targets. Irregular-heart-rate alerts during workouts leverage pattern-recognition algorithms 
                                        on optical sensor inputs. Advanced running-dynamics metrics (ground-contact time balance, stride length) derive from biomechanical ML models fusing accelerometer and GPS data. All health analytics sync via encrypted protocols to Garmin Connect for long-term insights.
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
                            </a>
                        </div>
                        {/* Next Page Button */}
                        <div className="flex justify-end px-4 py-6">
                            <Link
                                to="/monitoring/smart-sensors"
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
