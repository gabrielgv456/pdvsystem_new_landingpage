import { useState } from 'react'
import { DetailsSpan } from '../../components/Home/DetailsSpan/detailsSpan'
import { Footer } from '../../components/Home/Footer/footer'
import { Header } from '../../components/Home/Header/Header'
import { HighLight } from '../../components/Home/HighLight/HighLight'
import { Advantages } from '../../components/Home/advantanges/advantanges'
import { Faq } from '../../components/Home/faq/faq'
import { ModalRegister } from '../../components/Home/modalRegister/ModalRegister'
import { Testimonials } from '../../components/Home/testimonials/testimonials'
import { TitleH2 } from '../../components/titles'
import * as S from './style'

export const Home = () => {

    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false)

    return (
        <S.Container>
            <ModalRegister isModalOpen={isModalRegisterOpen} setIsModalOpen={setIsModalRegisterOpen} />
            <Header setIsModalRegisterOpen={setIsModalRegisterOpen} />
            <S.Main>
                <HighLight setIsModalRegisterOpen={setIsModalRegisterOpen} />
                <DetailsSpan />

                <S.SectionAdvantages id='tools'>
                    <div style={{ width: '55%' }}>
                        <TitleH2 $textalign='center'>Ganhe <S.highLightText>eficiência</S.highLightText> e <S.highLightText>produtividade</S.highLightText> agora mesmo! Aumente seu lucro tendo muito mais controle sobre sua empresa </TitleH2>
                    </div>
                    <Advantages setIsModalRegisterOpen={setIsModalRegisterOpen} />
                </S.SectionAdvantages>
                <Testimonials setIsModalRegisterOpen={setIsModalRegisterOpen} />
                <Faq />
                <Footer />

            </S.Main>
        </S.Container>
    )
}