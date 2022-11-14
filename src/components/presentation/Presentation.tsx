import React, { Component, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import "./Presentation.scss";
import content1 from "bundle-text:../../content/fr/my-work.md";
import content2 from "bundle-text:../../content/fr/beliefs.md";
import content3 from "bundle-text:../../content/fr/professional-experiences.md";
import content4 from "bundle-text:../../content/fr/education.md";

class Presentation extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <div className={"presentation"}>
        {[content1, content2, content3, content4].map((ctn, i) => (
          <ReactMarkdown key={i}>{ctn}</ReactMarkdown>
        ))}
      </div>
    );
  }
}

export default Presentation;
