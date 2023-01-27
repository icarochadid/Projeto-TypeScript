import styled from 'styled-components'
export const HeaderContainner = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;

nav{
    display: flex;
    gap: 0.8rem;
    
    a{  width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 3px solid transparent;
        border-bottom:  3px solid transparent;

        color: ${props => props.theme['gray-100']}
    }
    a:hover{
        border-bottom: 3px solid ${props=>props.theme['green-300']};
        cursor: pointer;
        transition-duration: 0.4s;
    }
    a.active{
        color: ${props=> props.theme['green-700']};
        box-shadow:none;
    }
}
`