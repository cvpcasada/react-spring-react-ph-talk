import React from "react";
import { Racer, CustomConfigRace } from "./shared";
import { config } from "react-spring";
export const Mass = () => <Racer property="mass" values={[1, 5, 10]} />;

export const Tension = () => (
  <Racer property="tension" values={[170, 220, 320]} />
);

export const Friction = () => (
  <Racer property="friction" values={[26, 52, 78]} />
);

export const Velocity = () => (
  <Racer property="velocity" values={[0, 20, 30]} />
);

export const Configs = () =>
  Object.entries(config).map(([key, config], i) => (
    <CustomConfigRace key={key} label={`config.${key}`} config={config}>
      {["😏", "🙄", "🤔", "😲", "🤗", "🥴"][i]}
    </CustomConfigRace>
  ));

export default Velocity;
