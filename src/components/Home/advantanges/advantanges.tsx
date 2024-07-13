
import { FadeInComponent, FadeInType } from '../../animations/animations'
import { FilledButton } from '../../buttons'
import { PSubtitle, TitleH3, TitleH4 } from '../../titles'
import * as S from './style'

type AdvantagesType = {
    title: string,
    subTitle: string,
    description: string,
    button: string,
    imgSrc: string,
    fadeInType: FadeInType
}

export const Advantages = () => {

    const advantagesData: AdvantagesType[] = [{
        title: 'PERSONALIZADO',
        subTitle: 'Use sua marca',
        description: 'Garanta mais profissionalismo para seu cliente personalizando seus comprovantes e orçamentos com a marca da sua empresa. Destaque-se no mercado com documentos que refletem a identidade visual do seu negócio',
        imgSrc: 'https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp',
        button: 'Cadastrar Agora',
        fadeInType: 'left'
    },
    {
        title: 'GRÁFICOS',
        subTitle: 'Decisões Precisas',
        description: 'Monitore a saúde do seu negócio em tempo real e tome decisões informadas com base em dados precisos e visualizações intuitivas. Acompanhe métricas essenciais e identifique tendências de maneira clara, permitindo uma gestão mais eficiente e estratégica',
        imgSrc: 'https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp',
        button: 'Cadastrar Agora',
        fadeInType: 'right'
    },
    {
        title: 'ENTREGAS',
        subTitle: 'Produtividade da equipe',
        description: 'Gerencie suas entregas de pedidos de forma eficiente. Acompanhe o status das entregas e gere romaneios para seus entregadores. Com nosso módulo de gestão de entregas, você melhora a satisfação do cliente e maximiza a eficiência da sua equipe',
        imgSrc: 'https://notificacoesinteligentes.com/wp-content/uploads/2024/04/reuniao-notificacoes-inteligentes_23_11zon.webp',
        button: 'Cadastrar Agora',
        fadeInType: 'left'
    }
]

    return (
        <>
            {advantagesData.map(item => (
                <FadeInComponent type={item.fadeInType}>
                    <S.Container>
                        <S.DivInfo>
                            <TitleH4>{item.title}</TitleH4>
                            <TitleH3>{item.subTitle}</TitleH3>
                            <PSubtitle>{item.description}</PSubtitle>
                            <S.FilledButtonAdvantange >{item.button}</S.FilledButtonAdvantange>
                        </S.DivInfo>
                        <S.Image src={item.imgSrc} />
                    </S.Container>
                </FadeInComponent>
            ))}

        </>
    )
}