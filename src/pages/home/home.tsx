import { DetailsSpan } from '../../components/Home/DetailsSpan/detailsSpan'
import { Footer } from '../../components/Home/Footer/footer'
import { Header } from '../../components/Home/Header/Header'
import { HighLight } from '../../components/Home/HighLight/HighLight'
import { Advantages } from '../../components/Home/advantanges/advantanges'
import { Faq } from '../../components/Home/faq/faq'
import { Testimonials } from '../../components/Home/testimonials/testimonials'
import { TitleH2 } from '../../components/titles'
import * as S from './style'

export const Home = () => {

    return (
        <S.Container>
            <Header />
            <S.Main>
                <HighLight />
                <DetailsSpan />

                <S.SectionAdvantages>
                    <div style={{ width: '65%' }}>
                        <TitleH2 textAlign='center'>Pare de perder tempo com sistemas antigos e lentos, tudo que você precisa está aqui</TitleH2>
                    </div>
                    <Advantages />
                </S.SectionAdvantages>
                <Testimonials />
                <Faq />
                <Footer />

            </S.Main>
        </S.Container>
    )
}