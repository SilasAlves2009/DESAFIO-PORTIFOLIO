import React from 'react';
import { Link } from "react-router-dom";
import * as S from './style';

export default function Home() {
    return (
        <S.Container>
            <S.MenuHeader>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
            </S.MenuHeader>
            <S.Wrapper>
                <S.BoxPerfil>
                    <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt="perfil" />
                </S.BoxPerfil>
                <S.BoxParagraph>
                    <S.Paragraph>
                        Olá! Eu sou o Silas
                    </S.Paragraph>
                    <S.Media>
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="media" />
                        </a>
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="media" />
                        </a>
                        <a href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="media" />
                        </a>
                    </S.Media>
                </S.BoxParagraph>
            </S.Wrapper>
        </S.Container>
    )
}
