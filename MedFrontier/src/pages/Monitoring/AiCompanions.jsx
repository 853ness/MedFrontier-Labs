import React from "react";
import { Link } from "react-router-dom";

export default function AiCompanions(){
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
                   AI Companions
                 </p>
               </div>
   
               {/* Intro Text */}
               <>
                 <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                  Whether through a calming chat or personalized mental health support, AI companions 
                  are becoming everyday listeners, guides, and helpers. These digital allies learn from your words, 
                  adapt to your mood, and offer support that feels personal, thoughtful, and just a tap away.
                 </p>
               </>
   
               {/* Woebot */}
               <div className="p-6">
                 <div className="flex items-stretch justify-between gap-6 rounded-xl">
                   <div className="flex flex-col gap-2 flex-[2_2_0px]">
                     <p className="text-white text-base font-bold leading-tight">
                       Woebot
                     </p>
                     <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                      Woebot is a chat-based mental health companion that combines rule-based CBT 
                      flows with NLP classifiers, trained on annotated clinical dialogues, to detect emotional 
                      distress and cognitive distortions, guiding users through structured self-help exercises.
                      It flags concerning language and offers crisis-resource information when needed, though it 
                      is not a substitute for professional therapy. Randomized trials demonstrate significant 
                      reductions in anxiety and depression symptoms within two weeks of use. The platform updates 
                      its response library via regulated software releases under HIPAA standards, ensuring safety 
                      and data privacy.

                     </p>
                   </div>
                   <div
                     className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                     style={{
                       backgroundImage: 'url("data:image/png;base64,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")',
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
                         "https://woebothealth.com/technology-overview/?utm_source",
                         "_blank"
                       )
                     }>
                     Learn More
                   </button>
                 </a>
               </div>
   
               {/* Wysa */}
               <div className="p-6">
                 <div className="flex items-stretch justify-between gap-6 rounded-xl">
                   <div className="flex flex-col gap-2 flex-[2_2_0px]">
                     <p className="text-white text-base font-bold leading-tight">
                       Wysa
                     </p>
                     <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                       Wysa is an AI-driven conversational agent that uses natural language understanding to 
                       classify user inputs into emotional states and CBT-based therapy intents, routing dialogue 
                       through mindfulness exercises curated by clinical experts. Its supervised ML models were 
                       validated in JMIR-published trials, earning an FDA Breakthrough Device designation for chronic 
                       pain and mental health management. Reinforcement learning from user feedback personalizes 
                       interventions over time. Escalation triggers connect users to human coaches or crisis resources
                        when high-risk language is detected. Aggregate analytics refine Wysa’s ML pipelines through 
                        HIPAA-compliant updates.
                     </p>
                   </div>
                   <div
                     className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                     style={{
                       backgroundImage: 'url("https://blogs.wysa.io/wp-content/uploads/2020/01/wysa_blue_icon.svg")',
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
                         "https://blogs.wysa.io/blog/research/wysa-receives-fda-breakthrough-device-designation-for-ai-led-mental-health-conversational-agent?utm_source",
                         "_blank"
                       )
                     }>
                     Learn More
                   </button>
                 </a>
               </div>
   
               {/*Replika */}
               <div className="p-6">
                 <div className="flex items-stretch justify-between gap-6 rounded-xl">
                   <div className="flex flex-col gap-2 flex-[2_2_0px]">
                     <p className="text-white text-base font-bold leading-tight">
                       Replika
                     </p>
                     <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                     Replika is a generative AI companion built on proprietary transformer-based language models fine-tuned on individual 
                     user interactions, enabling personalized conversational styles. It employs sentiment analysis and intent recognition 
                     to adapt dialogues, maintain contextual memory, and offer emotional support through text or voice chat. Continuous 
                     supervised learning guided by user feedback evolves its responses over time. Replika can engage in creative prompts, 
                     role-play, and self-reflection exercises with customizable avatars. Data is encrypted locally and in transit, and users 
                     control data deletion.
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
                   href="https://ieeexplore.ieee.org/document/XXXXXXX"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <button className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
                   onClick={() =>
                       window.open(
                         "https://replika.com/?utm_source",
                         "_blank"
                       )
                     }>
                     Learn More
                   </button>
                 </a>
               </div>
   
               {/* Youper*/}
               <div className="p-6">
                 <div className="flex items-stretch justify-between gap-6 rounded-xl">
                   <div className="flex flex-col gap-2 flex-[2_2_0px]">
                     <p className="text-white text-base font-bold leading-tight">
                      Youper
                     </p>
                     <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                       Youper is an AI emotional health assistant that leverages customized large language modelsm, 
                       augmented with safety filters, to deliver evidence-based interventions grounded in CBT principles.
                       After a personalized assessment, Youper’s NLP classifiers detect emotional states and guide users 
                       through tailored therapeutic conversations, offering exercises for anxiety, depression, and stress 
                       management. The AI tracks symptom trends and provides insights via interactive progress charts. 
                       Integration with teletherapy platforms allows secure data sharing with clinicians under HIPAA protocols. 
                       Stanford studies report significant reductions in anxiety and depression scores after two weeks of use. 
                       Continuous, controlled model updates balance personalization with ethical safeguards.
                     </p>
                   </div>
                   <div
                     className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl overflow-hidden flex-1"
                     style={{
                       backgroundImage: 'url("https://cdn.prod.website-files.com/61e99bc447a4ff5793348218/61e99bc447a4ffa113348245_Youper-Logo.svg")',
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
                         "https://www.youper.ai/tech?utm_source",
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
                               to="/monitoring/heart-ai"
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
   