import React, { useEffect, useMemo } from "react";
import Typed from "typed.js";
import { CLI_COMMANDS } from "./commands";
import _ from "lodash";
import * as uuid from "uuid";
import * as styles from "./ShellCommands.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
}

export function ShellCommands(props: Props) {
  const { className } = props;
  const typeZoneSelector = useMemo(() => `type-zone-${uuid.v4()}`, []);

  useEffect(() => {
    const commands = _.shuffle(CLI_COMMANDS);
    const options = {
      strings: commands,
      typeSpeed: 30,
      showCursor: true,
      loop: true,
    };

    const typed = new Typed(`#${typeZoneSelector}`, options);
    return () => typed.destroy();
  }, []);

  return (
    <div className={clsx(styles.container, className)}>
      <div>
        <span className={styles.username}>remi@</span>
        <span className={styles.host}>production-17</span>:{" "}
        <span className={styles.pwd}>/srv/</span>
      </div>

      <div className={styles.prompt}>
        <div>$</div>

        {/*This div is necessary for typing effect*/}
        <div>
          <span id={typeZoneSelector} />
        </div>
      </div>
    </div>
  );
}
