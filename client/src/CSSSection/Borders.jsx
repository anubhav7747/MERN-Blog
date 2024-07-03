import React from "react";

export default function Borders() {
  return (
    <div className="sm:p-12 p-5">
      <h1 className="text-center font-bold underline text-2xl">CSS Borders</h1>
      <div className="my-5 font-sans">
        <p className="">
          CSS borders are used to define an element’s boundary, providing visual
          separation and structure to web content. Borders can be customized in
          terms of width, style, and color, allowing for a wide range of design
          possibilities. Common border styles include solid, dashed, dotted, and
          double.
        </p>
        <div className="overflow-hidden">
          <table className="text-left text-sm text-surface dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr>
                <th scope="col" class="px-6 py-4">
                  Property
                </th>
                <th scope="col" class="px-6 py-4">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4">border-style</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Determines the type of border (e.g., solid, dashed, dotted).
                </td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4">border-width</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Sets the width of the border (in pixels, points, or other
                  units).
                </td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4">border-color</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Specifies the border color.
                </td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4">border-radius</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Creates rounded corners for elements.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Border Style */}
        <h2 className="py-5 font-bold text-xl">CSS Border Style</h2>
        <p>
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-style</span>{" "}
          property specifies what kind of border to display.
        </p>
        <p className="py-5">The following values are allowed:</p>
        <ul className="list-disc px-5">
          <li>
            <span className="text-red-500 bg-gray-100 px-1">dotted</span> -
            Defines a dotted border
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">dashed</span> -
            Defines a dashed border
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">solid</span> -
            Defines a solid border
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">double</span> -
            Defines a double border
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">groove</span> -
            Defines a 3D grooved border. The effect depends on the border-color
            value
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">ridge</span> -
            Defines a 3D ridged border. The effect depends on the border-color
            value
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">inset</span> -
            Defines a 3D inset border. The effect depends on the border-color
            value
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">outset</span> -
            Defines a 3D outset border. The effect depends on the border-color
            value
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">none</span> -
            Defines no border
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">hidden</span> -
            Defines a hidden border
          </li>
        </ul>
        <p className="py-5">
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-style</span>{" "}
          property can have from one to four values (for the top border, right
          border, bottom border, and the left border).
        </p>

        {/* Border Width */}
        <h2 className="py-5 font-bold text-xl">CSS Border Width</h2>
        <p className="">
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-width</span>{" "}
          property specifies the width of the four borders.
        </p>
        <p className="py-5">
          The width can be set as a specific size (in px, pt, cm, em, etc) or by
          using one of the three pre-defined values: thin, medium, or thick.
        </p>
        <p className="">
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-width</span>{" "}
          can have from one to four values (for the top border, right border,
          bottom border, and the left border).
        </p>

        {/* Border Color */}
        <h2 className="py-5 font-bold text-xl">CSS Border Color</h2>
        <p className="">
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property is used to set the color of the four borders.
        </p>
        <p className="py-5">The color can be set by:</p>
        <ul className="list-disc px-7">
            <li>name - specify a color name, like "red"</li>
            <li>HEX - specify a HEX value, like "#ff0000"</li>
            <li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
            <li>HSL - specify a HSL value, like "hsl(0, 100%, 50%)"</li>
            <li>transparent</li>
        </ul>
        <p className="py-5"><span className="font-bold">Note:</span> If <span className="text-red-500 bg-gray-100 px-1">border-color</span> is not set, it inherits the color of the element.</p>
        <p>The <span className="text-red-500 bg-gray-100 px-1">border-color</span> property can have from one to four values (for the top border, right border, bottom border, and the left border).</p>
      </div>
    </div>
  );
}
