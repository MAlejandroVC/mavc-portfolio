import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Welcome */}
      <div className="my-4 min-h-[600px] flex flex-col items-center justify-center gap-8 lg:flex-row-reverse">
        {/* Image Section */}
        <div className="relative flex-shrink-0 max-w-[500px] max-h-[500px] w-full h-auto">
          <div className="absolute inset-0 spray-background -z-10 rounded-full"></div>
          <Image
            src="/images/rubber-ducky.png"
            alt="Rubber Duck in a Laptop"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
        {/* Text Section */}
        <div className="lg:max-w-2xl flex flex-col justify-center text-center lg:text-left gap-4 mx-6 lg:mr-0">
          <h1 className="text-display">Welcome to my web portfolio.</h1>
          <p className="text-body-lg">
            My name is Alejandro Villalobos and I&#39;m a driven software developer with expertise in backend development, AI, and education.
            During my studies, I authored and presented a paper on anomaly detection using the YOLOv5 architecture.
            I’ve developed my skills by consistently exploring innovative technologies through professional roles and personal projects.
          </p>
        </div>
      </div>

      {/* My experience */}
      <div>

        hola


      </div>

      {/* 3 sections */}
      <div>

      </div>

    </div>
  );
}
