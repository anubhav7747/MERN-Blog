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

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Border Style */}
        <h2 className=" font-bold text-xl">CSS Border Style</h2>
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

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Border Width */}
        <h2 className=" font-bold text-xl">CSS Border Width</h2>
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

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Border Color */}
        <h2 className=" font-bold text-xl">CSS Border Color</h2>
        <p className="py-5">
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property is used to set the color of the four borders.
        </p>
        <p className="">The color can be set by:</p>
        <ul className="list-disc px-7">
          <li>name - specify a color name, like "red"</li>
          <li>HEX - specify a HEX value, like "#ff0000"</li>
          <li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
          <li>HSL - specify a HSL value, like "hsl(0, 100%, 50%)"</li>
          <li>transparent</li>
        </ul>
        <p className="py-5">
          <span className="font-bold">Note:</span> If{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span> is
          not set, it inherits the color of the element.
        </p>
        <p>
          The{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property can have from one to four values (for the top border, right
          border, bottom border, and the left border).
        </p>

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Border - Individual Sides */}
        <h2 className=" font-bold text-xl">CSS Border - Individual Sides</h2>
        <p className="py-5">
          In CSS, there are also properties for specifying each of the borders
          (top, right, bottom, and left).
        </p>
        <p className="py-5">
          If the{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property has four values:
        </p>
        <ul className="list-disc px-7">
          <li className="font-bold">
            border-style: dotted solid double dashed;
          </li>
          <ul className="list-decimal px-7">
            <li>top border is dotted</li>
            <li>right border is solid</li>
            <li>bottom border is double</li>
            <li>left border is dashed</li>
          </ul>
        </ul>
        <p className="py-5">
          If the{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property has three values:
        </p>
        <ul className="list-disc px-7">
          <li className="font-bold">border-style: dotted solid double;</li>
          <ul className="list-decimal px-7">
            <li>top border is dotted</li>
            <li>right and left border is solid</li>
            <li>bottom border is double</li>
          </ul>
        </ul>
        <p className="py-5">
          If the{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property has two values:
        </p>
        <ul className="list-disc px-7">
          <li className="font-bold">border-style: dotted solid;</li>
          <ul className="list-decimal px-7">
            <li>top and bottom border is dotted</li>
            <li>right and left border is solid</li>
          </ul>
        </ul>
        <p className="py-5">
          If the{" "}
          <span className="text-red-500 bg-gray-100 px-1">border-color</span>{" "}
          property has one values:
        </p>
        <ul className="list-disc px-7">
          <li className="font-bold">border-style: dotted;</li>
          <ul className="list-decimal px-7">
            <li>all four borders are dotted</li>
          </ul>
        </ul>

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Border - Shorthand Property */}
        <h2 className=" font-bold text-xl">CSS Border - Shorthand Property</h2>
        <p className="py-5">
          To shorten the code, it is also possible to specify all the individual
          border properties in one property.
        </p>
        <p>
          The <span className="text-red-500 bg-gray-100 px-1">border</span>{" "}
          property is a shorthand property for the following individual border
          properties:
        </p>
        <ul className="list-disc px-7 py-5">
          <li>
            <span className="text-red-500 bg-gray-100 px-1">border-width</span>
          </li>
          <li>
            <span className="text-red-500 bg-gray-100 px-1">border-style</span>
          </li>{" "}
          (required)
          <li>
            <span className="text-red-500 bg-gray-100 px-1">border-color</span>
          </li>
        </ul>

        <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* All CSS Border Properties */}
        <h2 className=" font-bold text-xl">All CSS Border Properties</h2>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border border-neutral-200 text-center text-sm text-surface dark:border-white/10 dark:text-white">
                  <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th
                        scope="col"
                        class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Property
                      </th>
                      <th
                        scope="col"
                        class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        border
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the border properties in one declaration
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-bottom
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the bottom border properties in one declaration
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-bottom-color
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        Sets the color of the bottom border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-bottom-style
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the style of the bottom border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-bottom-width
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the width of the bottom border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-color
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the color of the four borders
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-left
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the left border properties in one declaration
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-left-color
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the color of the left border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-left-style
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the style of the left border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-left-width
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the width of the left border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-radius
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the four border-*-radius properties for rounded corners
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-right
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the right border properties in one declaration
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-right-color
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the color of the right border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-right-style
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the style of the right border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-right-width
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the width of the right border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-style
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the style of the four borders
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-top
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets all the top border properties in one declaration
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-top-color
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the color of the top border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-top-style
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the style of the top border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-top-width
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the width of the top border
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      border-width
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      Sets the width of the four borders
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
