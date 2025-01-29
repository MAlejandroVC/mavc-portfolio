import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Name and img */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mesh-background p-4 space-y-6">
          <h1 className="text-display">M. Alejandro Villalobos C.</h1>
          <h2 className="text-title-2">Computer Systems Engineer</h2>
          <h3 className="text-title-3">Welcome to my portfolio. Here you&#39;ll find a showcase of my work, projects, and the impact I&#39;ve made in the tech world.</h3>
        </div>
        <div className="hidden lg:block relative">
          <Image
            src="/images/rubber_ducky.jpg"
            alt="Rubber Ducky Programming"
            width={1024}
            height={768}
          />
        </div>
      </div>


      {/* Projects and previews */}
      <div>
        <div className="grid grid-cols-3">
          <h2 className="text-title-1 p-4">Programming Skills</h2>
          <p className="text-body p-4 col-span-2">
            I love creating stuff and problem solving. Programming combines this in the best way. Here are some examples:
          </p>
        </div>
      </div>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-1">
            <a
              className={`
              text-title-2
              hover:text-text-inverse
              hover:bg-bg-inverse
              w-auto h-full flex justify-center items-center px-6 py-4
              duration-200
            `}>Algorithms</a>
            <a
              className={`
              text-title-2
              hover:text-text-inverse
              hover:bg-bg-inverse
              w-auto h-full flex justify-center items-center px-6 py-4
              duration-200
            `}>AI & ML</a>
            <a
              className={`
              text-title-2
              hover:text-text-inverse
              hover:bg-bg-inverse
              w-auto h-full flex justify-center items-center px-6 py-4
              duration-500
            `}>About Me</a>
          </div>
          <div className="col-span-2">
            <p>
              Here goes a preview of the projects I&#39;ve worked on.
            </p>
          </div>
        </div>

      {/* Contact Info */}
      <div>

      </div>

    </div>
  );
}
