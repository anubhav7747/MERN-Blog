import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-7">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 rounded-lg text-white">
              SAV
            </span>
            Blog
          </Link>
          <p className="mt-7 text-sm">
            This is a major project. You can sign up with your email or with
            Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username"></Label>
              <TextInput
                type="text"
                placeholder="username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value="Email"></Label>
              <TextInput
                type="email"
                placeholder="name123@company.com"
                id="email"
              ></TextInput>
            </div>
            <div>
              <Label value="Password"></Label>
              <TextInput
                type="password"
                placeholder="password"
                id="password"
              ></TextInput>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
