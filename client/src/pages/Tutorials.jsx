import React from "react";
import { Link } from "react-router-dom";
import HtmlIntroduction from "../HTMLSection/Introduction";
import HtmlBasics from "../HTMLSection/Basics";
import HtmlElements from "../HTMLSection/Elements";
import HtmlAttributes from "../HTMLSection/Attributes";
import HtmlInterviewPreparation from "../HTMLSection/InterviewPreparation";
import CssIntroduction from "../CSSSection/Introduction";
import CssSelectors from "../CSSSection/Selectors";
import CssHowTo from "../CSSSection/HowTo";
import CssBorders from "../CSSSection/Borders";
import CssInterviewPreparation from "../CSSSection/InterviewPreparation";

export default function Tutorials() {
  return (
    <div className="p-7">
      <h1 className="font-bold text-4xl">Tutorials</h1>
      <div className="px-10 py-7 font-serif flex flex-col sm:flex-row grid-cols-3 gap-12 sm:gap-28">
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
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Introduction</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/basics"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Basics</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/expressionandoperators"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">
                  Expressions and Operators
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/statements"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Statements</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/loops"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Loops</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/functions"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Functions</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/iife"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">IIFE</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/strings"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Strings</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/arrays"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Arrays</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/scripttag"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Script Tag</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/console"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Console</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/alertpromptconfirm"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">
                  Alert, Prompt, Confirm
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/bom_dom"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">BOM & DOM</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/walkingthedom"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Walking the DOM</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/eventsandotherdomproperties"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">
                  Events and Other DOM Properties
                </span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/practiceproblems"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Practice Problems</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="https://knowledgeable-info.netlify.app/html/interviewpreparation"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">
                  Interview Preparation
                </span>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-orange-300 text-2xl">HTML</h1>
          <div className="px-2 py-1">
            <ul>
              <Link
                to="/html/introduction"
                target="_blank"
                component={HtmlIntroduction}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Introduction</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/html/basics"
                target="_blank"
                component={HtmlBasics}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Basics</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/html/elements"
                target="_blank"
                component={HtmlElements}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Elements</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/html/attributes"
                target="_blank"
                component={HtmlAttributes}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Attributes</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/html/interviewpreparation"
                target="_blank"
                component={HtmlInterviewPreparation}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">
                  Interview Preparation
                </span>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-orange-300 text-2xl">CSS</h1>
          <div className="px-2 py-1">
            <ul>
              <Link
                to="/css/introduction"
                target="_blank"
                component={CssIntroduction}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Introduction</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/css/selectors"
                target="_blank"
                component={CssSelectors}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Selectors</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/css/howto"
                target="_blank"
                component={CssHowTo}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">How To</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/css/borders"
                target="_blank"
                component={CssBorders}
                className="hover:underline"
              >
                <span className="text-xl tracking-wide">Borders</span>
              </Link>
            </ul>
            <ul>
              <Link
                to="/css/interviewpreparation"
                target="_blank"
                component={CssInterviewPreparation}
                className="hover:underline"
              >
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
