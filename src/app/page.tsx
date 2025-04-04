import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Welcome */}
      <div className={`
        py-6 min-h-[90vh] flex flex-col items-center justify-center gap-6 lg:flex-row-reverse
        px-8 xl:px-0
        `}>
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
        <div className="lg:max-w-2xl flex flex-col justify-center text-center lg:text-left gap-4">
          <h1 className="text-display">Welcome to my web portfolio.</h1>
          <p className="text-body-lg">
            My name is
            <span className={`font-bold text-accent-orange`}>
              &nbsp;Alejandro Villalobos
            </span>
            , a software developer passionate about backend engineering, AI, and tech education.
            I’ve researched anomaly detection with YOLOv5, built scalable APIs, and developed innovative projects that push technology forward.
            Whether refining complex systems or mentoring future engineers, I thrive on solving challenges and bringing ideas to life.
          </p>
        </div>
      </div>

      {/* My skills */}
      <div className={`py-24`}>
        <h2 className={`mb-4 text-title-1 text-center`}>My Skills</h2>
        <div className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        rounded-lg gap-4 mx-8
      `}>
          {/* Software Development */}
          <div className="bg-bg-secondary rounded-xl p-4 border-2">
            {/*Icon and title*/}
            <div className={`flex mb-4 items-center gap-2`}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="64"
                   height="64"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="var(--accent-cyan)"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="lucide lucide-square-terminal">
                <path d="m7 11 2-2-2-2"/>
                <path d="M11 13h4"/>
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              </svg>
              <h3 className="text-title-3">Software Development</h3>
            </div>
            {/*Text*/}
            <p className="text-body">
              I build scalable and intelligent systems that power data-driven applications.
              From designing APIs to optimizing databases, I love creating efficient backends and integrating frontend technologies when needed.
            </p>
            {/*List*/}
            <h4 className="text-title-3 mt-2 text-accent-cyan">Technologies</h4>
            <ul className="text-body list-disc ml-4">
              <li>Django</li>
              <li>Java</li>
              <li>SQL and GraphQL</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </div>
          {/* Data Science */}
          <div className="bg-bg-secondary rounded-xl p-4 border-2">
            {/*Icon and title*/}
            <div className={`flex mb-4 items-center gap-4`}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="64"
                   height="64"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="var(--accent-magenta)"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="lucide lucide-brain circuit">
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                <path d="M12 13h4"/>
                <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
                <path d="M12 8h8"/>
                <path d="M16 8V5a2 2 0 0 1 2-2"/>
                <circle cx="16" cy="13" r=".5"/>
                <circle cx="18" cy="3" r=".5"/>
                <circle cx="20" cy="21" r=".5"/>
                <circle cx="20" cy="8" r=".5"/>
              </svg>
              <h3 className="text-title-3">Data Science</h3>
            </div>
            {/*Text*/}
            <p className="text-body">
              AI isn’t just my skill—it’s my passion; I specialize in machine learning and computer vision.
              I thrive on turning raw data into intelligent insights,
              improving accuracy through data augmentation and model optimization.
            </p>
            {/*List*/}
            <h4 className="text-title-3 mt-2 text-accent-magenta">Tools and Frameworks</h4>
            <ul className="text-body list-disc ml-4">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>YOLO</li>
              <li>Scikit-learn</li>
              <li>OpenCV</li>
            </ul>
          </div>
          {/* Communication */}
          <div className="bg-bg-secondary rounded-xl p-4 border-2">
            {/*Icon and title*/}
            <div className={`flex mb-4 items-center gap-4`}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="64"
                   height="64"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="var(--accent-forest)"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="lucide lucide-notebook-pen">
                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>
                <path d="M2 6h4"/>
                <path d="M2 10h4"/>
                <path d="M2 14h4"/>
                <path d="M2 18h4"/>
                <path
                  d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
              </svg>
              <h3 className="text-title-3">Communication & Mentorship</h3>
            </div>
            {/*Text*/}
            <p className="text-body">
              Great ideas should be understood and shared.
              Whether presenting AI research, mentoring in robotics, or teaching automation;
              I love making complex topics clear, accessible, and exciting.
            </p>
            {/*List*/}
            <h4 className="text-title-3 mt-2 text-accent-forest">Experience</h4>
            <ul className="text-body list-disc ml-4">
              <li>Research papers</li>
              <li>Technical presentations</li>
              <li>Teaching and mentoring</li>
              <li>Arduino</li>
              <li>Excel automation</li>
            </ul>
          </div>
          {/*Easter Egg*/}
          <div className="hidden md:block lg:hidden p-6 my-auto">
            <blockquote className={`border-l-8 border-solid border-accent-orange p-4`}>
              <p className={`text-title-1`}>
                “Life happens wherever you are, whether you make it or not.”
              </p>
              <footer className={`text-subtitle text-right`}>
                Uncle Iroh
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* My Projects */}
      <div className={`py-12`}>
        <h2 className={`mb-4 text-title-1 text-center`}>My Projects</h2>
        <div className={`grid gap-8`}>

        </div>
        {/*AI and ML*/}
        <div className={`grid grid-cols-1 lg:grid-cols-2 mx-8 gap-8`}>
          <div className={`px-8 content-center`}>
            <h2 className={`text-title-3 pb-4`}>Artificial Intelligence and Machine Learning</h2>
            <p className={`text-body`}>
              I think AI is pretty cool and these are some of the projects I&#39;ve worked on.
              More text Ipsum Lorem lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={`min-h-[300px] bg-bg-secondary rounded-xl`}>
            test
          </div>
        </div>

      </div>

    </div>
  );
}
