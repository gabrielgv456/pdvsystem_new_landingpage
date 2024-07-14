import { ButtonPrimary } from '../../buttons'
import { TitleH1 } from '../../titles'
import * as S from './style'
import principalImage from '../../../assets/images/principal.png'
import { modalRegisterType } from '../../../pages/home/interfaces'

export const HighLight = ({ setIsModalRegisterOpen }: modalRegisterType) => {
    return (
        <>
            <S.SectionHighLight>
                <TitleH1>O sistema que <S.highLightText>descomplica</S.highLightText> a gestão do seu négocio proporcionando eficiência e praticidade em todas as áreas</TitleH1>
                <S.SubtitleSection>Controle o estoque, acompanhe graficos, relatórios, realize de vendas, gerencie suas entregas, imprima comprovantes e orçamentos com a personalidade da sua empresa</S.SubtitleSection>
                <ButtonPrimary onClick={() => setIsModalRegisterOpen(true)}>Comece Agora</ButtonPrimary>
            </S.SectionHighLight>
            <S.PrincipalImage src={principalImage} />
        </>
    )
}