import React, { useEffect, useMemo } from "react";
import Typed, { type TypedOptions } from "typed.js";
import { CLI_COMMANDS } from "./commands";
import shuffle from "lodash/shuffle";
import { v4 as uuid } from "uuid";
import * as styles from "./ShellCommands.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
}

export function ShellCommands(props: Props) {
  const { className } = props;
  const typeZoneSelector = useMemo(() => `type-zone-${uuid()}`, []);

  useEffect(() => {
    const commands = shuffle(CLI_COMMANDS);
    const options: TypedOptions = {
      strings: commands,
      typeSpeed: 40,
      showCursor: true,
      backSpeed: 0,
      loop: true,
    };

    const typed = new Typed(`#${typeZoneSelector}`, options);
    return () => {
      typed.destroy();
    };
  }, [typeZoneSelector]);

  return (
    <div className={clsx(styles.container, className)}>
      <div>
        <span className={styles.username}>remi@</span>
        <span className={styles.host}>europe-west4-a</span>:{" "}
        <span className={styles.pwd}>/srv/</span>
      </div>

      <div className={styles.prompt}>
        <div>$&nbsp;</div>

        {/* This div is necessary for typing effect */}
        <div>
          <span id={typeZoneSelector} />
        </div>
      </div>
    </div>
  );
}
