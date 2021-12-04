import React from "react";

export const COLORS = {
  0: "#8DA47E",
  1: "#E9BBB5",
  2: "#E7CBA9",
  3: "#AAD9CD",
  4: "#E8D595",
};
export type DivDebugProps = {
  lvl?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const DivDebug = ({ lvl = 1, className }: DivDebugProps) => {
  let styles: React.CSSProperties = {
    backgroundColor: COLORS[lvl],
  };
  if (!className) {
    styles.width = "100%";
    styles.height = "inherit";
  }
  return <div className={className} style={styles}></div>;
};
// https://offeo.com/learn/20-pastel-spring-summer-color-palettes
// Indian Red #E9BBB5
// ‍Burly Wood #E7CBA9
// ‍Light Steel Blue #AAD9CD
// ‍Light Khaki #E8D595
// ‍Dark Sea Green #8DA47E
