import React, { useState } from "react";
import styled from "styled-components";

import Header from "./header";
import Rules from "./Rules";
import InitialGame from "./InitialGame";
import Throw from "./Throw";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle at top,
    var(--background),
    var(--background-darker)
  );
  padding: 3rem 3rem 5.5rem;
`;

const Game = function Game() {
  const [selected, setSelected] = useState([]);

  const handleSelection = (shape) => {
    setSelected(shape);
  };

  return (
    <Container>
      <Header />
      {selected.length === 0 ? (
        <InitialGame handleSelection={handleSelection} />
      ) : (
        <Throw selected={selected} />
      )}

      <Rules />
    </Container>
  );
};

export default Game;
