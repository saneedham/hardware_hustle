import classnames from "classnames";

import styles from "@/styles/Icon.module.css";

function Icon({ id, prefix, suffix, className, inline, row }) {
  const bootstrapIconClassName = {
    money: "bi-piggy-bank",
    opportunity: "bi-arrow-up-right-circle",

    A: "bi-nut",
    B: "bi-box-seam",
    C: "bi-gear",
    D: "bi-display",

    AB: "bi-speaker",
    ABC: "bi-boombox",
    ABCD: "bi-motherboard",
  }[id];

  return (
    <span
      className={classnames(className, styles.icon, {
        [styles.inline]: inline,
        [styles.row]: row,
      })}
      title={id}
    >
      {prefix}
      <i
        className={classnames(
          "bi",
          bootstrapIconClassName,
          styles.bootstrapIcon
        )}
      />
      {suffix}
    </span>
  );
}

export const Money = () => <Icon id="money" inline />;
export const Opportunity = () => <Icon id="opportunity" inline />;
export const A = () => <Icon id="A" inline />;
export const B = () => <Icon id="B" inline />;
export const C = () => <Icon id="C" inline />;
export const D = () => <Icon id="D" inline />;
export const AB = () => <Icon id="AB" inline />;
export const ABC = () => <Icon id="ABC" inline />;
export const ABCD = () => <Icon id="ABCD" inline />;

export default Icon;
