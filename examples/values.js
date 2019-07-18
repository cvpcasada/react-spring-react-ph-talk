import React from "react";
import { a, config, useSpring } from "react-spring";
import { useFlipper } from "../helpers";

const Values = ({ from, to, interpolate = x => x }) => {
  const [val, flip] = useFlipper([from, to]);

  const props = useSpring({
    x: val,
    onRest: flip,
    config: config.molasses
  });

  return <a.h2>{props.x.interpolate(interpolate)}</a.h2>;
};

export default Values;
