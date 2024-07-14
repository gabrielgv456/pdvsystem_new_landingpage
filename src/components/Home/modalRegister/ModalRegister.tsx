import { useState } from "react";
import Dialog from "../../modals/nativeDialog"
import * as S from './style'
import { TitleH4 } from "../../titles";
import { URL_CUSTUMER_AREA } from "../../../settings/urls";
import { useApi } from "../../../hooks/useApi";
import { ValidadeMail } from "./validateMail/ValidateMail";
import successImage from '../../../assets/images/success.jpg'
import { FadeInComponent } from "../../animations/animations";

export interface registerType {
    email: string
    name: string,
    masterkey: string,
    ownerName: string,
    phone: string,
    password: string,
    confirmPassword: string
}

export interface validateType {
    idUser: String,
    codValidate: String
}

export type stepType = 'register' | 'validateMail' | 'success'

type ModalRegisterProps = {
    isModalOpen: boolean,
    setIsModalOpen(value: boolean): void
}

export const ModalRegister = ({ isModalOpen, setIsModalOpen }: ModalRegisterProps) => {

    const [dataRegister, setDataRegister] = useState<registerType>({ email: '', masterkey: '', name: '', ownerName: '', password: '', phone: '', confirmPassword: '' })
    const { register } = useApi()
    const [dataValidate, setDataValidate] = useState<validateType>({ codValidate: '', idUser: '' })
    const [step, setStep] = useState<stepType>('register')

    function handleChangeRegister<T extends keyof registerType>(
        property: T, value: registerType[T]) {
        setDataRegister(prevState => {
            return {
                ...prevState,
                [property]: value
            }
        })
    }

    function handleChangeValidate<T extends keyof validateType>(
        property: T, value: validateType[T]) {
        setDataValidate(prevState => {
            return {
                ...prevState,
                [property]: value
            }
        })
    }

    const handleRegister = async () => {
        try {
            if (dataRegister.name.length <= 3) throw new Error('Digite o nome completo do estabelecimento!');
            if (!dataRegister.email.includes('@' || '.')) throw new Error('Digite um e-mail válido!');
            if (dataRegister.phone.length < 13) throw new Error('Digite um telefone celular válido!');
            if (dataRegister.password !== dataRegister.confirmPassword) throw new Error("Senha e confirmação de senha não coincidem!")
        } catch (error) {
            alert(`${(error as Error).message}`)
            return
        }
        try {
            const resultRegister = await register(dataRegister)
            if (resultRegister.Success) {
                handleChangeValidate('codValidate', resultRegister.codEmailValidate)
                handleChangeValidate('idUser', resultRegister.idUser)
                setStep('validateMail')
            } else {
                throw new Error(resultRegister.erro)
            }
        } catch (error) {
            alert(`Falha ao realizar cadastro! ${(error as Error).message}`);
        }
    }


    return (<>
        <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
            <S.DivForm>

                <S.Title>
                    {step === 'register' ?
                        'Vamos começar!' :
                        step === 'validateMail' ?
                            'Estamos quase lá!' :
                            step === 'success' ?
                                'Parabéns!' : ''}
                </S.Title>
                <S.SubTitle>
                    {step === 'register' ?
                        'Crie sua conta' :
                        step === 'validateMail' ?
                            'Valide seu e-mail' :
                            step === 'success' ?
                                'Realize Login' : ''}
                </S.SubTitle>

                <S.DivContentForm $step={step}>
                    <TitleH4 $color="--title_bold" $textAlign={step === 'success' ? 'center' : 'left'}>
                        {step === 'register' ?
                            'Registrar' :
                            step === 'validateMail' ?
                                'Validar' :
                                step === 'success' ?
                                    'Cadastro realizado com sucesso' : ''}
                    </TitleH4>
                    {step === 'register' ?
                        <>
                            <S.DivItemForm>
                                <S.LabelInputForm>Nome do estabelecimento </S.LabelInputForm>
                                <S.InputForm value={dataRegister.name} onChange={(e) => handleChangeRegister("name", e.target.value)} placeholder="Nome da empresa"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivItemForm>
                                <S.LabelInputForm>Seu nome </S.LabelInputForm>
                                <S.InputForm value={dataRegister.ownerName} onChange={(e) => handleChangeRegister('ownerName', e.target.value)} placeholder="Nome do responsável"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivItemForm>
                                <S.LabelInputForm>E-mail </S.LabelInputForm>
                                <S.InputForm value={dataRegister.email} onChange={(e) => handleChangeRegister('email', e.target.value)} placeholder="E-mail válido"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivItemForm>
                                <S.LabelInputForm>Telefone Celular </S.LabelInputForm>
                                <S.InputForm value={dataRegister.phone} onChange={(e) => handleChangeRegister('phone', e.target.value.replace(/[^0-9]/g, '').length === 2 ?
                                    e.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})/g, "($1)")
                                    :
                                    e.target.value.replace(/[^0-9]/g, '').length === 3 ?
                                        e.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{1})(\d{*})/g, "($1)$2")
                                        :
                                        e.target.value.replace(/[^0-9]/g, '').length === 11 ?
                                            e.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{5})(\d{4})/g, "($1)$2-$3")
                                            :
                                            e.target.value.replace(/[^0-9]/g, '').length > 11 ?
                                                dataRegister.phone
                                                :
                                                e.target.value.replace(/[^0-9]/g, ''))} placeholder="Contato"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivItemForm>
                                <S.LabelInputForm>Crie uma senha </S.LabelInputForm>
                                <S.InputForm type='password' value={dataRegister.password} onChange={(e) => handleChangeRegister('password', e.target.value)} placeholder="Mínimo 8 digitos"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivItemForm>
                                <S.LabelInputForm>Cofirme a senha </S.LabelInputForm>
                                <S.InputForm type='password' value={dataRegister.confirmPassword} onChange={(e) => handleChangeRegister('confirmPassword', e.target.value)} placeholder="Digite a mesma senha"></S.InputForm>
                            </S.DivItemForm>
                            <S.DivButtonForm>
                                <S.ButtonForm onClick={handleRegister}>Realizar Cadastro</S.ButtonForm>
                            </S.DivButtonForm>
                            <S.SpanAlreadyRegistered>Já tem uma conta? <a href={URL_CUSTUMER_AREA} style={{ textDecoration: 'none' }}><S.highLightText> Realizar Login</S.highLightText></a></S.SpanAlreadyRegistered>
                        </> :
                        step === 'validateMail' ?
                            <ValidadeMail {...dataValidate} email={dataRegister.email} setStep={setStep} />
                            :
                            step === 'success' ?
                                <S.DivSuccess>
                                    <FadeInComponent type="bottom">
                                        <S.SuccessImage src={successImage} />
                                    </FadeInComponent>
                                    <a href={URL_CUSTUMER_AREA}><S.ButtonForm>Acessar Sistema</S.ButtonForm></a>

                                </S.DivSuccess>

                                : ''}
                </S.DivContentForm>

            </S.DivForm>
        </Dialog >
    </>)
}