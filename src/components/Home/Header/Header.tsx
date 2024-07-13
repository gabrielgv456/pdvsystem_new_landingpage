import { FilledButton, OutLineButton } from '../../buttons'
import * as S from './style'

export const Header = () => {
    return (
        <S.HeaderContainer>
            <S.Logo src='https://sistema.safyra.com.br/static/media/logo.3185c30e5c1bf75390e1.png' />
            <S.SectionButtons>
                <OutLineButton>Entrar</OutLineButton>
                <FilledButton>Cadastrar</FilledButton>
            </S.SectionButtons>
        </S.HeaderContainer>
    )
}