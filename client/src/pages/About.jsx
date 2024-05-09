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
              Welcome to SAV's Blog! This blog was created by Shubham Singh,
              Anubhav Tiwari and Vishakha Chaudhary as a group project for final
              year major project.
            </p>
            <p>
              On this blog, you will find articles and tutorials on topics such
              as web development, programming languages, books, food and travel.
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. We can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
            <p>
              We hope you enjoy reading our blog. Any suggestions are welcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
