import { TitleH2 } from '../../../../pages/home/style'
import { FadeInComponent } from '../../../animations/animations'
import { FilledButton } from '../../../buttons'
import * as S from './style'

export const SecondAdvantange = () => {
    return (
        <FadeInComponent type='right'>
            <S.Container>
                <img src="https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp" />
                <S.DivInfo>
                    <S.TitleH4>GRÁFICOS</S.TitleH4>
                    <S.TitleH3>Decisões Precisas </S.TitleH3>
                    <S.PSubtitle>Monitore a saúde do seu negócio em tempo real e tome decisões informadas com base em dados precisos e visualizações intuitivas. Acompanhe métricas essenciais e identifique tendências de maneira clara, permitindo uma gestão mais eficiente e estratégica </S.PSubtitle>
                    <FilledButton width={300} height={60} fontSize={1.35}>Cadastrar Agora</FilledButton>
                </S.DivInfo>
            </S.Container>
        </FadeInComponent>
    )
}