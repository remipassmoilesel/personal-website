import React, { Component, ReactNode } from "react";
import { readFileSync } from "fs";
import ReactMarkdown from "react-markdown";
import "./Presentation.scss";

// Parcel will include these files at build time
const mdRoot = `src/content`;
const mdContent = [
  readFileSync(`${mdRoot}/my-work.md`, "utf-8"),
  readFileSync(`${mdRoot}/beliefs.md`, "utf-8"),
  readFileSync(`${mdRoot}/professional-experiences.md`, "utf-8"),
  readFileSync(`${mdRoot}/education.md`, "utf-8"),
];

class Presentation extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <div className={"presentation"}>
        {mdContent.map((ctn, i) => (
          <ReactMarkdown key={i}>{ctn}</ReactMarkdown>
        ))}
      </div>
    );
  }
}

export default Presentation;
