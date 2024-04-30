import React from "react";
import { BiCustomize } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import { MdFeaturedPlayList } from "react-icons/md";

const About = () => {
  return <>
  <div className="bg-blue-400">
  <section
    id="features"
    className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
  >
    <div className="relative mx-auto max-w-5xl text-center">
      <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
        Why choose us
      </span>
      <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
        Build a Student information with ease and Customes with your choose
      </h2>
      <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
        Our System allows for maximum customization.
      </p>
    </div>
    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
          style={{
            backgroundImage:
              "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
            borderColor: "rgb(93, 79, 240)"
          }}
        >
          <BiCustomize size={30} />
        </div>
        <h3 className="mt-6 text-gray-400">Customizable</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          Tailor your editable lists of students, from the your Customizable students.
        </p>
      </div>
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
          style={{
            backgroundImage:
              "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
            borderColor: "rgb(93, 79, 240)"
          }}
        >
          <CgPerformance size={30} />
        </div>
        <h3 className="mt-6 text-gray-400">Fast Performance</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          We build our students for speed in performance, for super-fast load times so
          your time gets reduce.
        </p>
      </div>
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div
          className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
          style={{
            backgroundImage:
              "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
            borderColor: "rgb(93, 79, 240)"
          }}
        >
          <MdFeaturedPlayList size={30}/>
        </div>
        <h3 className="mt-6 text-gray-400">Fully Featured</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          Everything you need to succeed and launch your Students Attendence Lists, right out
          of the box.
        </p>
      </div>
    </div>
    <div
      className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
      style={{
        backgroundImage:
          "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
        borderColor: "rgba(92, 79, 240, 0.2)"
      }}
    ></div>
    <div
      className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
      style={{
        backgroundImage:
          "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
        borderColor: "rgba(92, 79, 240, 0.2)"
      }}
    ></div>
  </section>
</div>

  </>
};

export default About;
