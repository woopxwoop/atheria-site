import Image from "next/image";
import AtheriaLogo from "@/app/lib/ui/AtheriaLogo";

export default function Home() {
  return (
    <div>
      <main className="m-0 p-4 -translate-y-28 text-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-[80%]">
            <div className="transition mb-4">
              <AtheriaLogo />
            </div>
            <h1 className="animate-typing overflow-hidden whitespace-nowrap mt-4 italic pb-4">
              Empowering people through innovation
            </h1>
            <h2 className="w-[75%] mt-2 tertiary-color">
              At Atheria, we strive to empower people through innovation and
              that is the foundation of our culture. With every discovery and
              invention, we open new paths and new technologies that give
              individuals greater agency over their own lives.
            </h2>
          </div>
          <div className="mt-20 flex flex-col items-center w-[90%] gap-y-10">
            {/*}
            <h2 className="w-[70%] ">
              Empowering people to overcome cardiovascular disease by realizing
              the potential of stem cell technologies for cardiovascular
              medicine.
            </h2>*/}
            <div className="w-full flex flex-row justify-between gap-10">
              <div className="mt-4 text-left">
                <h1> Atheria Institute for Cardiovascular Medicine </h1>
                <p className="secondary-color">
                  At the Atheria Institute for Cardiovascular Medicine, we work
                  at the intersection of design, engineering, and science to
                  confront the fundamental bottlenecks preventing stem
                  cell–derived cardiomyocytes (hPSC-CMs) from reaching their
                  clinical potential. These cells hold extraordinary promise—not
                  only for precise human disease modeling and next-generation
                  drug discovery, but also for regenerating the human heart
                  through cell replacement therapy. At Atheria, we exist to
                  transform this promise into reality by lowering the barriers
                  between discovery and clinical translation.
                </p>
              </div>

              <div className="min-w-[30vw]">
                <Image
                  src={"/cardio-logo.png"}
                  alt="Cardiovascular Logo"
                  width={1024}
                  height={1024}
                  className="border-(--tertiary-color) border-5 rounded-4xl"
                />
                <p className="tertiary-color italic">
                  We want to see our cells fixing the hearts of people.
                </p>
              </div>
            </div>
            {/*
            <h2 className="w-[70%] ">
              Empowering people to transcend the limitations of their conditions
              through assistive technologies and human-ai collaboration.
            </h2>
            */}
            <div className="w-full flex flex-row justify-between gap-10">
              <div className="mt-4 text-left">
                <h1> Atheria Center for Human-Centered AI</h1>
                <p className="secondary-color">
                  At the Atheria Center for Human-Centered AI, we emphasize
                  rigorous, purpose-driven design as the foundation for
                  developing human–AI collaborative and assistive technologies
                  that empower individuals to transcend the limitations of their
                  conditions. Our work spans multiple domains: we develop
                  embodied agents that augment human capacity for scientific
                  discovery in stem cell research; health information robots
                  that empower individuals across the full continuum of care;
                  and social agents that support people with hearing loss and
                  communication barriers. In parallel, we explore technologies
                  that encapsulate lived experience by situating human
                  physicality within digital space—making meaningful experiences
                  accessible to anyone, anywhere, regardless of circumstance.
                </p>
              </div>

              <div className="min-w-[30vw]">
                <Image
                  src={"/hcai.jpg"}
                  alt="AI Logo"
                  width={466}
                  height={266}
                  className="border-(--tertiary-color) border-5 rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
