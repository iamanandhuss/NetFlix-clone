import * as React from "react";
import Dropdown from "./Dropdown";

export interface IAppProps {}

export function Footer(props: IAppProps) {
  return (
    <footer
      className="
        bg-black
        text-white

        px-6
        sm:px-10
        md:px-16
        lg:px-24

        pt-16
        md:pt-24

        pb-10
      "
    >

      <div>

        <h1
          className="
            text-base
            md:text-xl
            lg:text-2xl
            font-medium
          "
        >
          Questions? Call{" "}
          <span className="underline">
            000-800-919-1743
          </span>
        </h1>


        <div
          className="
            grid

            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4

            gap-6

            text-sm
            md:text-base

            underline

            pt-10
          "
        >

          <div className="space-y-3">
            <h1>FAQ</h1>
            <h1>Investor Relations</h1>
            <h1>Privacy</h1>
            <h1>Speed Test</h1>
          </div>


          <div className="space-y-3">
            <h1>Help Centre</h1>
            <h1>Jobs</h1>
            <h1>Cookie Preferences</h1>
            <h1>Legal Notices</h1>
          </div>


          <div className="space-y-3">
            <h1>Account</h1>
            <h1>Ways to Watch</h1>
            <h1>Corporate Information</h1>
            <h1>Only on Netflix</h1>
          </div>


          <div className="space-y-3">
            <h1>Media Centre</h1>
            <h1>Terms of Use</h1>
            <h1>Contact Us</h1>
          </div>

        </div>


        <div className="pt-10">

          <Dropdown />


          <p
            className="
              text-sm
              md:text-base
              mt-5
            "
          >
            Netflix India
          </p>


          <p
            className="
              text-xs
              md:text-sm
              mt-5

              max-w-[600px]

              text-gray-300
            "
          >
            This page is protected by Google reCAPTCHA to
            ensure you're not a bot.
          </p>

        </div>

      </div>

    </footer>
  );
}