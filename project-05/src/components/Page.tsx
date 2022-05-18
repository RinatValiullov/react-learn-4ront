import React from "react";
import styled from "styled-components";
import { pageType } from "../pages";

const Container = styled.section`
  align-items: center;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
`;

type PageProps = {
  page: pageType;
};

function Page({ page }: PageProps) {
  return (
    <Container color={page.color}>
      <Title>Smooth Page Transitions</Title>
      <SubTitle>Just click the links above</SubTitle>
    </Container>
  );
}

export { Page };
