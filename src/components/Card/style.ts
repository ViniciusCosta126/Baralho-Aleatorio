import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 20%;
  border: 1px solid black;
  padding: 16px;
  margin-right: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
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

export const PontuacaoContainer = styled.div`
  >p{
    width: 100%;
  }
  span{
    display: flex;
    justify-content: center;
    margin-top: 8px;
    border-radius: 50px;
    width: 100%;
    border: 1px solid black;
  }
`
