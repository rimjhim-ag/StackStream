import React from "react";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";


// import { tagsList } from "./tagList";

const Tags = ({ slideIn, handleSlideIn }) => {
    const tagsList = [
        {
          tagName: "javascript",
          tagDesc:
            "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
        },
        {
          tagName: "python",
          tagDesc:
            "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.",
        },
        {
          tagName: "c#",
          tagDesc:
            "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft",
        },
        {
          tagName: "java",
          tagDesc:
            "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. ",
        },
        {
          tagName: "php",
          tagDesc:
            "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development",
        },
        {
          tagName: "html",
          tagDesc:
            "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.",
        },
        {
          tagName: "android",
          tagDesc:
            "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT).",
        },
        {
          tagName: "css",
          tagDesc:
            "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations",
        },
        {
          tagName: "Reactjs",
          tagDesc:
            "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.",
        },
        {
          tagName: "node.js",
          tagDesc:
            "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. ",
        },
      ];


  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">

          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
