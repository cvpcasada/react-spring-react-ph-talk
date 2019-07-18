import baseTheme from "@mdx-deck/themes/future";
import { linearGradient } from "polished";
import React from "react";
import { a, config, useSpring } from "react-spring";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colors = [
  ["#7F00FF", "#E100FF"],
  ["#8E2DE2", "#4A00E0"],
  ["#4568DC", "#B06AB3"],
  ["#6a3093", "#a044ff"],
  ["#4e54c8", "#8f94fb"],
  ["#9D50BB", "#6E48AA"],
  ["#DA22FF", "#9733EE"],
  ["#232526", "#414345"],
  ["#434343", "#000000"]
];

const Provider = ({ children, index, slides, ...rest }) => {
  const style = useSpring({
    ...linearGradient({
      colorStops: colors[getRandomInt(colors.length)],
      toDirection: "to right"
    }),
    config: config.slow
  });
  return <a.div style={style}>{children}</a.div>;
};

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "transparent"
  },
  Provider
};
