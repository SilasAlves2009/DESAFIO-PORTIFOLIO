import React from 'react'
import { Link } from "react-router-dom";
import * as S from './style';

export default function About() {
    return (
        <S.About>
            <S.WrapperAbout>
                <S.BoxAboutParagraph>
                    <S.ParagraphAbout>
                        Um pouco sobre minha jornada:
                    </S.ParagraphAbout>
                    <S.ParagraphAbout>
                        Olá, sou Silas, um estudante de programação front-end com habilidades em HTML5, CSS3, JavaScript e ReactJS. Ao longo da minha jornada, desenvolvi páginas web semânticas, layouts responsivos e experiências interativas. Estou constantemente atualizando meus conhecimentos para acompanhar as tendências mais recentes. Estou animado para contribuir em projetos desafiadores e criar experiências digitais inovadoras.
                    </S.ParagraphAbout>
                </S.BoxAboutParagraph>
                <S.ParagraphAbout>
                    <Link to="/">Voltar para a Home!</Link>
                </S.ParagraphAbout>
            </S.WrapperAbout>
        </S.About>
    )
}
