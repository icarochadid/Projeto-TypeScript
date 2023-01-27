import styled from "styled-components";
export const HomeContainner = styled.main`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 2rem;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    
}
`






export const StartCountDownButton = styled.button`
width: 100%;
cursor: pointer;
border: 0;
padding: 1rem;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
gap:0.5rem;
font-weight: bold;
background-color: ${props => props.theme["green-500"]};
color:  ${props => props.theme["gray-100"]};
 
&:not(:disabled):hover{
background-color:  ${props => props.theme["green-700"]};
transition-duration: 0.4s;
}
&:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
`
export const StopCountDownButton = styled.button `
    background-color: ${props => props.theme["red-700"]};
    width: 100%;
    cursor: pointer;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:0.5rem;
    font-weight: bold;
    color: ${props=> props.theme['gray-100']};

`