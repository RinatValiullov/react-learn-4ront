import React from "react";
import styled from "styled-components";
import { pageType } from "../pages";

const Container = styled.section`
  align-items: center;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 50px 0;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  margin: 0 0 0 0;
`;

type PageProps = {
  page: pageType;
  presetPage: string;
};

function Page({ page, presetPage }: PageProps) {
  return (
    <Container color={page.color}>
      <Title>Smooth Page Transitions</Title>
      <SubTitle>Just click the links above</SubTitle>
      <small>Preset: {presetPage}</small>
    </Container>
  );
}

export { Page };
