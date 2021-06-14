import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner"

export const SearchWrapper = styled.div`

`;

export const DarkParagraph = styled.p`
  font-weight: bold;
  text-align: center;
  background-color: hsl(0, 0, 0.93);
`;

export const LightParagraph = styled.p`
  font-weight: 300;
  text-align: center;
  background-color: hsl(0, 0, 0.93);
`;

export const ResultDetails = styled.div`
  display: block;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
export const SpinnerLoad = styled(Spinner)`
margin:10px 10px 10px 10px;
/* width:10vw; */
`