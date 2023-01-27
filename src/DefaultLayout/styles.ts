import styled from 'styled-components'
export const LayoutContainner = styled.div`
    max-width: 74rem;
    min-height: calc(100vh - 10rem);
    margin: 4rem auto;
    padding: 2.5rem;
    background-color: ${props => props.theme['gray-800']};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`