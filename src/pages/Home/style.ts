import styled from 'styled-components'


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
export const ContainerForm = styled.div`

padding: 60px 20px;
border-radius: 8px;
background-color: #fff;
transition: all ease-in 0.2s;
&:hover{
    transition: all ease-out 0.2s;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
}
`
export const InputForm = styled.input`
margin-right: 20px;
padding: 8px;
`

export const ButtonSubmit = styled.a`
    color: #fff;
    padding: 8px 24px;
    border-radius: 6px;
    background-color: #3F6634;
    font-weight: 600;
    font-size: 20px;
    transition: all 0.25s ease-out;
    &:hover{
        transition: all 0.25s ease-in;
        background-color: #4FB477;
    }
`