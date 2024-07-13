import { Accordion, AccordionItem } from '../../Accordion/Accordion'
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
            "content": "Ele simplifica o acompanhamento de receitas e despesas, gera relatórios financeiros precisos e automatiza tarefas como faturamento e reconciliação bancária, ajudando a manter a contabilidade organizada e atualizada."
        },
        {
            "title": "O sistema de gestão online é seguro para armazenar dados sensíveis da minha empresa?",
            "content": "Sim, os sistemas modernos de gestão online utilizam tecnologias avançadas de segurança, como criptografia de dados e protocolos de segurança robustos, para proteger informações confidenciais contra acessos não autorizados."
        },
        {
            "title": "Como posso acessar meu sistema de gestão online?",
            "content": "Você pode acessar seu sistema de gestão online de qualquer lugar com conexão à internet, através de um navegador web seguro, ou até mesmo por aplicativos móveis dedicados, oferecendo flexibilidade e mobilidade para gerenciar seu negócio."
        },
        {
            "title": "É fácil migrar meus dados de sistemas de gestão antigos para um sistema online?",
            "content": "Sim, muitos sistemas de gestão online oferecem ferramentas e suporte para facilitar a migração de dados de sistemas antigos, garantindo que você possa começar a usar rapidamente seu novo sistema sem perder informações importantes."
        },
        {
            "title": "O sistema de gestão online pode ser personalizado para as necessidades específicas da minha empresa?",
            "content": "Sim, a maioria dos sistemas de gestão online oferece opções de personalização para se adaptar às necessidades únicas de diferentes tipos de negócios, permitindo configurar módulos, relatórios e processos conforme necessário."
        },
        {
            "title": "Quais são os principais recursos que devo procurar em um sistema de gestão online?",
            "content": "Recursos importantes incluem gestão de estoque, controle financeiro, emissão de notas fiscais, gestão de vendas e CRM (Customer Relationship Management), garantindo que todas as operações vitais do seu negócio sejam suportadas."
        },
        {
            "title": "Como posso saber se um sistema de gestão online é adequado para o tamanho da minha empresa?",
            "content": "Sistemas de gestão online são projetados para atender desde microempresas até pequenas e médias empresas (PMEs). Ao escolher um sistema, considere suas necessidades específicas e a capacidade do sistema de escalar conforme seu negócio cresce."
        },
        {
            "title": "Quais são as opções de suporte técnico disponíveis se eu tiver problemas com o sistema?",
            "content": "A maioria dos provedores de sistemas de gestão online oferece suporte técnico via chat, telefone ou e-mail. Alguns também têm bases de conhecimento online e tutoriais para ajudar você a resolver problemas comuns rapidamente."
        },
        {
            "title": "Posso integrar um sistema de gestão online com outras ferramentas que já utilizo na minha empresa?",
            "content": "Sim, muitos sistemas de gestão online oferecem integrações com outras ferramentas populares, como plataformas de e-commerce, sistemas de pagamento, serviços de e-mail marketing, entre outros, para aumentar a eficiência e a funcionalidade."
        },
        {
            "title": "Quanto custa um sistema de gestão online para pequenas empresas?",
            "content": "Os custos podem variar dependendo dos recursos incluídos e do número de usuários. Muitas vezes, os sistemas de gestão online oferecem planos mensais com preços escalonáveis, permitindo escolher o plano que melhor se adapta ao seu orçamento e às suas necessidades."
        },
        {
            "title": "Existe um período de teste gratuito disponível para eu experimentar o sistema antes de decidir?",
            "content": "Sim, muitos provedores oferecem períodos de teste gratuitos para que você possa explorar os recursos e a usabilidade do sistema antes de fazer uma compra, garantindo que seja a escolha certa para sua empresa."
        },
        {
            "title": "Como posso aprender a usar um novo sistema de gestão online?",
            "content": "A maioria dos sistemas de gestão online oferece tutoriais online, vídeos instrutivos e suporte técnico para ajudar novos usuários a aprender a usar o sistema de forma eficaz. Além disso, treinamentos adicionais podem estar disponíveis mediante solicitação."
        },
        {
            "title": "Um sistema de gestão online pode ajudar na gestão de equipe e colaboração interna?",
            "content": "Sim, muitos sistemas incluem recursos de gestão de equipe, como atribuição de tarefas, calendários compartilhados e comunicação integrada, facilitando a colaboração entre os membros da equipe e aumentando a produtividade."
        },
        {
            "title": "O sistema de gestão online oferece suporte para cumprimento de obrigações fiscais e regulatórias?",
            "content": "Sim, sistemas de gestão online frequentemente incluem atualizações automáticas para se manterem em conformidade com as regulamentações fiscais locais, facilitando o cumprimento das obrigações fiscais da sua empresa."
        },
        {
            "title": "Posso acessar relatórios e análises detalhadas sobre o desempenho do meu negócio?",
            "content": "Sim, sistemas de gestão online oferecem recursos avançados de relatórios e análises que permitem monitorar vendas, despesas, lucros, tendências de mercado e muito mais, fornecendo insights valiosos para tomadas de decisão estratégicas."
        },
        {
            "title": "O sistema de gestão online oferece backup automático dos meus dados?",
            "content": "Sim, a maioria dos sistemas de gestão online inclui backups automáticos regulares para proteger seus dados contra perdas, garantindo que suas informações estejam seguras e acessíveis em caso de falhas técnicas."
        },
        {
            "title": "Quais são os requisitos técnicos mínimos para usar um sistema de gestão online?",
            "content": "Geralmente, você só precisa de um computador ou dispositivo móvel com acesso à internet e um navegador web atualizado para usar um sistema de gestão online. Não são necessárias configurações especiais além disso."
        },
        {
            "title": "Como posso começar a implementar um sistema de gestão online na minha empresa?",
            "content": "Comece escolhendo um provedor de sistema de gestão online confiável, solicite um período de teste gratuito para avaliação, migre seus dados existentes conforme necessário e capacite sua equipe através de treinamentos e suporte oferecidos pelo provedor."
        }
    ]

    return (
        <S.Container>
            <TitleH2 textAlign='center'>Perguntas Frequentes</TitleH2>
            <S.SectionFaqs>
                <Accordion items={faqItens.slice(0, 10)} />
                <Accordion items={faqItens.slice(11, 21)} />
            </S.SectionFaqs>
        </S.Container>
    )
}