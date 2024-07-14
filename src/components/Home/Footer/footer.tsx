import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as S from './style'

export const Footer = () => {
    return (
        <S.Container>
            <S.GoTo href="#">
                <S.Logo src='https://sistema.safyra.com.br/static/media/logo.3185c30e5c1bf75390e1.png' />
            </S.GoTo>
            <S.DivContent>
                <S.DivColumn>
                    <h3>MAPA DO SITE</h3>
                    <S.Divider />
                    <S.UlSections>
                        <S.liSections><S.GoTo href="#advantages">Vantagens</S.GoTo></S.liSections>
                        <S.liSections><S.GoTo href="#tools">Ferramentas</S.GoTo></S.liSections>
                        <S.liSections><S.GoTo href="#testimonials">Depoimentos</S.GoTo></S.liSections>
                        <S.liSections><S.GoTo href="#faq"> Perguntas Frequentes</S.GoTo></S.liSections>
                    </S.UlSections>
                </S.DivColumn>
                <S.DivColumn>
                    <h3>CONTATO</h3>
                    <S.Divider />
                    (35) 9 8820-2642<br />
                    Atendimento de 2ª a 6ª feira das 8h30 as 20h00<br />
                    atendimento@safyra.com.br<br /><br />

                    Reclamações ou sugestões enviar para: ouvidoria@safyra.com.br
                </S.DivColumn>
                <S.DivColumn>
                    <h3>REDES SOCIAIS</h3>
                    <S.Divider />
                    <S.Socials>
                        <S.GoTo href="#"><FaFacebook size={30} /></S.GoTo>
                        <S.GoTo href="https://instagram.com/safyra.com.br"><FaInstagram size={30} /></S.GoTo>
                        <S.GoTo href="#"><FaLinkedin size={30} /></S.GoTo>
                    </S.Socials>
                </S.DivColumn>
            </S.DivContent>
        </S.Container >
    )
}