import { ButtonPrimary } from '../../buttons'
import { TitleH1 } from '../../titles'
import * as S from './style'

export const HighLight = () => {
    return (
        <>
            <S.SectionHighLight>
                <TitleH1>O sistema que <S.highLightText>descomplica</S.highLightText> a gestão do seu négocio proporcionando eficiência e praticidade em todas as áreas</TitleH1>
                <S.SubtitleSection>Controle o estoque, acompanhe graficos, relatórios, realização de vendas, controle suas entregas, imprima comprovantes e orçamentos com a personalidade da sua empresa</S.SubtitleSection>
                <ButtonPrimary>Comece Agora</ButtonPrimary>
            </S.SectionHighLight>
            <img
                style={{ maxWidth: '100%', marginBottom: '-5px' }}
                src='https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/brand-half-page-illustrations/LOCALIZED-HP-ILLUSTRATIONS/Homepage-revamp-2029-PT.png' />
        </>
    )
}