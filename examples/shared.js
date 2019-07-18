import React from "react";
import styled from "styled-components";
import { useSpring, a, config } from "react-spring";
import { useFlipper } from "../helpers";
import { transparentize, rem } from "polished";

const Wrap = styled.div`
  display: flex;
  height: ${rem(80)};
`;

const Property = styled.div`
  width: ${rem(300)};
  padding: 2rem;
  font-size: 2rem;
`;

const Lane = styled.div`
  width: 500px;
  border-left: 1px solid;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-right: 1px solid;
`;

const Track = styled.div`
  width: 100%;
  height: 100%;
  background: ${transparentize(0.4, "darkgrey")};
  position: relative;

  & > * {
    position: absolute;
    font-size: 4rem;
    left: 0;
  }
`;

const Race = ({ label = "label", children }) => {
  return (
    <Wrap>
      <Property>{label}</Property>
      <Lane>
        <Track>{children}</Track>
      </Lane>
    </Wrap>
  );
};

export const AnimateRace = ({
  property = "mass",
  value = 1,
  children = "🥵"
}) => {
  const cfg = { ...config.slow, [property]: value };
  const [val, flip] = useFlipper([0, 500]);
  const props = useSpring({
    config: cfg,
    transform: `translateX(${val}px)`,
    onRest: flip
  });

  return (
    <Race label={`${property}: ${value}`}>
      <a.span style={props}>{children}</a.span>
    </Race>
  );
};

export const CustomConfigRace = ({ label, config, children }) => {
  const [val, flip] = useFlipper([0, 500]);
  const props = useSpring({
    config,
    transform: `translateX(${val}px)`,
    onRest: flip
  });

  return (
    <Race label={`${label}`}>
      <a.span style={props}>{children}</a.span>
    </Race>
  );
};

export const Racer = ({ property = "mass", values = [1, 5, 10] }) => {
  const racers = ["🥵", "🤯", "😤"];
  return values.map((val, i) => (
    <AnimateRace key={val} property={property} value={val}>
      {racers[i]}
    </AnimateRace>
  ));
};
