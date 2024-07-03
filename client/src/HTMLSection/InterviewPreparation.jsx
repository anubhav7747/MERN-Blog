import React from "react";

export default function InterviewPreparation() {
  return (
    <>
      <div className="sm:p-12 p-5">
        <h1 className="text-center font-bold underline text-2xl">
          Interview Preparation
        </h1>
        <div className="my-5 font-sans">
          <ul>
            <h3 className="font-bold">1) What is HTML?</h3>
            <p>
              HTML stands for Hyper Text Markup Language. It is a language of
              World Wide Web. It is a standard text formatting language which is
              used to create and display pages on the Web. It makes the text
              more interactive and dynamic. It can turn text into images,
              tables, links.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">2) What are Tags?</h3>
            <p>
              HTML tags are composed of three things: an opening tag, content
              and ending tag. Some tags are unclosed tags.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">3) Do all HTML tags have an end tag.</h3>
            <p>
              No. There are some HTML tags that don't need a closing tag. For
              example: &lt;image&gt; tag, &lt;br&gt; tag.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">4) What is formatting in HTML?</h3>
            <p>
              The HTML formatting is a process of format the text for a better
              look and feel. It uses different tags to make text bold,
              italicized, underlined.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">
              5) How many types of heading does an HTML contain?
            </h3>
            <p>
              The HTML contains six types of headings which are defined with the
              &lt;h1&gt; to &lt;h6&gt; tags. Each type of heading tag displays
              different text size from another. So, &lt;h1&gt; is the largest
              heading tag and &lt;h6&gt; is the smallest one.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">6) How to create a hyperlink in HTML?</h3>
            <p>
              The HTML provides an anchor tag to create a hyperlink that links
              one page to another page. These tags can appear in any of the
              following ways:
              <ul className="list-disc px-5">
                <li>Unvisited link - It is displayed, underlined and blue.</li>
                <li>Visited link - It is displayed, underlined and purple.</li>
                <li>Active link - It is displayed, underlined and red.</li>
              </ul>
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">
              7) Which HTML tag is used to display the data in the tabular form?
            </h3>
            <p>
              The HTML table tag is used to display data in tabular form (row *
              column). It also manages the layout of the page, e.g., header
              section, navigation bar, body content, footer section. Here is the
              list of tags used while displaying the data in the tabular form:
              <div className="overflow-hidden">
                <table className="text-left text-sm text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Tag
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;table&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It defines a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;tr&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It defines a row in a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;th&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It defines a header cell in a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;td&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It defines a cell in a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;caption&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It defines the table caption.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;colgroup&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It specifies a group of one or more columns in a table
                        for formatting.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;col&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It is used with &lt;colgroup&gt; element to specify
                        column properties for each column.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;tbody&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It is used to group the body content in a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;thead&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It is used to group the header content in a table.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4">
                        &lt;footer&gt;
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        It is used to group the footer content in a table.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">8) What are some common lists that are used when designing a page?</h3>
            <p>
            There are many common lists which are used to design a page. You can choose any or a combination of the following list types:
            <ul className="list-disc px-5">
              <li>Ordered list - The ordered list displays elements in numbered format. It is represented by &lt;ol&gt; tag.</li>
              <li>Unordered list - The unordered list displays elements in bulleted format. It is represented by &lt;ul&gt; tag.</li>
              <li>Definition list - The definition list displays elements in definition form like in dictionary. The &lt;dl&gt;, &lt;dt&gt; and &lt;dd&gt; tags are used to define description list.</li>
            </ul>
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">9) What is the difference between HTML elements and tags?</h3>
            <p>
            HTML elements communicate to the browser to render text. When the elements are enclosed by brackets &lt;&gt;, they form HTML tags. Most of the time, tags come in a pair and surround content.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">10) What is semantic HTML?</h3>
            <p>
            Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML &lt;b&gt;&lt;/b&gt; tag is not used for bold statement as well as &lt;i&gt;&lt;/i&gt; tag is used for italic. Instead of these we use &lt;strong&gt;&lt;/strong&gt; and &lt;em&gt;&lt;/em&gt; tags.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">11) What is an image map?</h3>
            <p>
            Image map facilitates you to link many different web pages using a single image. It is represented by &lt;map&gt; tag. You can define shapes in images that you want to make part of an image mapping.
            </p>
          </ul>
          <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul>
            <h3 className="font-bold">12) How to insert a copyright symbol on a browser page?</h3>
            <p>
            You can insert a copyright symbol by using &copy; or &#169; in an HTML file.
            </p>
          </ul>
          {/* <hr className="h-0.5 my-5 bg-gray-200 border-0 dark:bg-gray-700" /> */}
        </div>
      </div>
    </>
  );
}
