import React, { useState } from "react";
import { a, useSpring } from "react-spring";
import styled from "styled-components";
import { rem, transparentize } from "polished";

const Bar = styled(a.div)`
  height: ${rem(25)};
  background-color: ${transparentize(0.2, "red")};
`;

const Buttons = styled(a.div)`
  & > button {
    padding: 1rem;
    margin: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default () => {
  const [offset, setOffset] = useState(200);
  const props = useSpring({ width: offset });

  return (
    <div>
      <Bar style={props} />

      <Buttons>
        <button onClick={() => setOffset(state => (!state ? state - 200 : 0))}>
          - 200px
        </button>
        <button onClick={() => setOffset(state => state + 200)}>+ 200px</button>
      </Buttons>
    </div>
  );
};
