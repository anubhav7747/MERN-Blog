import React from "react";
import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <div className="p-7">
      <h1 className="font-bold text-4xl">Tutorials</h1>
      <div className="px-10 py-7 font-serif flex flex-row grid-cols-3 gap-28">
        <div>
          <Link
            to="https://knowledgeable-info.netlify.app/"
            className="text-orange-300 text-2xl hover:underline"
          >
            JavaScript
          </Link>
          <div className="px-2 py-1">
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">Introduction</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/basics"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Basics</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/expressionandoperators"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">
                  Expressions and Operators
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/statements"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Statements</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/loops"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Loops</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/functions"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Functions</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/iife"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">IIFE</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/strings"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Strings</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/arrays"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Arrays</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/scripttag"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Script Tag</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/console"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">Console</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/alertpromptconfirm"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">
                  Alert, Prompt, Confirm
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/bom_dom"
                target="_blank"
              >
                Learn <span className="text-xl tracking-wide">BOM & DOM</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/walkingthedom"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">Walking the DOM</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/eventsandotherdomproperties"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">
                  Events and Other DOM Properties
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/practiceproblems"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">Practice Problems</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/interviewpreparation"
                target="_blank"
              >
                Learn{" "}
                <span className="text-xl tracking-wide">
                  Interview Preparation
                </span>
              </Link>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
