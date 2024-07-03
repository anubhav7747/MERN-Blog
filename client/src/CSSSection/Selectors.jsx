import React from "react";

export default function Selectors() {
  return (
    <div className="sm:p-12 p-5">
      <h1 className="text-center font-bold underline text-2xl">
        CSS Selectors
      </h1>
      <div className="my-5 font-sans">
        <p className="py-5">CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
        <p className="">We can divide CSS selectors into five categories:</p>
        <ul className="list-disc px-7">
            <li>Simple selectors (select elements based on name, id, class)</li>
            <li>Combinator selectors (select elements based on a specific relationship between them)</li>
            <li>Pseudo-class selectors (select elements based on a certain state)</li>
            <li>Pseudo-elements selectors (select and style a part of an element)</li>
            <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
        </ul>
        <div class="flex flex-col py-5">
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
                        Selector name
                      </th>
                      <th
                        scope="col"
                        class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        What does it select
                      </th>
                      <th
                        scope="col"
                        class="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        Element selector (sometimes called a tag or type
                        selector)
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        All HTML elements of the specified type.
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        <span className="bg-gray-100 px-1">p</span>
                        <br />
                        selects{" "}
                        <span className="bg-gray-100 px-1">&lt;p&gt;</span>
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        ID Selector
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        The element on the page with the specified ID. On a
                        given HTML page, each id value should be unique.
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        <span className="bg-gray-100 px-1">#my-id</span> <br /> selects <span className="bg-gray-100 px-1">&lt;p id="my-id"&gt;</span> or <span className="bg-gray-100 px-1">&lt;a id="my-id"&gt;</span>
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        Class selector
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        The element(s) on the page with the specified class.
                        Multiple instances of the same class can appear on a
                        page.
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      <span className="bg-gray-100 px-1">.my-id</span> <br /> selects <span className="bg-gray-100 px-1">&lt;p class="my-class"&gt;</span> and <span className="bg-gray-100 px-1">&lt;a class="my-class"&gt;</span>
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        Attribute selector
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        The element(s) on the page with the specified attribute.
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      <span className="bg-gray-100 px-1">img[src]</span> <br /> selects <span className="bg-gray-100 px-1">&lt;img src="myimage.png"&gt;</span> but not <span className="bg-gray-100 px-1">&lt;img"&gt;</span>
                      </td>
                    </tr>
                    <tr class="border-b border-neutral-200 dark:border-white/10">
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        Pseudo-class selector
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                        The specified element(s), but only when in the specified
                        state. (For example, when a cursor hovers over a link.)
                      </td>
                      <td class="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      <span className="bg-gray-100 px-1">a:hover</span> <br /> selects <span className="bg-gray-100 px-1">&lt;a&gt;</span> but only when the mouse pointer is hovering over the link.
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
