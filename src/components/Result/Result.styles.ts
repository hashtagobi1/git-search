import styled from "styled-components";
import { Card, Container } from "react-bootstrap";
import CardBody from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export const ResultContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: center; */
  /* align-items:center; */
  /* align-items:center; */
  /* display:grid; */
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 10px;
  /* flex:2; */
  /* display:flex; */
`;

export const ResultCard = styled(Card)`
  margin: 15px 15px 15px 15px;
  padding: 1px 1px 1px 1px;

  display: flex;
  justify-content: center;
  /* align-items:center; */

  /* justify-content: space-between; */
`;

export const ResultBody = styled(CardBody)``;
export const ResultHeader = styled(CardHeader)`
  /* background:red; */
  display: flex;
  justify-content: center;
`;
export const ResultTitle = styled(CardTitle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SpreaderContainer = styled.div`
  /* display: flex; */
`;

export const LinkTag = styled.a``;

export const ModalPop = styled(Modal);
