import styled from "styled-components";
import { Card, Container } from "react-bootstrap";
import CardBody from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/Card";

export const ResultContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const ResultCard = styled(Card)`
  margin: 15px 15px 15px 15px;
  padding: 1px 1px 1px 1px;
  display: flex;
  justify-content: center;
`;

export const ResultBody = styled(CardBody)``;
export const ResultHeader = styled(CardHeader)`
  display: flex;
  justify-content: center;
`;

export const LinkTag = styled.a``;

export const NotShowing = styled.div`
  background: red;
  display: none;
  :after {
    content: "";
    display: none;
  }
`;
export const ProfileCard = styled(Container)`
  background: white;
  border: solid 1px black;
  border-radius: 15px;
  overflow: auto;
`;
