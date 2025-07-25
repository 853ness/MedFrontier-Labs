
// src/pages/Diagnostic/Tools.jsx
import React from "react";

export default function Tools() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111518] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full flex-grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-8">
            <div className="flex flex-wrap justify-between gap-3 p-6">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Diagnostic Tools
              </p>
            </div>
            <>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                Artificial intelligence is transforming medical imaging by enhancing diagnostic accuracy and efficiency across MRI, CT scans, X-rays, and ultrasounds. These AI-powered tools leverage deep learning algorithms like CNNs and transformers to automate tasks such as tumor detection, fracture identification, and disease classification. By integrating with clinical workflows, they help radiologists prioritize critical cases and reduce interpretation time. This page explores the leading AI solutions in each imaging modality, their underlying technologies, and their real-world impact on modern healthcare.
              </p>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                From FDA-cleared platforms to cutting-edge research, AI is reshaping diagnostics, making them faster, more precise, and increasingly accessible. Whether you’re a medical professional or a tech enthusiast, discover how these innovations are improving patient outcomes today.
              </p>
            </>

            {/* IBM */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2  flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">IBM Imaging AI Orchestrator </p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    IBM Imaging AI Orchestrator is a cloud‑based platform from IBM Watson Health that seamlessly integrates FDA‑cleared deep‑learning applications—such as convolutional neural networks for MRI reconstruction and U‑Net organ and lesion segmentation—directly into existing PACS workflows. The system ingests raw MRI DICOM or k‑space data, applying compressed‑sensing CNNs and super‑resolution networks to accelerate scan acquisition by up to 75% while maintaining high image fidelity. Encoder–decoder architectures then automatically detect, highlight, and quantify lesions, generating volumetric measurements and heatmaps that are overlaid on the original images. All AI outputs are unified via standardized APIs and presented in a HIPAA‑compliant on‑premises or secure cloud environment, so radiologists can review flagged regions and quantitative reports without leaving their workflow. Its modular design supports continuous integration of new machine‑learning models, enabling hospitals to adopt cutting‑edge AI tools as they emerge and ultimately reduce repeat scans, shorten exam times, and boost diagnostic confidence

                  </p>
                </div>
                <div
                  className="w-full bg- bg-no-repeat aspect-video bg-contain rounded-xl transfrom translate-y-20 transation flex-1"
                  style={{
                    backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXGRgYGBcYFRgXFxoYGhcXGBgaGBodHiogGB4lHRgXITEiJSorLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAEDAgj/xABOEAACAQIDAwgGBgcECQMFAAABAgMAEQQSIQUxQQYHEyIyUWFxcoGRobHBFCMzQrLRQ1Jic4KiwiSDk/AVJURUY6Oz4eI0ktIIFhdTZP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAAICAwEAAgMBAQAAAAAAAAABAhEDEjEhBEETUWEyIv/aAAwDAQACEQMRAD8AH4RspBp65NYlGIR+ybbiRrw1FIcT2ovsraChrZrEVjgn9HTnx+WWzEsVtOkA/vRS9yj6POMrOTbW5bx76Y9mYtpYkdSpBHjvGh3UD5VRPmVmy2tbS/ea2lw5V0ALl7z767Rlf1yPXQjHbXggNpZ4kb9Ut1v/AGjWhs/LrBrulzejG5+IArHWT4bKUV0eMGU4zsvrH5URw7IGuMSb6akpuvY7xVX/AP5Sw6dmGR/Uo+LV5TnlKHqYJW8Xkt7gpojjnfBSlEuZZB/vXvj/ACreb/8ApHsjqjsVzz4tuxh8MnmjOfxD4UIxfOltF/0qJ6EMY+IJro1ZlZ9FKW/3hT/Cn510ySb+lFvQH518sYnlhjn7WKm/hfJ+G1DZ9oyv25ZH9J2b4mjULPq3E7Vij+0xcCW/WKD4vQfFcvcDHe+PgPoqz/hJr5izV4MneffT1FZe+0OdjBqxyyPL6OHK+zO4qAOe6NexhHf0nVPhmqmooHfsIzeipb4CiWF5M46TsYPEm/dBJb25bVP4oJ3Q9pFjYnn0nP2eEiX0pGf4BaDYvnk2k3ZMEfoxXP8AMxoLh+bnar7sFIPSMafiYURj5pdpHtLBH6c6j8N6qkL0gYrnI2pJvxjjwRUX4Leg+K5RYuTt4rEN4GaS3svanOLmim/SY3CJ5Ozn2WFS4eaeAfa7TX+DDsfeWotIKZWLTsd5J9deC5q3I+bXZa9vGYl/RWNPxKalJyO2Im9MRJ6U1vwWp7oNSlya8mr0j2XsZOzs9W9OSR/jepUGLwMf2WzsMP7kN8RS2Q9SgMw76lQbLnfsQyv6MTt8BX0AOVJTsQRR+jEq1wxHLyQb5UTzaNfjRsPUpnDci9oydjA4g+cTL+ICimG5rdrP/shX0pIl/qvVhTc4Hfi09UoP4TUJ+XCt/tBbyWVvkaLYqQuQ8zO0z2vo6elMfkpqdFzLTD7XHYVPLM3xy1NblWp3CZvKFvmBU/k/tdp8QidDLY3+0CohtwPWvrSth4DYuaPCr9rtQHwjh/8AM1m0+bzZcEE0n0rEyOkbsoyqq5gpIv8AV7r2409wOig5sgbpDpkLWAB3G9rXpe5dTA4TEsGLXjck5cupB3C5osZRFN3NWt9pwdbLYSG/8DfnSjTrzPD/AFmhuBaOU3PkB86b4Sy+5TeE9fNqOAsNd2gpdxA6/qHxNMuJJ6HtK2o3cPeaXMR2z5CubJwePpztWZK3WXrE2K+xT2Gm+hjozHqmpM73312wJBzWF7D51pi89Ncr28Li5usGYsBEHLEvmY9o2BJsB3aC/rrryoRLKQHvrvz2t69KKbEhZcPCqsthGv3T3A99DuVRcIuZltc2spB3eZreT8OVL0+Y9oM0s7mzM7yNYAEsSWNgANT3VMwvJHHydjBYg+cTL+ICuGClK4tGUkMJbgg2IObgasldrzTIskcU8ytpmM2VLjQ8BxFrVd0SkKEPNrtRt+GyeLywr/XepKc2OL/ST4OP0sSCfYqmp+0sTPmsYEjsNfrixPnvqbsHk9jcWheNoEUHL12kJvlVtw4WYUbMdIGJzaKPtNp4ZfQjkk/KpMfIHZ6/abRkb93hwvvZjTFHzdYs9rFQr6MMjfE1Li5s3+/jpP4cOi/GlsPwWouSexk3yY2X+KJB/Kt6lRbL2OnZwUjn9vES/AaU0LzaYVftMdOf7xE+ArsnILZC9ud39LFX9wtS2/oxZTEbOTsbMww8XUv72Ndhywij7EODi9GOJfjXXlJyY2dGY/o0SMLtm6zvcWXLcm9tc27uqFFsPCrh2OdOm1yjo7btwzFgoB33I40WBJbnHfhOgHcgX+la8S840jbmJ9FJz8TXNsIoZcgW1tRZRx7g7X3eFS5ZlIcKEAJG5CLZe0Ba+Xdu1o8AF4nldNJ92ZvKLLv8yL1H/wBKzndh5v4si/M0wzbVUlyWW7oE+6NN+7ILcO7z1qFjeUkWZszsTkCGwBAUbtxAI1G/jQAMWfFsCVg0G8mbQedlqVg9mY+Zsqrh1J167tu9ornDymw6LlALA3GthcixtbpLaXB3cRW8Jy4igYFAL2FiTGdG3HRTvoAmY/kzjoomkfE4UBRcqgLN6gTS7L011H0hmZtQsccdyO8aG40PsNH8dziGVWilBMbZ1bTQ5AWYArGASMvA1C2VtTD4hl6GEyMqsq2VrhUCXF2cBVHSgb/vVSf8EyF9EBW5xkrDMqdUyKMxtpmEYAO/Qn7pqJLhECoxaVukJC5pXsSDZtc2lid5AFGMLtONiVhwjO6qXcIkYy5XdDfOe9DxNeIttySMFwmFaUiJZnssSgKVVyLlBqAynQnfprQmJpglcBhQWWSAsy3vkyuL3G5ixDeqpMezEyuVw63UIQMouxYC+UZTexNzqKI4bbk80kiwLGEi1dnlMbEbmCqL3sQwG69q3JtubNoermUalr5XZQCeuetY8LjWiwaIsGAlUIRBnzDVejZcnW4kAX07id9EZMDOX6sGVM6i4DAFLHM9ma99d1+AqBtPD4xIMJipnXLiSB0S9IGUGJpF+/Ymy66cak7Y5My4eDCSmVZJJ+q0VrWZoHkAUltdVA176dhR0fZcpkfOAqDN0dmRSTcZc4LaC1776O7BxDXVZzh82a4KdFYC3FVW+/xtSZitkyxGEFru7MhUiOzN0TtoLXFmC7zxonyc2a+DmwzYqa7SZkKBVYF9CMoCi+gO860m7ElQ/YW+W4bQyNu6NQTY6gtr8qVucPEKcFiO1myEXLqwtusLKPjR/DRIVBYJqz6ln9WijQb6V+cJQMFiMpBBUdm9tWGnW1pIopG9P/MnHfaW4G0Mh13b0HzpAYVY3MVFfHyGwa0Db/F46cuEsvHHqRELgb+G7caWZ+23q+FM20ltEosBruG7caWZ+23+eArnycHjPFZWqysjQrHF7NV+LD+KuUWzCADnYjvvxosFvXs4bqkj1jh508cnVHROKssTm821G8Qw8ilpEvlOhLL6+I+FF+U8S5FIjK2J4Cx086qbZmJeJ1kQ2ZTcHyqz5tqfSsIsgcEhgGTLYq1j/n11anapmU8ertcPnLDH+1L+9/qqfgncgBCxIOihbjf33t6rUOwh/tK/vP6qKbDchi3V3MTdmU9+9QfhXSc53XEygnOSBcXA6Mb9Bpvt5UxJymlgBSIuilDNYSgaBbm54t1dw8BSvitqrJ+iXNcdc2LaEHflB9/GuOO2s65c0cZzoCLvM5yNfQ3k3admlV9DavCwsPi8bNJGgdvrQWjLy6ZRmuX06vZ037xQaXaOJYLYXLCwBY6m1zrcXGh9VKjcppzfSPXTsE6b7ak6V2weLxs32MWcAZbphkKgWtlvkIGmlqbir8BN16FmkxNzdjZWCk5msT0mUgHMLaEHjXRopToSVswzFnPZs27M1tWA99DcVDtSJOkeORUX7yxREKO85FOUeOlCv9P4q328g8jb4Uaj2HGDZiNhVkacDEuyhYrKy5DHq50JHWub34VG2ajKsgYy2tIAAkou1xkI6JDmFu+w6240oybbxJ34ib/Ef86lbXlniCKcSzkjMSkzMOsqMATfUi9GobDHiYMU4NkxHSXmBOWbKE6MLFZcoS+YMbgkm+tdl2AzSZisnRKyMEcTHN1bMOuQ1ri+th1vCq/mxTne7nzZj8694TCvK6oimR2ICqBck+FOgssebZd8rCNYyxjJTPEFQZh95pLnIBwBqSIMKkmFIjhjjw0YD5p8OGmdZIXUm0ml+jY3Y361BsDzdoo/tM9m4pAgkK+DSHqg+AB86Y15vNnrHmcYrdfMHQkcD1Qup8ADUuhnDHbSwsmIlxBfCozt1VXFLovRxKS2X7xaPhuFB3lwggMfT4QO6p0kgklaxU3sqCM6AbjcUM5a8ipMCRIhM2GcApMBpc/de3Zb3HhxAUnGlVQrLBn2hs0kL06dGryGwTFMSHRlNuoFW+bU6/OuWC2jh8OqOuMBv0iqfos2i3jJVQsqm1wNWve/hSBHU/FfYwf3p/nA+VKgsZW2pggXInnvIjRtlwyDRndzkzSdXtkeqpLcp8F0fRquKUGNYmKLh0ZlChTd9WuQKRDXqOkFjzi+WGEb9DicuZWyh4EHVNxcrHmOu+5N694nl1CxVmwsjZWDqGxVlDAgjRUAIuBpu0oVyd5MLLGMRiWZIM2VQgvJM17ZU7gDoWt39xIZ48MyH+ywx4dQLXyh5jbi0hu1z3XIFqBnFtuyytFJFszETFOuC8uJKrIQQcg7JFuOnkKH4zldNDIpl2eqSLcoZmxLMLixK537u6maSOVTmZmY+bHh515baLrGY8YomwsmjqQQY91mFrHQi+YdbTjRYCXPy1lzKyYfCoy3ynoSzC++xdja47qiRcr8Spui4dCNxTDQgj15aJc4fJZcHIskAvhZvszmLZWsC0ZY79OsCd6mk8UxDXBzgbQUBVmCgbssar8BYV2k23PiMFijNJnt0VtFG9zfcNdwpRWjmFNsBifF4R76ljFt99WZzCx3xeINr2hHG2+QflVZPvq1eYFPr8WbE2jjGhtvdvHwqpcJZcO1BZFFranT1Usy9pvOmTap6q7xv8e6ltz1m8zXPkHjPNqy1bFZeszUQrd1SIXtUZCN9eWktUROx8PMEQLN1tQTRvY2KMbZSdGsDpfXgaC8ndmYjGySLhstx1iWYAAE6W4n1U+bH5ASQxtNiZVMiDMgU9UMNxYnT1VaxyuzOeWGtFFYSL+0rY/pPman7MWXUJcNZrdZlPqOYCocKZcStx9/5miOHwEpg6QIbdbr5mFgD1rm9q67OBWQJYWR8rdoHXUHx3ij+fJh0ZVUnIoIzBL3UC5Y6C3voJa2pCtf9u5Hjoa8Pi2MQUMBdD+mXQDQgpl0J4C9Z5YuVAuk7kVsJcTK5l+xgQySgHVtcqRg97tYX7r1Y8eEaVVD2yr2UQZY0HAKBwHt0pS5ATomFlVjk6WePO2UsxhiXPZQBvzkHeONMDbahZxCsgzgAqCMp135bizEAeq1OTZpFBCQSYc54ri1iQWOV+BVl3G403carnl7siLDzq2HFsPPGssYuTlvo6a66MN3DMBwqzjfRg5IGVSD3Hcb9+tKHOqoWDBoSM6nEZhxUM6OFPiA66UQY5qvCuK7P2E83/prjXWbsJ5t8RWqMn9Ed99WrzY7GCYU4r9JPI0KNxSJFvIV8Way37hVUk1dnJVsuFwLAuRFBIrxCO4JlbOr3vYGwB79SNKUn4VEb4cLGoW+inRVAPC17AX9p76kyrGCGzrqSPAHfYilHEcq4zio8KVmXpQAtowwLM1usM27xF7DfTpL0DiMMq2IaxIUAAAG9vO3trKigLi9mtMs2DkAMOJjYp/w5VNwV9qN/Ae+vnWS9iCLHj4HiK+nsPp0cgDPlLAHQ2QmzSOb2ACKR4k18zY2RWZmW9mu3Wte5JJ3edaRJkRY6n4v7HD+jIf+a4+VQEFEcYy9DhxY5grm9xbKZpbC1r3uDreqEQanbEwJnnihH6SRE8gzAE+oXNQaZubiVE2jA0nZBc3O5T0UlmPgDakBamMwKfSDEq2jgUQxIBoLKMx8yTv7gKnLhFQAlb5gW7gAN5djuOu7WhGztoLEsjys0skkzyAqpYBGOiljqxGg4AAUH2hy6w6TMkqSpGUHZyk3P663Ftb7id1QUNomjeORlVyFUkEr1W8L2qGkaTCzoVIGqMLX4buNH8NiEENuCrrcW+7m3WHAg+VDNoYtH6HKVMxKkBdbXHW07iNNaAF/E7JDbOx2GYEiEsYyd90i6eLXwAlTyYDhVNCry5YSth8FNKCFiKyJfXNNiZU6LqDhHGhfXj5WqjBVLgjoDRqI/wCrp/GaMe69AwaO5P8AVjt34lV/5d6AFtqtr/6f16+NOvZgGni0v5VUhq4uYBerjDr2oBp/eH50T4ItLap7Op47/VS0d58z8aYtqNqvz86XRx8z8awn9FYzBW61Wi1QXYh2sKE7UxuUeJ0FTJZqHbI2YcbOVDBbAm54KDbQcf8AvSxRs6M06Gbmi2ssWOs9gHRludALDNe/qNW7tjbeHMLr0inMjZRmADHdYG/fSxzf8hYsO5mk+te1lutlW+jacSfGnDbuHVcPIVRbqjZbiwGnC2o9VdNUcjd8PlnPedfT/OuuGdRCrFEYjQgkZjck3sUOgFhv4VCgkvOo/bPzqbg8SFjUed7Sup48BpVszRpp0bQRhTffcfJdaFfRJP1G4fdPHdU1nINwdBra99O69df/ALhe4uDvU9s70vl4cL048G7saeRmPjjwbpJKEJY9XUuRvsBute2t69bPxojxcc14nRleMqypnTMpFyxvZbcQdLnvpUTb1iD0YuCzXDG923613wPKZo+quZVIdDreyvbNYeqlov2Gz/Ra3I+fDSu0kuJRMmXLGzgKWAAz3JAOvCx3XquecvbC4rGN0K2hiBjjsO31iXk8SzEm/GwoY3KEdcZDZwqkXsLKQRx8BWl23GFZVRlDgAgajQ3B1enGCX2Jyb+gKYz3H2V1nFkjv+38RRxuUikOCps6op6iDSOxXQHvF/Hjeom3sUk2SUsVzZ9BGvAgbgwA9VVSSEm20BHFXrsnFxfQ4FWXNeNMscYOZrLlJIJAAuDqTaqQCx//ALD/AIf/AJUcwG21jRUEl8mYK2Rho29SNbi+tZtWaIfcfPNDLDio5mCxOM+HNgCGIUsrKSCbEXFhoNKasK64jFrDMLgNnsu7NIiNlJ3WzFyRxy1USbeidOilmYL+skbFr5gdxA+NT4eVccBaTDYlxIxGhiZF0DLra5OjE+dKhljc8PKcYTCrhYDZ8SpuwO6EWBse9t3leqDfdTDys20uNkjkMqjJEkViJNMl93U43vUjkrtrC4VXWfC4TFlmBDSlwUAFsovEdONUhCoBUrG9mD918Z5z86sBOV+zbjNsnZ9ri5Eh0HHQwi9AOXAgmnSTDdBDCYkyxh8oFme9hbibmgKFWnnm1jiHSO6ktmVOzmslrn2m1/IUnjBX/SQ/4qj50S2LNLh5FZJUC5rlROgU6W1Gax0NDQi28c7WLEFEuVWwCA24AbyfVShtnB41LYiAK0cZzWBjeVeJI0zKLX3GueB20FzZ5I2O9W6eM3uSSLZtLUewm0YniJ+kQRvY6NKP6b1NDCKcomkSOZkJRlMZcknNaMyC5JNzqfbTJyT2XF0Cst87lULFhYvvbKN9lXcDpcXtxqvooehw8MTYiEtEQTHnsNARaxUG5B3m2lM2yuVCMYBaOLozM7BWUKWPY46kjT10DEnl3t1tp46PBRWSGOXoYwToTmyNI3v/AMmq6xCZXZQbgMwv32JF6Kz4DEli4jfMWLXG8G97gjdrTjsDC7IEEYxmAxz4i31joJMpa51FnHhwqkIra1H5NNkr44w+6C1PZwfJ4/7DtEfwTf8AzoTzkYXCRYLDrgkkSJpmcrKTnzGPW9ySNCNPOmBW4q6OYQWgxR11ljHsQn51S9XVzF/+lnOv2490a/nUz4IsTaTajy40vpuo1tA6+r18aBodBWEyoHuhOO2iEcqeFveAaK1V/LDaZXGSqOBUfyLRFWURcbiMotfUm351GOIymoGJmzPfu3Uw8iRG2KjEtjvtx61jY2pqNFuZenIBrYWJWDZ8l2uCOOg142tR/aUeaKRSL3RtO/Q0sbBcB1sWv5W+dMW0ZPqZN/Ybdv7Jrajn2R8kRLbEqP2vzojshiFJ3jKbgkKLaXuTQrBtfEr6R+dE8DhAyXObUa242106u/10MEDm3GoNFHgGuth379KFtQhmE057N5MxRKpxCGWVrExByiRKdfrCOsXtwGg3GlbZKgzwhuyZYw191s63v6qsoaljxZmN95JLE+upk6KSAuO5KQzKfo6mCX7kbOXSQcFudY39ZHDxpFYEEgixBsQd4I3g1ak4+rJ4gE33W9lV/wAsUtjZ7feYOfN0V297GnFg0Cs1SMX9nD5SfjNQqm4wWig9Fz7ZDaqJIdbrVG+RWAWfH4aJxdWkUsO9V67D1hSKYB7YnIG8YmxrPGGtkhjUGZr9nMT1Y7+IPjajWK5uMJJ1cPNNE9t8oDxZuKkhVZe7MLinLAtmGdtXYZiTuJJvcdwu3vr2uoYEADvBvrx8raC9Z7MqihttbImwkzQTpkdfWCDuZT95TwNQatDnRgD4VH3tBKqA8ejmRzl8QGiv/Eaq6rTsk3U7ao+w/cR+8sfnUCp21t8X7mL8N/nTAhqa9g1yr2hoESMLhnlkWONC7sbKqi7E9wFOeH5uZAF+k4iOFm1yKpla37RBCL3bzTXzc7LXD4aNgo6bEIZXa12EZYrEgPAEIWI43HCm2PBADhmPvPzNQ5FJFX4vm0kkJ6HFxyyHXLKCjHxzZmHttSZtXYs2FkMWIiMbdxGhHep3MPEVf8mywwXgVIKniDbeK5bcwC4yP6LiFuHNklt1o5TojA+LWB7wdaFIKPnd1HcPZXjKO4V3xEZViraMpKnwINj7xXI1QjQFMO0zbZeEHfPiD7Mopeo/tk22dgB3tiW/nUU2AvVdvMiLYKQ987e5EFUjV48zemz/ADmk/pFTLgMdNoHX1evdQZNwoptFu15b/VQsVhPpUOHqqU5WSZsZOf2yPZp8quq9UVtGXNLI3e7n2sa0wopHhTRLY0UpkvCCXUXW1gQeGpIFGdlc32Kf7UdEO6xZvdTzg9gDDIFjgkPeQhZj5nhUuX6KhBPrpCZHiNtrqJWX+8g/Ot/TtusOtintxBmh3cd1OwwErbsPKPNB+dDsdAYiVcZGy3s2htrr7qpSZssOJ8ZUGy/t09I/A0b2a1owcpPiF+eX50D2Sfrk8z8DRfZagxg5CfEX+Tg+6rZxnjFNcMQLDXwA7vKghHl7RTBjcQYiMqMFP6ysNeNidRpbcaGYmdHbqoBp/N8KFwDhhMK8kixqOsxsL6Dde5vwsL1YmwMNiUaTEGVERASiSC4cFMzFW0yEnd57uFIGJVGN8+TuGUmw8x+VMUO1Vma3TKhIyhSsjAg3AG4ZeHnSkikGttw4oGGWIBo5gDIirdkzFdDc2v1hqD51Xm1GkMrmXNnJuc2+x1XidLEW13Wp6wvKboWVOlWSNVC2LKtiW6+jkEWsLUn7W6bEStKYxrYARhcoVVCKAEJAsAKIiYLqXi2Jjhub9RreXSPXJsJIN8bj+BvyqTtbDtGIUkUqwjJIPjLIR7rVYiBRvk7tJIMTFKiurK2/pFI1BBuDEdLE+V6CXpn5usYkeNQPHn6VWhU3HUaQgZ9Qb2FxbxpMEWhyR2wMTimwqwShYQSzniimw0Kgi9rD10Q5QbTgw0f0i7HDllTMq5xmPjfW1vlvqdieV0ayN0SgZUIBJCKWiZg1mAN7E2y8TaomA27FiVjgxUaOBYSAgGIOHJVgoJsWPfuuKzKErl/ioXwSkSMBPOkikxNqiRuq+9idO8X31V8yAGytmHeAR7jrVi87XJ/DYYJJC4BeQhIA9wsZUszqn3QXAF+NVtetI8EzKJbaKfU5Q2YQRZrkEXyC2UWuNN970NqZtUdZP3UHvhQ0xEOtitVu9AF/8jWZ8NhCdB9EhAtvOV5EPqsq+00wpBmADLnOp0F7WO/wte16BYbZuKOz8EuCyCWPDxAuxGVs4zlVBG8b73opyNnxAwzyTKWnDOrR3CsFQkHL1QM1wdLm9hWbGdcFhlTVrGUizNxNvgK8Yg2lgBJN5Y9w0FiXv5dWofKzGTR4V8Wq9E+hVHK3Yd5W/Wtvy3BPuILktynbEhxjckLxwyMtw6NIejYZlv1dAb2BvrQkBUG3MQsmIndOy8srL6LOxHuNQa8rurBWgjZpg5Q6YHZw/YnPtlH5UANMHKjTC7OH/Ac+2Q0gFur05ohbZ8fjJId37VvlVF1evNWbbPhF97SH/mNSkDGfaX3vL5UNqZtJu1UG9YT6VDhrFSZUZu5WPsBNUQNdaunlFNlws7d0b/hIqlga2w8ZaPpXaEkimLoQhBPXzh+zp2LDU2voa7bQeYSxCLJ0ZP1mZZCxGh6ltL2vvrltWFmeG0jR2N8quoD7tGuCSNLad9Scdg5XmicFwqalVkUI3pgi5A8KDnN4gzfSIwmUQ264Mblyf2GBsBu3g0l85m0UixGUhswjBBCkgDrXp4mwDtiUmBcBRbKJbRnfqyW1OvuFKvLtR9Ic5QxEYB8rf96TpmkG0/CgdlfbJw1P4TRPBSgRD6yx7jY+4rb30K2SfrU9f4TXqI6CqAIYzEErfTTuVRv33sPChkrDMCBYEbr13NR8QlgD76BG8RwNWRsjkGkUBmndOkiVZWjC5mJdVMQVgwylGPWFJ/JnGBJVBAObTd7LVYWIjBTwI3VyZvk6SUaOnFg3htYA5T8iXeP6XAqsswMqKmfpCFDNNnU6BRlNiD3VXNqtvZO0zh5oLOzJEY0KsSRkKiN9D4M1VZtCDo5ZE/Vd19jECuqDswZyjkZeySPIkfCp+Jx0oWK0j/Z37R4ySUNqZjj1Yf3Q/wCpJViMO0ZTvYHzRG+K1MgxrKQwSMMNQRGqkHwK2tQii2zcG00scKdqR1QebMBf1XvQxBbAbUnCOy4ZJYwevmjkkQFzfUsxCknyvRLaG3GwryRxxLFfUvEwBIN7XuhFxrVr7Ew0GCw2NwqKHSMnUg3c5BnuBe9iD52qLhcRB/o3Es8Ssz5hqouwAAVtdwFx8ai0MpXbWPXFOJJWlzBVQWCMAq38u8nzNGuS/LM4CHoU6CSMuXPT4Uu12AuLrJu0HChPKjZDYPEvA4FxZgRqCrC4IPEflQTE7qomyyo+X+DkYDEbP2cy8WEMit6gYyPfSfyxgWXFyPB0KxN0ZRBKihV6NAoAYiwtS2anbZH1v8EP/RjooqzP9FTcIy3olX/CTXN8BMvaikHnGw+VRbV1hmZeyzL5MR8KYi/Oanb7zbN6KYZThnWNHsRdAAw/iUXXytUjA4t1jn6J1LytIQ5LBgS1urpbj38arbkDsLaONu8eKmhgU2LdI5LEWJEaZusRpc7hTPNtCHCzSQPtDFs8fWfPkUGxVmA+qObNfg1950qK9GGdrbVaRcKDbOksSM5ykm2Yk2tYMACb0b5y8ds+PDqcZmsxyoIx9axtcgHSwtvNxv8AGlXlLsnHqgkhmWdQQ6RzIAWt1gFZGCuQPunU1W22+V8mMCjFQxvkLlSpkjIz2zfeI4DhpahIABjHQyOUXKhZiqneqkkqD5CwolJyVxygE4PEgHW/QSEW9QqKZMOd8Uq+jMp+Mfzp0wnOljEAAxeIsNLPDh5Bb+U1YhIm2fMnbikX0o3X4iiHKX7PBjuw495NPuG538ULZ8REw0uHwZBI46pIbH1Up85m0fpGKSbTrxK+gIHWJOgOooGKQq1OSONZMFEB3N+I1VYqyeTqn6JFZGPV4DxNZZnUSoK2MOC2uz9U7ju9VGElBpV2WputxbzoxHJasHKy9V9HHlpLbBTeIC+1gKqYLVicu8T/AGQjvdR7Df5VXd66sP8AkFR9FbRkwkkkcsk2GzR6ozlCVPEqS2h0oiOVOCH+1wf4qfnVAY3UZd+tRdkqucsRe17DxG6ijnPoteV+B/3uH1OD8KSOVuPSbESNE4ZCosw3aLrfv40lbOwa3zPvNzawsTqfjXLlDiyoyK4+sGUgDu0tfhvo1GmI+zpAsiMxsBv48CPnRGLCxmwTERH0i0f4lt76yXk7Ou5VbyYfO1Ro9jzM6p0bAsbXtoPEndalsv2Wkwvs7YLytYlcg7Tq6uLdwyk60J2phDE7prZWNvEbx7qsXAYJYI1jjGg3nvPEnzNBNubEkmkLrlsQL3JBuBbu1Fca+Vc/fEdb+N/xa6KOzGPSxW35x8atOZyFFJGA5KzrIj3SykHe17eynGaMOQl9eJ7gN/5Vj8mUZyTT4b/Hi4waZGjw4ILMesbZerfUuuhPBbXYn9mq22hMHlkdRZWdiABbQk204VZm1ELKY0OXMrLfiFIsbeYNvXVeS4KEEr0+VgSCHiYWI8VvXX8Wdx96ceeFO0D6nbSy5YMoYHohmuQR2m3aacfdXpNks2iSQue4SgH+e1TdpbCxNo7QOwEaglBnAIZjvW/eK6jABimTkjOY8XFKFDGMlwCwHZU6692/1UuyxMhs6lT3MCvxovsLEKk8Ze2Qkq3EBWBUn1Xv6qGIuLkxjvp0DokUpUqweQpZCzasSRvNydBurps3BphMOMKJL2ZgxIsHDHsg7r2vpUzZzZooIkABiCq8YawVgRnVj3XuQfGu20oU+vDoEjADZAxIDoLq9zusdb1kUVTzjMWlgY6lYuhJ7zDI6jz6pU343pMxA0pg5VYgO8ZIsxTOw4gucwDeNtbcAwFL2I3VoiCOanbbH1xH7Mf/AEkqDpx3ce+1FeUxT6Q3RhgMqXzEHrZBusN1re+mMFV6WvNSYsFIy5ljdhrqqMR7QKAPonm92IkGFwsMoF5MOzygm1hK/SDW+hG7T5V15V4XDrORGkV3hjViAufKG0AbeNAB5VDMbsMOJA2aPDQI+h7WTM3y9lbi2WkqBpI3JiByAWD9Yk8dCV1sPHyrMoadsiAREx9HcskjqGFyFIOgv/kXr5950OTf0LGtk1gnvNCR+qxuy+on2EVaAjDu0jAgvcEbgOGW3DQeNLfOblfZsYb7TDYgIh/4UqMQCfNf5aaYmVIa1WE1qrEbO6jfK/SSEd2HhHuNA23GjnLT/wBQo7oYh/LSABirc5MRM2DhAsLxqL33ad3Gqip32VinjjjKMQQo8Ru7qzy1SsuCb4N8cVmve+proWoHhNt3P1gse8bvWKLJiAwuCCKwdX4XTS9F7l5L9XGve5PsU/nSkqaUwcuZetEPBj8BS4HrrxeRGqDM8l1tEQ5N9x3ePwrnhoY42QsTwLAMD3XBGnfRDB8lMUgJyEC2tiAd9iO8a2rzh+RczHeqgWJJcX1JFUkcl3wnTzSKGYhEiBIVjqdLC3rPwoEEEkmYGwvoT97rEkgDQA2plxGyXl6LDExCO4ZzmN2IJJAAvp5misvJ8rGTniXUbmse8AaairaJQHvUvCyADxqA7W03m9rDia9BWViptfwOnlXk5nSPT+Ok5E+TE1vp1tUGaFraEfGgW0emXsufVXOsW/Wdm2v0Mr4/ICSR+fcAK8YWUqhY9pjc+s6ChmwmXo8z9aW536nfpYeVGMNCB13OvAd35mlNKPhV7KzcylULN2jw7u4VXO38MyzvoTfrXt376f58Rpnbsi9vE0rzz5mLd5rq+M2m2cXyKqhVrpFMyG6MVPepI+FMeRW7Sg+YBry2zYj923kSK7PyI5NQfByjxaaDESEdzNnHsa4rqOUTn7SDDS+LQKpPrTKa6PsRDuZh52NR5NhP91lPncfnT3iGrD6cu1JUy4VSVAW6yEEgbr5gc3rNGX5wYJjaZsSFIAK9VkNv1rEMwqv5NlSj7l/Ig1FkgZe0rDzBFPxk+jPjIYsRI8i42As7FiJFlh3m9tVItw31wl5NTuB0XRS/u54291wfdS5etWqhUE8XsLFR3z4eVfExtb2gWrW3tMRIPEfhFcMPtOePSOaRB3LIwHsBqYvKXE7mcSDukRH+IvQMGV1glyMHABKkNYi4NjexHEaVPG2UP2mEgb0VaM/ymtrisG3aglT0JQ3uYUWIt/EbWy4khnLNIkbjTKT9WuZrDSxObd+oaPLtiRI7KL2udO0SfEmqrwnKbBmLDK7SCTDZljkZLExG5COEuGykmx7tPGmmLlPg3tkxK+i1lN+4XPvqGMYJcTJlzAtfiMx/zeg+0tpJImJSSaQBVUtb7hEkYRrndcykW7hXRNpA9mz23EMCN2+w1oBy7wvQ4E2IabFTK0gGVmWGNSYx1bhQX11PcKaBlcYvHyOCrvmF+5eHG4F6iVtjwrVUIxtxo3y0P9rbwWMfyCgoF9KLcsD/AGyXwyj+RaAA9WJsmAZEuD2V+FV3ThsiWfKMuWwAtmvrp3ipkik6JmIS26ucUpU3BIrhPjiNJEK+I1X217Rwdxv5VhJUzeLtAvlFii8i34L8zQ4CpO1n+tPgBXESCuqH+UZ+Wa6bEH9JL/73/OvBjmO9nPmx/OsrKi2ZHTD7Lmc2F/MnSjeF5PRxqXlPSEcPu3+dbrK5suWS8TOjHjTVskbPltItgANbC1hu4VOmls9zxrKyuSTuR04fIE0Ncb6GYqO5rKyml4aJ26JmDVY2GYcCPbUfF7dgDEO9rcAp9g0rKynhgpv0fyJuHBf2htvpWCICEG6+8/lXANWVldrgo+I85zcnbOyGu6msrKhjR6L2BPdrQ3D7XzuosRfSwsfIk1lZVRSaZLfoXVq7K1ZWVkzRHOTCxt2kU+oVHk2JA33SPImsrKNmuBSI0nJpfuyMPMA/C1RZeTUo7LI3tBrKyn+WSQtERJdizr+jJ8iD8KhywsvaVl8wR8aysrbHkcukSjR4rdZWVsZm0Yg3Gh7wbGp+H23iU7M8g/jJHsNZWUgJQ5TznSQRS/vIkb4AVsbYgb7TBRHxjZ4vhetVlMZ7WfAMQcmIjN76Msg99jUPb2LWbESSJfKxuLixtYDd6qysooRANO8UDpqmotqp8qysqJlxZxknB0OngajNgxvUlD4bqysrK2a6qgPi79I1zc331gWtVldUeGdH/9k=")',
                  }}
                />
              </div>
            </div>

            {/* Button under IBM */}
            <div className="px-4 py-4 justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://newsroom.ibm.com/2021-11-30-IBM-Watson-Health-Introduces-New-Opportunities-for-Imaging-AI-Adoption?utm_source=chatgpt.com",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>



            {/* AIDOC */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-6 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">AIDOC</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    When a CT scan is taken, AI platforms like Aidoc immediately analyze the images and flag urgent findings such as blood clots in the
                    lungs or bleeding in the brain for the radiologist’s attention. These systems were trained on millions of labeled CT slices,
                    so they know how to spot even subtle signs of disease.
                    The flagged images and alerts show up directly in the radiologist’s usual review software, so they don’t have to switch tools. This setup helps hospitals prioritize the sickest patients first and speeds up critical diagnoses.
                    Studies report these AI models catch over 90% of serious cases and cut reading times by up to half.
                  </p>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl overflow-hidden flex-1"
                  style={{
                    backgroundImage: 'url("https://mma.prnewswire.com/media/2163484/Full_brain_comparison.jpg?w=350")',
                  }}
                />
              </div>
            </div>

            {/* Button under aidoc */}
            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://www.prnewswire.com/il/news-releases/aidoc-introduces-the-first-and-only-ai-powered-solution-to-identify-suspected-posterior-and-anterior-large-and-medium-vessel-occlusions-301888562.html",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

            {/* chenxnet */}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">CheXNet</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    CheXNet is a 121‑layer convolutional neural network developed by Stanford’s Machine Learning Group to detect pneumonia
                    and 13 other thoracic diseases from frontal chest X‑rays with radiologist‑level accuracy. Trained on the NIH ChestX‑ray14 dataset of 112,
                    120 images labeled for 14 conditions, it leverages DenseNet connections and batch normalization to make training such a deep model tractable.
                    The network outputs probability scores for each pathology and uses Grad‑CAM heatmaps to highlight regions most indicative of disease, helping clinicians quickly localize abnormalities.
                    In head‑to‑head comparisons on a radiologist‑annotated test set, CheXNet exceeded average radiologist performance for pneumonia detection on the F1 metric.
                    Extended to all 14 pathologies, it achieved state‑of‑the‑art results in multi‑label classification on the same dataset.
                    Inference runs in under a second per image on modern GPUs, making it feasible for high‑volume screening workflows. By combining deep CNN architectures with interpretable heatmaps, CheXNet demonstrates how AI can augment radiology by automating initial reads, reducing oversight, and prioritizing urgent cases.

                  </p>
                </div>
                <div
                  className="w-48 h-48 rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover transfrom translate-y-10 transation"
                  style={{
                    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGgHop1gnGUJ3xffgokXNEYSvY1pd4J3mfeKkAzmpZh8X46X-XZqdlgeNdT5jG8OhakA&usqp=CAU")',
                  }}
                />
              </div>
            </div>

            {/* Button under chexnet */}
            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://stanfordmlgroup.github.io/projects/chexnet/",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

            {/* Butterfly iQ+*/}
            <div className="p-6">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-2 flex-[2_2_0px]">
                  <p className="text-white text-base font-bold leading-tight">Butterfly iQ+</p>
                  <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                    Butterfly iQ+ is a handheld ultrasound device that connects to a smartphone or tablet, enabling clinicians to perform point‑of‑care imaging without bulky carts.
                    Its on‑device AI includes the Auto B‑line Counter a deep CNN trained on millions of lung ultrasound cine loops to quantify B‑lines indicative of pulmonary edema in real time,
                    and NeedleViz, a computer‑vision algorithm that overlays needle guidance during procedures.
                    All AI processing runs locally on the device, providing immediate feedback and eliminating the need for offsite analysis.
                    With one lightweight probe and a mobile interface, Butterfly iQ+ streamlines ultrasound workflows by reducing reliance on manual measurements and enhancing diagnostic consistency.
                    It is FDA 510(k)‑cleared, making it suitable for both emergency and routine clinical environments.
                  </p>
                </div>
                <div
                  className="w-48 h-48 rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: 'url("https://www.ultrasoundportables.com/images/models/Butterfly/Butterfly_iQ/butterfly_iQ_ultrasound_probe_for_iphone_android_mobile_cell_phone_devices_tablet_450.jpg")'
                  }}
                />
              </div>
            </div>
            {/* Button under butterfly */}
            <div className="px-4 py-4 flex justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://www.ultrasoundportables.com/by-manufacturer/butterfly/butterfly-iq-ultrasound-scanner-for-iphone-and-android",
                    "_blank"
                  )
                }
                className="bg-[#293238] hover:bg-blue-700 text-white text-l font-medium py-2 px-6 rounded-full"
              >
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
