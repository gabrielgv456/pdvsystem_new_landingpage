import { Accordion, AccordionItem } from '../../Accordion/Accordion'
import { FadeInComponent } from '../../animations/animations'
import { TitleH2 } from '../../titles'
import * as S from './style'

export const Faq = () => {
    const faqItens: AccordionItem[] = [
        {
            "title": "O que é um sistema de gestão de pequenas empresas online?",
            "content": "Um sistema de gestão de pequenas empresas online é uma plataforma digital que ajuda pequenas empresas a gerenciar suas operações diárias de forma eficiente, incluindo finanças, estoque, vendas e muito mais, tudo centralizado em um único sistema acessível pela internet."
        },
        {
            "title": "Quais são os benefícios de usar um sistema de gestão online para minha pequena empresa?",
            "content": "Os benefícios incluem melhor organização financeira, automação de processos repetitivos, acesso fácil a dados em tempo real, e maior eficiência operacional, o que pode levar a economias de tempo e dinheiro significativas."
        },
        {
            "title": "Como um sistema de gestão online pode ajudar na contabilidade da minha empresa?",
            "content": "Com a gestão de movimentações de caixa você estará no controle de tudo que entra e sai da sua empresa, ajudando a manter a contabilidade organizada e atualizada."
        },
        {
            "title": "O sistema de gestão online é seguro para armazenar dados sensíveis da minha empresa?",
            "content": "Sim, o sistema utiliza tecnologias avançadas de segurança, como criptografia de dados e protocolos de segurança robustos, para proteger informações confidenciais contra acessos não autorizados."
        },
        {
            "title": "Como posso acessar meu sistema de gestão online?",
            "content": "Você pode acessar seu sistema de gestão online de qualquer lugar com conexão à internet, através de um navegador web seguro, ou até mesmo por aplicativos móveis dedicados, oferecendo flexibilidade e mobilidade para gerenciar seu negócio."
        },
        {
            "title": "É fácil migrar meus dados de sistemas de gestão antigos para um sistema online?",
            "content": "Sim, contamos com uma equipe que lhe ajudará nesse processo, garantindo que você possa começar a usar rapidamente seu novo sistema sem perder informações importantes."
        },
        {
            "title": "O sistema de gestão online pode ser personalizado para minha empresa?",
            "content": "Sim, é possível deixar o sistema com a identidade visual da sua empresa transmitindo uma maior credibilidade."
        },
        {
            "title": "Como posso saber se um sistema de gestão online é adequado para o tamanho da minha empresa?",
            "content": "O Safyra é recomandado para pequenas e micro empresas que desejam ter um maior controle e otimização de tempo."
        },
        {
            "title": "Quais são as opções de suporte técnico disponíveis se eu tiver problemas com o sistema?",
            "content": "Oferecemos suporte técnico via whatsapp, telefone ou e-mail"
        },
        {
            "title": "Quanto custa um sistema de gestão online para pequenas empresas?",
            "content": "Atualmente temos uma oportunidade do plano gratuito, onde você não paga nada para usufruir de todos beneficios"
        },
        {
            "title": "Existe um período de teste gratuito disponível para eu experimentar o sistema antes de decidir?",
            "content": "Sim, é possível utilizar o sistema sem gastar nenhum real"
        },
        {
            "title": "Como posso aprender a usar um novo sistema de gestão online?",
            "content": "O sistema é altamente intuitivo, fornece modulos simples e completos. Caso tenha alguma dúvida o nosso atendimento fica disponível para esclarecer e realizar treinamentos"
        },
        {
            "title": "Um sistema de gestão online pode ajudar na gestão de equipe e colaboração interna?",
            "content": "Sim, o sistema inclui opção de registrar seus vendedores e comissionamentos, controlar entregas dos seus motoristas, facilitando a colaboração entre os membros da equipe e aumentando a produtividade."
        },
        {
            "title": "O sistema de gestão online oferece suporte para cumprimento de obrigações fiscais e regulatórias?",
            "content": "Em breve, o plano que contempla a parte fiscal está em desenvolvimento"
        },
        {
            "title": "Posso acessar relatórios e análises detalhadas sobre o desempenho do meu negócio?",
            "content": "Sim, temos recursos avançados de relatórios e análises que permitem monitorar vendas, despesas, lucros, tendências de mercado e muito mais, fornecendo insights valiosos para tomadas de decisão estratégicas."
        },
        {
            "title": "O sistema de gestão online oferece backup automático dos meus dados?",
            "content": "Sim, incluimos backups automáticos regulares para proteger seus dados contra perdas, garantindo que suas informações estejam seguras e acessíveis em caso de falhas técnicas."
        },
        {
            "title": "Quais são os requisitos técnicos mínimos para usar um sistema de gestão online?",
            "content": "Você só precisa de um computador ou dispositivo móvel com acesso à internet e um navegador web atualizado para usar um sistema de gestão online. Não são necessárias configurações especiais além disso."
        },
        {
            "title": "Como posso começar a implementar um sistema de gestão online na minha empresa?",
            "content": "Basta se cadastrar agora mesmo, e começar a aproveitar."
        }
    ]

    return (
        <FadeInComponent type='bottom'>
            <S.Container id='faq'>
                <TitleH2 style={{textAlign:'center'}}>Perguntas Frequentes</TitleH2>
                <S.SectionFaqs>
                    <Accordion items={faqItens.slice(0, 9)} />
                    <Accordion items={faqItens.slice(9, 21)} />
                </S.SectionFaqs>
            </S.Container>
        </FadeInComponent>
    )
}