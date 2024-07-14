import { URL_CUSTUMER_AREA } from '../../../settings/urls'
import { FilledButton, OutLineButton } from '../../buttons'
import * as S from './style'
import { modalRegisterType } from '../../../pages/home/interfaces'

export const Header = ({ setIsModalRegisterOpen }: modalRegisterType) => {

    return (
        <S.HeaderContainer>
            <S.Logo src='https://sistema.safyra.com.br/static/media/logo.3185c30e5c1bf75390e1.png' />
            <S.SectionButtons>
                <a href={URL_CUSTUMER_AREA}><OutLineButton>Entrar</OutLineButton></a>
                <FilledButton onClick={() => setIsModalRegisterOpen(true)}>Cadastrar</FilledButton>
            </S.SectionButtons>
        </S.HeaderContainer>
    )
}