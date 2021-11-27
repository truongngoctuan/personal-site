import React from "react";

export type DivDebugProps = {
  lvl?: string;
};
export const COLORS = {
  1: "#E9BBB5",
  2: "#E7CBA9",
  3: "#AAD9CD",
  4: "#E8D595",
  5: "#8DA47E",
};
export const DivDebug = ({ lvl = 1 }) => {
  return (
    <div
      style={{ width: "100%", height: "inherit", backgroundColor: COLORS[lvl] }}
    ></div>
  );
};
// https://offeo.com/learn/20-pastel-spring-summer-color-palettes
// Indian Red #E9BBB5
// ‍Burly Wood #E7CBA9
// ‍Light Steel Blue #AAD9CD
// ‍Light Khaki #E8D595
// ‍Dark Sea Green #8DA47E
