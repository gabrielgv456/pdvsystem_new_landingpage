import { TitleH2 } from '../../../../pages/home/style'
import { FadeInComponent } from '../../../animations/animations'
import { FilledButton } from '../../../buttons'
import { PSubtitle, TitleH3, TitleH4 } from '../../../titles'
import * as S from './style'

export const FirstAdvantange = () => {
    return (
        <FadeInComponent type='left'>
            <S.Container>
                <S.DivInfo>
                    <TitleH4>PERSONALIZADO</TitleH4>
                    <TitleH3>Use sua marca</TitleH3>
                    <PSubtitle>Garanta mais profissionalismo para seu cliente personalizando seus comprovantes e orçamentos com a marca da sua empresa. Destaque-se no mercado com documentos que refletem a identidade visual do seu negócio</PSubtitle>
                    <FilledButton width={300} height={60} fontSize={1.35}>Cadastrar Agora</FilledButton>
                </S.DivInfo>
                <img src="https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp" />
            </S.Container>
        </FadeInComponent>
    )
}