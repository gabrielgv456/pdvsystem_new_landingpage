import { ButtonPrimary, OutLineButton } from '../../components/buttons'
import * as S from './style'

export const Home = () => {

    return (
        <S.Container>
            <S.Header>
                <S.Logo src='https://sistema.safyra.com.br/static/media/logo.3185c30e5c1bf75390e1.png' />
                <section>
                    <OutLineButton>Entrar</OutLineButton>
                </section>
            </S.Header>
            <S.Main>
                <S.TitleH1>O sistema que <S.highLightText>descomplica</S.highLightText> a gestão do seu négocio</S.TitleH1>
                <S.SubtitleSection>Controle o estoque, acompanhe graficos, relatórios, realização de vendas, controle suas entregas, imprima comprovantes e orçamentos com a logo da sua empresa</S.SubtitleSection>
                <ButtonPrimary>Comece Agora</ButtonPrimary>
            </S.Main>
        </S.Container>
    )
}