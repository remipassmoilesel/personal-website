import React, { Component, ReactNode, RefObject } from "react";
import Typed from "typed.js";
import { CLI_COMMANDS } from "./commands";
import _ from "lodash";
import * as uuid from "uuid";
import "./ShellCommands.scss";

interface State {
  typeZoneSelector: string;
  typed?: Typed;
}

class ShellCommands extends Component<{}, State> {
  private divRef?: RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      typeZoneSelector: `type-zone-${uuid.v4()}`,
    };
    this.divRef = React.createRef<HTMLDivElement>();
  }

  public render(): ReactNode {
    return (
      <div className={"shell-commands"}>
        <div>$&nbsp;</div>
        {/*This div is necessary for typing effect*/}
        <div>
          <span id={this.state.typeZoneSelector} />
        </div>
      </div>
    );
  }

  public componentDidMount() {
    const commands = _.shuffle(CLI_COMMANDS);
    const options = {
      strings: commands,
      typeSpeed: 30,
      showCursor: true,
      loop: true,
    };

    const typed = new Typed(`#${this.state.typeZoneSelector}`, options);
    this.setState((st) => ({ ...st, typed }));
  }

  public componentWillUnmount() {
    this.state.typed?.destroy();
  }
}

export default ShellCommands;
