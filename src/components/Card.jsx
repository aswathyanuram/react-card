import React from "react";
import styled from "styled-components";

export default function Card({ card }) {
  const { image, name, content } = card;
  return (
    <Container>
      <Image image={image}> </Image>
      <Name>{name}</Name>
      <Content>{content}</Content>
    </Container>
  );
}

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40px;
  width: 40px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1rem;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  padding: 0.5rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const Container = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0.5rem;
`;
