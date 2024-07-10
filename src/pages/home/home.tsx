import { DetailsSpan } from '../../components/Home/DetailsSpan/detailsSpan'
import { Footer } from '../../components/Home/Footer/footer'
import { ButtonPrimary, FilledButton, OutLineButton } from '../../components/buttons'
import * as S from './style'

export const Home = () => {

    return (
        <S.Container>
            <S.Header>
                <S.Logo src='https://sistema.safyra.com.br/static/media/logo.3185c30e5c1bf75390e1.png' />
                <S.SectionButtons>
                    <OutLineButton>Entrar</OutLineButton>
                    <FilledButton>Cadastrar</FilledButton>
                </S.SectionButtons>
            </S.Header>
            <S.Main>
                <S.SectionHighLight>
                    <S.TitleH1>O sistema que <S.highLightText>descomplica</S.highLightText> a gestão do seu négocio proporcionando eficiência e praticidade em todas as áreas</S.TitleH1>
                    <S.SubtitleSection>Controle o estoque, acompanhe graficos, relatórios, realização de vendas, controle suas entregas, imprima comprovantes e orçamentos com a personalidade da sua empresa</S.SubtitleSection>
                    <ButtonPrimary>Comece Agora</ButtonPrimary>
                </S.SectionHighLight>
                <img
                    style={{ maxWidth: '100%', marginBottom: '-5px' }}
                    src='https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/brand-half-page-illustrations/LOCALIZED-HP-ILLUSTRATIONS/Homepage-revamp-2029-PT.png' />

                <DetailsSpan />

                <S.SectionAbout>
                    Pare de sofrer com sistemas antigos e lentos, tudo que você precisa está aqui
                </S.SectionAbout>

                <Footer/>

            </S.Main>
        </S.Container>
    )
}