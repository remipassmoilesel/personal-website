import React, { Component, ReactNode } from "react";
import { Emojione } from "react-emoji-render";
import { LINKS } from "./links";
import "./Links.scss";

class Links extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <div className={"links"}>
        <div className={"label"}>
          A partir de cette page vous pouvez consulter:{" "}
        </div>
        {LINKS.map((link, i) => (
          <a href={link.target} target={"_blank"} key={i}>
            {link.label}
          </a>
        ))}
        <a onClick={this.scrollToPresentation}>
          <Emojione text="Ou plus d'informations par là ⬇️" />
        </a>
      </div>
    );
  }

  private scrollToPresentation = () => {
    const target = document.querySelector(".presentation");
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth" });
  };
}

export default Links;
