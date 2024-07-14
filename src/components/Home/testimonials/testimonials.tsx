import { FadeInComponent } from '../../animations/animations'
import { LightButton } from '../../buttons'
import { PSubtitle, TitleH2 } from '../../titles'
import * as S from './style'
import Eliana_Alves_Rocha from '../../../assets/images/Eliana_Alves_Rocha.jpg'
import Luiz_Henrique_Rodrigues from '../../../assets/images/Luiz_Henrique_Rodrigues.jpg'
import Otavio_Arantes from '../../../assets/images/Otavio_Arantes.jpg'
import { modalRegisterType } from '../../../pages/home/interfaces'

type testimonialsDataType = {
    testimonial: string
    srcImage: string
    nameClient: string
    functionClient: string
}


const Testimonial = ({ functionClient, nameClient, srcImage, testimonial }: testimonialsDataType) => {
    return (
        <FadeInComponent type='right'>
            <S.TestimonialContainer>
                <div>
                    <S.QuoteIcon size={30} />
                    <PSubtitle>{testimonial}</PSubtitle>
                </div>
                <S.DivCustomer>
                    <S.ImgCustomer src={srcImage} />
                    <S.SpanCustumer>
                        <b>{nameClient}</b>
                        {functionClient}
                    </S.SpanCustumer>
                </S.DivCustomer>
            </S.TestimonialContainer>
        </FadeInComponent>
    )
}



export const Testimonials = ({ setIsModalRegisterOpen }: modalRegisterType) => {

    const testimonialsData: testimonialsDataType[] = [
        {
            nameClient: 'Otávio Arantes',
            functionClient: 'Gerente Operacional',
            srcImage: Otavio_Arantes,
            testimonial: 'Desde que usamos o Safyra, nossa gestão ficou muito mais eficiente e prática. Recomendo a todos os pequenos empresários!'
        },
        {
            nameClient: 'Eliana Alves Rocha',
            functionClient: 'CEO',
            srcImage: Eliana_Alves_Rocha,
            testimonial: 'O Safyra nos proporciona relatórios detalhados que ajudam a tomar decisões rápidas. Suporte incrível!'
        },
        {
            nameClient: 'Luiz Henrique Rodrigues',
            functionClient: 'Sócio Proprietário',
            srcImage: Luiz_Henrique_Rodrigues,
            testimonial: 'O sistema facilitou nossa gestão de vendas e clientes. Agora acompanhamos tudo em tempo real!'
        }
    ]

    return (
        <S.Container id='testimonials'>
            <S.DivLeft>
                <TitleH2 >Veja como o Safyra ajuda pequenas empresas a crescer</TitleH2>
                <LightButton onClick={() => setIsModalRegisterOpen(true)}>Quero fazer parte</LightButton>
            </S.DivLeft>
            <S.DivRight>
                {testimonialsData.map((item, index) => (
                    <Testimonial {...item} key={index} />
                ))}
            </S.DivRight>
        </S.Container>
    )
}