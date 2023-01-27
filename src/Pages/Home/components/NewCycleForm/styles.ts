import styled from "styled-components";
export const FormContainner= styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color: ${props => props.theme["gray-100"]};
font-size: 1.125rem;
font-weight: bold;
flex-wrap: wrap;
`
const BaseInput = styled.input`
background: transparent;
border: 0;
border-bottom: 2px solid ${props => props.theme["gray-500"]};
height: 2.5rem;
font-weight: bold;
font-size: 1.125rem;
padding: 0 0.5rem;
color: ${props => props.theme["gray-100"]} ;
margin: 0 1rem;

&:disabled{
    opacity: 0.6;
    cursor: not-allowed;
}

&:not(:disabled):hover{
    border-bottom: 2px solid ${props => props.theme["green-500"]};
    transition-duration:0.4s;
}
&:focus {
    box-shadow: none;
}

`
export const TaskInput = styled(BaseInput)`
flex: 1;
width: 17rem;


&::-webkit-calendar-picker-indicator{
    display:none !important;
}
`
export const MinutesAmmountInput= styled(BaseInput)`
width: 4rem;
align-items: center;
`