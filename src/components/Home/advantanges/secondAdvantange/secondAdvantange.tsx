import { FadeInComponent } from '../../../animations/animations'
import { FilledButton } from '../../../buttons'
import { PSubtitle, TitleH3, TitleH4 } from '../../../titles'
import * as S from './style'

export const SecondAdvantange = () => {
    return (
        <FadeInComponent type='right'>
            <S.Container>
                <img src="https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp" />
                <S.DivInfo>
                    <TitleH4>GRÁFICOS</TitleH4>
                    <TitleH3>Decisões Precisas </TitleH3>
                    <PSubtitle>Monitore a saúde do seu negócio em tempo real e tome decisões informadas com base em dados precisos e visualizações intuitivas. Acompanhe métricas essenciais e identifique tendências de maneira clara, permitindo uma gestão mais eficiente e estratégica </PSubtitle>
                    <FilledButton width={300} height={60} fontSize={1.35}>Cadastrar Agora</FilledButton>
                </S.DivInfo>
            </S.Container>
        </FadeInComponent>
    )
}