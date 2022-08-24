import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  border-radius: 20px;
  padding: 0 24px;
  margin: 20px auto 0;
`;
export const Title = styled.h1`
  text-align: right;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 3rem;
  letter-spacing: -3px;
`;
export const CardsContainer = styled.div`
  width: 100%;
`;

interface ButtonProps {
  teste: boolean;
}
export const ButtonsContainer = styled.div<ButtonProps>`
@media(max-width:768px){
  width: 100%;
}
  width: 25%;
  margin-left: auto;
  margin-top: 16px;
  button {
    width: 100%;
    margin-bottom: 8px;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .pull-card {
    background-color: ${(props) => (props.teste ? "#9EB3C2" : "#3AB795")};
    cursor: ${(props) => (props.teste ? "initial" : "pointer")};
    transition: all 0.2s ease-in;
    &:hover {
      transition: all 0.2s ease-out;
      background-color: ${(props) => (props.teste ? "9EB3C2" : "#4E937A")};
    }
  }
  .shuffle-cards {
    background-color: #ad343e;
    transition: all 0.2s ease-in;
    &:hover {
      transition: all 0.2s ease-out;
      background-color: #c7434e;
    }
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 24px;
`;
