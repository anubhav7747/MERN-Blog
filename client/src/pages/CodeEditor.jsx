// import React, { useRef, useState } from "react";
// // import { CodeiumEditor } from "@codeium/react-code-editor";
// import Editor from "@monaco-editor/react";
// // import { Button } from "flowbite-react";

// // const files = {
// //   "script.js": {
// //     name: "script.js",
// //     language: "javascript",
// //     value: "console.log('Hello World')",
// //   },
// //   "hello.java": {
// //     name: "hello.java",
// //     language: "java",
// //     value: "System.out.print('Hello World')",
// //   },
// //   "hello.py": {
// //     name: "hello.py",
// //     language: "python",
// //     value: "print('Hello World')",
// //   },
// //   "index.html": {
// //     name: "index.html",
// //     language: "html",
// //     value: "<h1>This is a heading.</h1>",
// //   },
// // };

// export default function CodeEditor() {
//   // const [fileName, setFileName] = useState("script.js");
//   // const editorRef = useRef(null);
//   // const file = files[fileName];
//   const [code, setCode] = useState("// type your code ...");
//   const [language, setLanguage] = useState('javascript');

//   // function handleEditorDidMount(editor, monaco) {
//   //   editorRef.current = editor;
//   // }

//   // function getEditorValue() {
//   //   alert(editorRef.current.getValue());
//   // }

//   const handleEditorChange = (value, event) => {
//     setCode(value);
//   };

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   const handleButtonClick = () => {
//     // console.log(code);
//     console.log(`Language: ${language}\nCode:\n${code}`);
//   };

//   return (
//     <div>
//       {/* <p>Here's an AI-powered Python editor using Codeium.</p>
//       <CodeiumEditor language="python" theme="vs-dark" />
//       <CodeiumEditor language="java" theme="vs-dark" />
//       <CodeiumEditor language="javascript" theme="vs-dark" /> */}
//       {/* <div className="flex gap-2 p-2">
//         <Button
//           onClick={() => setFileName("index.html")}
//           outline
//           gradientDuoTone="purpleToBlue"
//         >
//           html
//         </Button>
//         <Button
//           onClick={() => setFileName("hello.java")}
//           outline
//           gradientDuoTone="purpleToBlue"
//         >
//           java
//         </Button>
//         <Button
//           onClick={() => setFileName("script.js")}
//           outline
//           gradientDuoTone="purpleToBlue"
//         >
//           javascript
//         </Button>
//         <Button
//           onClick={() => setFileName("hello.py")}
//           outline
//           gradientDuoTone="purpleToBlue"
//         >
//           python
//         </Button>
//         <Button
//           onClick={() => getEditorValue()}
//           outline
//           gradientDuoTone="purpleToPink"
//         >
//           Run
//         </Button>
//         <button onClick={handleButtonClick}>Get Code</button>
//       </div> */}
//       <select onChange={handleLanguageChange} value={language}>
//         <option value="javascript">JavaScript</option>
//         <option value="java">Java</option>
//       </select>
//       <Editor
//         height="60vh"
//         // width="100%"
//         theme="vs-dark"
//         // onMount={handleEditorDidMount}
//         // path={file.name}
//         // defaultLanguage={file.language}
//         // defaultValue={file.value}
//         language={language}
//         value={code}
//         onChange={handleEditorChange}
//       />
//       <button onClick={handleButtonClick}>Get Code</button>
//       {/* <div
//         height="20vh"
//         width="50%"
//         theme="vs"
//         onMount={handleEditorDidMount}
//       ></div> */}
//     </div>
//   );
// }

// MonacoEditorComponent.jsx
// import React, { useState } from 'react';
// import Editor from '@monaco-editor/react';
// import axios from 'axios';

// const CodeEditor = () => {
//   const [code, setCode] = useState('// type your code...');
//   const [language, setLanguage] = useState('javascript');
//   const [output, setOutput] = useState('');

//   const handleEditorChange = (value, event) => {
//     setCode(value);
//   };

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   const handleButtonClick = async () => {
//     if (language === 'javascript') {
//       // Execute JavaScript directly in the browser
//       try {
//         // eslint-disable-next-line no-eval
//         const result = eval(code);
//         setOutput(String(result));
//       } catch (error) {
//         setOutput(error.toString());
//       }
//     } else {
//       // For Java and Python, use an external API like JDoodle or similar
//       const apiUrl = 'https://api.jdoodle.com/v1/execute';
//       const clientId = '4b25fddf37a2d328875283f512c5bbe6'; // Replace with your JDoodle client ID
//       const clientSecret = '5c9ed3dc6eb9c7b2292bf9869e96a22beb4a24a34499265365fc0db5543a54ee'; // Replace with your JDoodle client secret

//       try {
//         const response = await axios.post(apiUrl, {
//           script: code,
//           language,
//           versionIndex: "0", // Change this based on the language version you want to use
//           clientId,
//           clientSecret
//         });
//         setOutput(response.data.output);
//       } catch (error) {
//         setOutput(error.toString());
//       }
//     }
//   };

//   return (
//     <div>
//       <select onChange={handleLanguageChange} value={language}>
//         <option value="javascript">JavaScript</option>
//         <option value="java">Java</option>
//         <option value="python">Python</option>
//       </select>
//       <Editor
//         height="70vh"
//         language={language}
//         value={code}
//         onChange={handleEditorChange}
//       />
//       <button onClick={handleButtonClick}>Get Output</button>
//       <h2>Output:</h2>
//       <pre>{output}</pre>
//     </div>
//   );
// };

// export default CodeEditor;



// fffffffff
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const CodeEditor = () => {
  const [code, setCode] = useState("// type your code...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const toggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleButtonClick = async () => {
    const apiUrl = "/api/v1/execute"; // Proxy route

    const clientId = "4b25fddf37a2d328875283f512c5bbe6"; // Replace with your JDoodle client ID
    const clientSecret =
      "5c9ed3dc6eb9c7b2292bf9869e96a22beb4a24a34499265365fc0db5543a54ee"; // Replace with your JDoodle client secret

    try {
      const response = await axios.post(apiUrl, {
        script: code,
        language,
        versionIndex: "0", // Update this based on the language version you want to use
        clientId,
        clientSecret,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div>
      <select
        onChange={handleLanguageChange}
        value={language}
        className={`theme === "light" ? "text-red-500" : "text-white"`}
      >
        <option value="javascript" className={`${theme === "light" ? "text-red-500" : "text-white"}`}>JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
      <Editor
        height="70vh"
        language={language}
        value={code}
        onChange={handleEditorChange}
      />
      <button onClick={handleButtonClick}>Get Output</button>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
