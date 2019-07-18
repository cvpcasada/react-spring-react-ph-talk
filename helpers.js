import { useState } from "react";

export function useFlipper(pair = [true, false]) {
  const [toggle, setToggle] = useState(pair[0]);
  const flip = () => setToggle(x => (x === pair[0] ? pair[1] : pair[0]));
  return [toggle, flip];
}
