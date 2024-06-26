import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font-semibold text-center my-7">
            About SAV's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
            Welcome to SAV's Blog! In order to complete their final year major project, Shubham Singh, Anubhav Tiwari, and Vishakha Chaudhary collaborated to create this blog.
            </p>
            <p>
            This blog features tutorials and articles on a variety of subjects, including programming languages, web development, books, food, and travel.
            </p>
            <p>
            We encourage you to leave comments on our posts and engage with other readers. We have the ability to both like and respond to other people's comments. We believe that a community of learners can help each other grow and improve.
            </p>
            <p>
            We hope you enjoy reading our blog. We are open to suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
