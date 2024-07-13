import { FadeInComponent } from '../../animations/animations'
import { LightButton } from '../../buttons'
import { PSubtitle, TitleH2 } from '../../titles'
import * as S from './style'

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



export const Testimonials = () => {

    const testimonialsData: testimonialsDataType[] = [
        {
            nameClient: 'Edson',
            functionClient: 'Dono',
            srcImage: 'https://www-cms.pipedriveassets.com/testimonial-images/eden-brownlee.jpg',
            testimonial: 'Desde que usamos o Safyra, nossa gestão ficou muito mais eficiente e prática. Recomendo a todos os pequenos empresários!'
        },
        {
            nameClient: 'Alexa Lenon',
            functionClient: 'CEO da empresa top',
            srcImage: 'https://www-cms.pipedriveassets.com/testimonial-images/Jana-Hodbodova.jpg',
            testimonial: 'O Safyra nos proporciona relatórios detalhados que ajudam a tomar decisões rápidas. Suporte incrível!'
        },
        {
            nameClient: 'Oliver Tomas',
            functionClient: 'Socio Proprietario da Ednis',
            srcImage: 'https://www-cms.pipedriveassets.com/testimonial-images/Oliver-Lee.jpg',
            testimonial: 'O sistema facilitou nossa gestão de vendas e clientes. Agora acompanhamos tudo em tempo real!'
        }
    ]

    return (
        <S.Container>
            <S.DivLeft>
                <TitleH2 textAlign='left'>Veja como o Safyra ajuda pequenas empresas a crescer</TitleH2>
                <LightButton>Quero fazer parte</LightButton>
            </S.DivLeft>
            <S.DivRight>
                {testimonialsData.map(item => (
                    <Testimonial {...item} />
                ))}
            </S.DivRight>
        </S.Container>
    )
}