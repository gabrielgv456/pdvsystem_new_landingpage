import { TitleH2 } from '../../../../pages/home/style'
import { FadeInComponent } from '../../../animations/animations'
import { FilledButton } from '../../../buttons'
import * as S from './style'

export const ThirdAdvantange = () => {
    return (
        <FadeInComponent type='left'>
            <S.Container>
                <S.DivInfo>
                    <S.TitleH4>ENTREGAS</S.TitleH4>
                    <S.TitleH3>Produtividade da equipe</S.TitleH3>
                    <S.PSubtitle>Gerencie suas entregas de pedidos de forma eficiente. Acompanhe o status das entregas e gere romaneios para seus entregadores. Com nosso módulo de gestão de entregas, você melhora a satisfação do cliente e maximiza a eficiência da sua equipe</S.PSubtitle>
                    <FilledButton width={300} height={60} fontSize={1.35}>Cadastrar Agora</FilledButton>
                </S.DivInfo>
                <img src="https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp" />
            </S.Container>
        </FadeInComponent>
    )
}