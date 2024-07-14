import { FcIdea } from 'react-icons/fc'
import * as S from './style'
import { useState } from 'react';
import { useApi } from '../../../../hooks/useApi';
import { stepType, validateType } from '../ModalRegister';

type mail = { email: string, setStep(value: stepType): void }

type ValidateMailProps = validateType & mail

export const ValidadeMail = (props: ValidateMailProps) => {

    const { validateMail } = useApi();
    const [inputCode, setInputCode] = useState('')

    const VerifyCode = async () => {
        try {
            if (inputCode === '') { throw new Error('Digite corretamente o código de verificação!') }
            if (inputCode !== props.codValidate) { throw new Error('Código de verificação incorreto') }
        } catch (error) {
            alert(`${(error as Error).message}`)
            return
        }

        try {
            const dataValidateMail = await validateMail(Number(props.idUser))
            if (!dataValidateMail.Success) throw new Error(dataValidateMail?.erro ?? '')
            props.setStep('success')
        }
        catch (error: any) {
            alert(`Falha ao atualizar o e-mail como válido: ${(error as Error).message}`)
        }
    }

    return (
        <S.Container>
            <span>
                Digite o código de verificação enviado para o e-mail <S.highLightText>{props.email}</S.highLightText> :
            </span>
            <S.LabelTip>
                <FcIdea size={15} />
                Verique também sua caixa de Spam.
            </S.LabelTip>
            <S.LabelMail>
                <S.mailIcon size="28" />
                <S.Input placeholder='******' value={inputCode} onChange={(e) => setInputCode(e.target.value)} maxLength={6} />
            </S.LabelMail>
            <S.ButtonConfirm onClick={() => VerifyCode()}>Confirmar</S.ButtonConfirm>
        </S.Container>
    )
}