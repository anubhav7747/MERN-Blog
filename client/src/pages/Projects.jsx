import React from "react";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import bookreads from "../images/bookreads.png";
import javascript from "../images/javascript.png";
import portfolio from "../images/portfolio.png";
import movie from "../images/movie.png";

export default function Projects() {
  return (
    <>
      <div className="min-h-screen max-w-5xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-md text-gray-500 text-center">
          Learn HTML, CSS, and JavaScript while creating entertaining and interesting projects!
        </p>
        <CallToAction />
        <div className="flex sm:flex-row flex-col grid gap-6 sm:grid-cols-2 grid-cols-1">
          {/* Bookreads */}
          <div className="flex flex-col p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <a
              href="https://github.com/anubhav7747/Bookreads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={bookreads}
                alt="Bookreads"
                className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 hover:scale-95 rounded-lg"
              />
            </a>
            <Link
              to="https://booksreadtillnow.netlify.app/"
              target="_blank"
              className="my-2 underline font-serif text-xl text-center text-orange-600 hover:text-orange-400 hover:no-underline"
            >
              Bookreads
            </Link>
          </div>
          {/*  */}
          <div className="flex flex-col p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <a
              href="https://github.com/anubhav7747/JavaScript-Documentation-Page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={javascript}
                alt="JavaScript Documentation Page"
                className="h-[260px] w-full object-cover group-hover:h-[255px] transition-all duration-300 z-20 hover:scale-95 rounded-lg"
              />
            </a>
            <Link
              to="https://knowledgeable-info.netlify.app/"
              target="_blank"
              className="my-2 underline font-serif text-xl text-center text-orange-600 hover:text-orange-400 hover:no-underline"
            >
              JavaScript Documentation Page
            </Link>
          </div>
          <div className="flex flex-col p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <a
              href="https://github.com/shubhsingh1515/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={portfolio}
                alt="Personal Portfolio"
                className="h-[260px] w-full object-cover group-hover:h-[255px] transition-all duration-300 z-20 rounded-lg hover:scale-95"
              />
            </a>
            <Link
              to="https://p-6nib.onrender.com/"
              target="_blank"
              className="my-2 underline font-serif text-xl text-center text-orange-600 hover:text-orange-400 hover:no-underline"
            >
            Portfolio
            </Link>
          </div>
          <div className="flex flex-col p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <a
              href="https://github.com/shubhsingh1515/Movie-Search-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={movie}
                alt="Movie Search App"
                className="h-[260px] w-full object-cover group-hover:h-[255px] transition-all duration-300 z-20 rounded-lg hover:scale-95"
              />
            </a>
            <Link
              to="https://movie-search-app-qccb.onrender.com/"
              target="_blank"
              className="my-2 underline font-serif text-xl text-center text-orange-600 hover:text-orange-400 hover:no-underline"
            >
            Movie Search App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
