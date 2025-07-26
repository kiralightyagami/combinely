"use client";
import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="shadow-input text-base mx-w-xs w-fit flex items-center gap-2 justify-center mt-12 mb-12 rounded-full bg-white border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 px-3 py-1">
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          Backend by
        </p>{" "}
        <Image
          src="https://modelence.com/ycombinator.svg"
          alt="backend"
          width={100}
          height={100}
        />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <span className="text-yellow-600">AI Co-Worker</span> For Accountants
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Helping with everything from answering client queries, to producing &
          reviewing work.
        </p>
        <div className="flex flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Your Work Email"
            className="rounded-lg border border-neutral-800  w-fit relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2 text-sm text-neutral-500 cursor-pointer"
          />
          <button className="hover:bg-amber-600 rounded-lg border border-neutral-800 w-fit relative z-10 mt-4 bg-amber-500 placeholder:text-neutral-700 p-2 text-sm text-white cursor-pointer">
            Get Access
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href="https://calendly.com/d/cn29-5dx-6bz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 underline relative z-10 text-sm mt-4 hover:text-neutral-300 transition-all duration-300"
          >
            <p>Or book a call</p>
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
