/* A styled component. */
import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 20%;
  background-color: #fff;
  padding: 16px;
  margin-right: 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all ease-out 0.2s;
  &:hover{
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  }
  > img {
    display: block;
    width: 100%;
    max-height: 130px;
    min-height: 129px;
    margin-bottom: 16px;
  }
  h3 {
    text-transform: capitalize;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

interface BarProps{
  pontos:number
}

export const PontuacaoContainer = styled.div<BarProps>`
  >p{
    width: 100%;
  }
  span{
    display: flex;
    justify-content: center;
    margin-top: 8px;
    border-radius: 50px;
    width: 100%;
    background: ${(props)=> `linear-gradient(90deg, #c93d3d ${props.pontos * 10}%, #b87f7f ${props.pontos * 10}%)` };
    color: #fff;
    font-weight: 700;
    padding: 4px;
  }
`
