import { TitleH2 } from '../../../../pages/home/style'
import { FadeInComponent } from '../../../animations/animations'
import { FilledButton } from '../../../buttons'
import * as S from './style'

export const FirstAdvantange = () => {
    return (
        <FadeInComponent type='left'>
            <S.Container>
                <S.DivInfo>
                    <S.TitleH4>PERSONALIZADO</S.TitleH4>
                    <S.TitleH3>Use sua marca</S.TitleH3>
                    <S.PSubtitle>Garanta mais profissionalismo para seu cliente personalizando seus comprovantes e orçamentos com a marca da sua empresa. Destaque-se no mercado com documentos que refletem a identidade visual do seu negócio</S.PSubtitle>
                    <FilledButton width={300} height={60} fontSize={1.35}>Cadastrar Agora</FilledButton>
                </S.DivInfo>
                <img src="https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp" />
            </S.Container>
        </FadeInComponent>
    )
}