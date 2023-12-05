import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    background-color: #d2d2d2;
    min-height: 100vh;
`

export const MenuHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    min-height: 10vh;

    a {
        margin: 1rem;
        text-decoration: none;
        font-size: 1.5rem;
        color: #d2d2d2;
    }

`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
`

export const BoxPerfil = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    img {
        width: 20rem;
    }
`

export const BoxParagraph = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Paragraph = styled.div`
    color: #1e1e1e;
    font-size: 2rem;
`
export const Media = styled.div`
    img {
        width: 30px;
        margin: 1rem;
    }
`