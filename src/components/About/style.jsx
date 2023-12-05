import styled from 'styled-components';

export const About = styled.div`
    display: flex;
    justify-content: center;
    background-color: #1e1e1e;
    color: #d2d2d2;
    min-height: 100vh;
`

export const WrapperAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    color: #d2d2d2;
`

export const BoxAboutParagraph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ParagraphAbout = styled.div`
    font-size: 1.3rem;
    width: 50%;
    text-align: justify;
    margin: 1rem;

    a {
        color: #d2d2d2;
    }
`
