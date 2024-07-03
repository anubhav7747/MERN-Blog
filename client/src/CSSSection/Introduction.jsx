import React from "react";

export default function Introduction() {
  return (
    <div className="sm:p-12 p-5">
      <h1 className="text-center font-bold underline text-2xl">CSS Introduction</h1>
      <div className="my-5 font-sans">
        <p className="">
          CSS (Cascading Style Sheets) is a language designed to simplify the
          process of making web pages presentable. It allows you to apply styles
          to HTML documents, describing how a webpage should look by prescribing
          colors, fonts, spacing, and positioning. CSS provides developers and
          designers with powerful control over the presentation of HTML
          elements.{" "}
        </p>
        <p className="py-5">
          HTML uses tags and CSS uses rulesets. CSS styles are applied to the
          HTML element using selectors. CSS is easy to learn and understand, but
          it provides powerful control over the presentation of an HTML
          document.
        </p>
        <h2 className="font-bold text-xl">Why CSS?</h2>
        <ul className="list-disc px-6 py-5 ">
          <li>
            <b>Saves Time:</b> Write CSS once and reuse it across multiple HTML
            pages.
          </li>
          <li>
            <b>Easy Maintenance:</b> Change the style globally with a single
            modification.
          </li>
          <li>
            <b>Search Engine Friendly:</b> Clean coding technique that improves
            readability for search engines.
          </li>
          <li>
            <b>Superior Styles:</b> Offers a wider array of attributes compared
            to HTML.
          </li>
          <li>
            <b>Offline Browsing:</b> CSS can store web applications locally
            using offline cache, allowing offline viewing.
          </li>
        </ul>
        <h2 className="py-5 font-bold text-xl">CSS Syntax</h2>
        <p className="">
          CSS consists of style rules that are interpreted by the browser and
          applied to the corresponding elements. A style rule set includes a
          selector and a declaration block.
        </p>
        <ul className="list-disc px-6 ">
          <li>
            <b>Selector:</b> Targets specific HTML elements to apply styles.
          </li>
          <li>
            <b>Declaration:</b> Combination of a property and its corresponding
            value.
          </li>
        </ul>
        <img
          src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png"
          alt=""
          className="py-5 mx-auto"
        />
        <ul className="list-disc px-6 ">
          <li>
            The selector points to the HTML element that you want to style.
          </li>
          <li>
            The declaration block contains one or more declarations separated by
            semicolons.
          </li>
          <li>
            Each declaration includes a CSS property name and a value, separated
            by a colon.
          </li>
          <li>
            These are ways in which you can style an HTML element. (In this
            example, color is a property of the elements.) In CSS, you choose
            which properties you want to affect in the rule.
          </li>
          <li>
            To the right of the property—after the colon—there is the property
            value. This chooses one out of many possible appearances for a given
            property. (For example, there are many color values in addition to
            red.)
          </li>
        </ul>
        <h2 className="py-5 font-bold text-xl">Web Page with & without CSS</h2>
        <div className="grid gap-5 sm:grid-cols-2 grid-cols-1">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230630121309/Screenshot-2023-06-30-121230.png"
            alt=""
          />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230704065430/Screenshot-2023-07-04-065401.png"
            alt=""
          />
        </div>
        <p className="py-5">
          CSS is essential for creating visually appealing and maintainable web
          pages. It enhances the website look and feel and user experience by
          allowing precise control over the presentation of HTML elements.
          Mastering CSS is crucial for effective web design and development.
        </p>
      </div>
    </div>
  );
}
