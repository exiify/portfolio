import { useEffect, useRef } from "react";

export default function Index() {
  const ref = useRef();

  function scrollToProjects() {
    console.log(ref);
    if (!ref.current) return;

    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="h-full">
      <div className="h-full">
        <div className="  px-12 md:px-32 py-48">
          <div className="">
            <div className="flex flex-col">
              <h1 className="text-7xl">Kp</h1>

              <h1 className="text-7xl animate-gradient-xy pb-3  bg-clip-text text-transparent bg-gradient-to-l from-accent to-secondary">
                {" "}
                Adeyinka
              </h1>
            </div>
            <div className=" md:w-1/2">
              <span className="text-xl ">
                Hello my name is Kp Adeyinka I am a programmer/Youtuber. I
                mainly program in JavaScript, TypeScript, C#, Html and CSS. My
                favorite frameworks/technologies are react, VSCode, npm,
                discord.js & google.com!
              </span>
              <div id="buttons" className="flex mt-4 gap-4 text-gray-100">
                <a
                  onClick={() => scrollToProjects()}
                  className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
                >
                  Projects
                </a>
                <a
                  href="/posts"
                  className="py-4 text-xl px-16 transition-all duration-1000 rounded bg-gradient-to-tl from-purple-500 via-secondary to-accent bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col px-24 gap-28 pb-12" ref={ref}>
        <ProjectReversed
          title="Kp the Discord Bot"
          desc="Kp is one of the best multipuropose discord Bots! With Kp you can make
          the best server in the world because it features Music commands, a
          leveling system, Moderation Commands, Fun Commands, a dashboard with a
          music player & so much more!"
          img="https://i.imgur.com/7IC3Qy7.png"
          alt="An example of Kp discord bot playing spotify"
          href="https://kpbot.tech"
        />
        <Project
          title="Practical JS Utils (Public Beta)"
          desc="Practical JS Utils is an npm package that makes your life easier! It's a package with utility functions from all around the web, So you don't have to search the internet for them! "
          img="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png"
          alt="NPM LOGO"
          href="https://www.npmjs.com/package/practical-js-utils"
        />
      </div>
    </div>
  );
}
function Project(props) {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col md:w-1/3">
        <span className="font-bold text-5xl py-4 text-secondary">
          {props.title}
        </span>
        <span className="text-xl">{props.desc}</span>
        <div className="flex mt-4">
          <a
            href={props.href}
            className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
          >
            Website
          </a>
        </div>
      </div>
      <div className="ml-auto h-full flex justify-center items-center">
        <img
          className="mx-auto md:ml-auto md:mx-0 mt-4 rounded"
          src={props.img}
          alt={props.alt}
          width={450}
          height={450}
        />
      </div>
    </section>
  );
}
function ProjectReversed(props) {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="mr-auto h-full flex justify-center items-center">
        <img
          className=" mx-auto md:ml-auto md:mx-0 mt-4 rounded"
          src={props.img}
          alt={props.alt}
          width={450}
          height={450}
        />
      </div>
      <div className="flex flex-col md:w-1/3">
        <span className="font-bold text-5xl py-4 text-accent">
          {props.title}
        </span>
        <span className="text-xl">{props.desc}</span>

        <div className="flex mt-4">
          <a
            href={props.href}
            className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
          >
            Website
          </a>
        </div>
      </div>
    </section>
  );
}
