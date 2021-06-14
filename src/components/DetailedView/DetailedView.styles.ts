import styled from "styled-components";
import { Container } from "react-bootstrap";

export const DetailedView = styled.div`
  background: red;
`;

export const MarkdownWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  margin: 10px 10px 10px 10px;
  background: #eee;
`;

export const LinkTag = styled.a``;

export const ProfileCard = styled(Container)`
  background: white;
  border: solid 1px black;
  border-radius: 15px;
  overflow: auto;
`;
export const Gap = styled.div`
  height: 100%;
  margin: 1rem 1rem 1rem 1rem;
  border-left: 1px solid #6c757d;
`;

export const MainSection = styled(Container)`
  width: 100vw;
  max-width: 100%;
  background-color: hsl(184, 25%, 98%);
  margin: 10px 10px 10px 10px;
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
`;
