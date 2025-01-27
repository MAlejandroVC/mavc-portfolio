import Image from "next/image";

export default function Home() {
  return (
    <div className="border-y">
      {/* Name and img */}
      <div className="max-w-screen-xl mx-auto
                      grid grid-cols-1 lg:grid-cols-2">
        <div className="mesh-background p-4">
          <h1>M. Alejandro Villalobos C.</h1>
          <h2>Computer Systems Engineer</h2>
          <h3>Welcome to my portfolio. Here you&#39;ll find a showcase of my work, projects, and the impact I&#39;ve made in the tech world.</h3>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/rubber_ducky.jpg"
            alt="Rubber Ducky Programming"
            width={1024}
            height={1024}
          />
        </div>
      </div>

      {/* Projects and previews */}
      <div>

      </div>

      {/* Contact Info */}
      <div>

      </div>

    </div>
  );
}
