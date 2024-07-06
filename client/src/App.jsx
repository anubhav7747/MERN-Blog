import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import Tutorials from "./pages/Tutorials";
import CodeEditor from "./pages/CodeEditor";
import ContactSection from "./pages/ContactSection";
import HtmlIntroduction from "./HTMLSection/Introduction";
import HtmlBasics from "./HTMLSection/Basics";
import HtmlElements from "./HTMLSection/Elements";
import HtmlAttributes from "./HTMLSection/Attributes";
import HtmlInterviewPreparation from "./HTMLSection/InterviewPreparation";
import CssIntroduction from "./CSSSection/Introduction";
import CssSelectors from "./CSSSection/Selectors";
import CssHowTo from "./CSSSection/HowTo";
import CssBorders from "./CSSSection/Borders";
import CssInterviewPreparation from "./CSSSection/InterviewPreparation";
// import ContactSectionRestAPI from "./pages/ContactSectionRestAPI";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/ContactSection" element={<ContactSection />} />
        {/* <Route path="/ContactSectionRestAPI" element={<ContactSectionRestAPI />} /> */}
        {/* html section */}
        <Route path="/html/introduction" element={<HtmlIntroduction />} />
        <Route path="/html/basics" element={<HtmlBasics />} />
        <Route path="/html/elements" element={<HtmlElements />} />
        <Route path="/html/attributes" element={<HtmlAttributes />} />
        <Route path="/html/interviewPreparation" element={<HtmlInterviewPreparation />} />
        {/* css section */}
        <Route path="/css/introduction" element={<CssIntroduction />} />
        <Route path="/css/borders" element={<CssBorders />} />
        <Route path="/css/selectors" element={<CssSelectors />} />
        <Route path="/css/howto" element={<CssHowTo />} />
        <Route path="/css/interviewPreparation" element={<CssInterviewPreparation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
