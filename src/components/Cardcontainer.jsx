import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cardcontainer({ cards }) {
  return (
    <Container>
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
