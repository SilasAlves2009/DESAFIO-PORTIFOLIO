import React from 'react'
import { Link } from "react-router-dom";
import * as S from './style';

export default function Projects() {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Paragraph>
                    Alguns dos meus projetos:
                </S.Paragraph>
                <S.Box>
                    <S.BoxProject>
                        <p>projeto1</p>
                        <a href="https://dsmzhh.csb.app">Projeto1</a>

                    </S.BoxProject>

                    <S.BoxProject>
                        <p>Projeto2</p>
                        <a href="https://brylou.csb.app">Projeto2</a>
                    </S.BoxProject>

                    <S.BoxProject>
                        <p>Projeto3</p>
                        <a href="https://github.com/SilasAlves2009/Paginafantastika">Projeto3</a>
                    </S.BoxProject>

                    <S.BoxProject>
                        <p>Projeto4</p>
                        <a href="">Projeto4</a>
                    </S.BoxProject>

                    <S.BoxProject>
                        <p>Projeto5</p>
                        <a href="">Projeto5</a>
                    </S.BoxProject>

                    <S.BoxProject>
                        <p>Projeto6</p>
                        <a href="">Projeto6</a>
                    </S.BoxProject>

                </S.Box>
                <S.Paragraph>
                    <Link to="/">Voltar para a Home!</Link>
                </S.Paragraph>
            </S.Wrapper>
        </S.Container>
    )
}
