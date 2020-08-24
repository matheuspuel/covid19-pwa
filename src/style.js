import styled from "styled-components";
import Background from 'assets/images/covid.jpg';


export const DivBackgroundStyled = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

export const DivContentStyled = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 1024px;
  width: 100%;
`