
import { FadeInComponent, FadeInType } from '../../animations/animations'
import graphsImage from '../../../assets/images/graphs.png'
import brand_identity from '../../../assets/images/brand_identity.png'
import delivery from '../../../assets/images/delivery.png'
import { PSubtitle, TitleH3, TitleH4 } from '../../titles'
import * as S from './style'
import { modalRegisterType } from '../../../pages/home/interfaces'

type AdvantagesType = {
    title: string,
    subTitle: string,
    description: string,
    button: string,
    imgSrc: string,
    fadeInType: FadeInType
}

export const Advantages = ({ setIsModalRegisterOpen }: modalRegisterType) => {

    const advantagesData: AdvantagesType[] = [{
        title: 'PERSONALIZADO',
        subTitle: 'Use sua marca',
        description: 'Garanta mais profissionalismo para seu cliente personalizando seus comprovantes e orçamentos com a marca da sua empresa. Destaque-se no mercado com documentos que refletem a identidade visual do seu negócio',
        imgSrc: brand_identity,
        button: 'Cadastrar Agora',
        fadeInType: 'left'
    },
    {
        title: 'GRÁFICOS',
        subTitle: 'Decisões Precisas',
        description: 'Monitore a saúde do seu negócio em tempo real e tome decisões informadas com base em dados precisos e visualizações intuitivas. Acompanhe métricas essenciais e identifique tendências de maneira clara, permitindo uma gestão mais eficiente e estratégica',
        imgSrc: graphsImage,
        button: 'Cadastrar Agora',
        fadeInType: 'right'
    },
    {
        title: 'ENTREGAS',
        subTitle: 'Produtividade da equipe',
        description: 'Gerencie suas entregas de pedidos de forma eficiente. Acompanhe o status das entregas e gere romaneios para seus entregadores. Com nosso módulo de gestão de entregas, você melhora a satisfação do cliente e maximiza a eficiência da sua equipe',
        imgSrc: delivery,
        button: 'Cadastrar Agora',
        fadeInType: 'left'
    }
    ]

    return (
        <>
            {advantagesData.map((item, index) => (
                <FadeInComponent type={item.fadeInType} key={index}>
                    <S.Container>
                        {item.fadeInType === 'right' && <S.Image src={item.imgSrc} />}
                        <S.DivInfo>
                            <TitleH4 $color='--highLight'>{item.title}</TitleH4>
                            <TitleH3>{item.subTitle}</TitleH3>
                            <PSubtitle>{item.description}</PSubtitle>
                            <S.FilledButtonAdvantange onClick={() => setIsModalRegisterOpen(true)}>{item.button}</S.FilledButtonAdvantange>
                        </S.DivInfo>
                        {item.fadeInType === 'left' && <S.Image src={item.imgSrc} />}
                    </S.Container>
                </FadeInComponent>
            ))}

        </>
    )
}