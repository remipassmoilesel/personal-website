import React, { Component, ReactNode } from "react";
import ShellCommands from "./shell-commands/ShellCommands";
import Links from "./links/Links";
import { Twemoji } from "react-emoji-render";
import "./Landing.scss";

class Landing extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <div className={"landing"}>
        <h1>Salut !</h1>
        <Twemoji
          className={"tag-line"}
          text="Je m'appelle Rémi, je suis développeur 👷 💻 "
        />
        <ShellCommands />
        <div className={"filler"} />
        <Links />
      </div>
    );
  }
}

export default Landing;
