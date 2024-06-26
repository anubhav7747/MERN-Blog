import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Do you wish to know more about JavaScript?</h2>
        <p className="text-gray-500 my-2">Look through these 15 JavaScript Projects resources.</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none"
        >
          <a
            href="https://github.com/anubhav7747/HTML-CSS-JS-Projects-2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            15 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://austingil.com/wp-content/uploads/JavaScript-Blog-Cover.png" />
      </div>
    </div>
  );
}
