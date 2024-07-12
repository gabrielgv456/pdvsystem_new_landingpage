import { DegradeSeparator } from '../../separators'
import * as S from './style'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { FadeInComponent } from '../../animations/animations';


export const DetailsSpan = () => {
    return (

        <S.Container>
            <FadeInComponent type='bottom'>
                <S.Content>
                    <S.DivSpan>
                        <MdWorkspacePremium size={30} />
                        <S.Title>Facilite a Gestão do Seu Negócio com Nosso PDV Online</S.Title>
                        Simplifique as operações diárias e melhore a eficiência do seu estabelecimento.
                    </S.DivSpan>
                    <DegradeSeparator />
                    <S.DivSpan>
                        <FaHandHoldingUsd size={30} />
                        <S.Title>Controle Total de Vendas e Estoque em um Só Lugar</S.Title>
                        Gerencie vendas, estoque e clientes com uma solução integrada e intuitiva.
                    </S.DivSpan>
                    <DegradeSeparator />
                    <S.DivSpan>
                        <BsGraphUpArrow size={30} />
                        <S.Title>Aumente Suas Vendas com Nosso Sistema PDV Online</S.Title>
                        Ofereça uma experiência de compra rápida e eficiente para seus clientes.
                    </S.DivSpan>
                    <DegradeSeparator />
                    <S.DivSpan>
                        <IoStorefrontOutline size={30} />
                        <S.Title>Soluções de Ponto de Venda Perfeitas para Pequenas Empresas</S.Title>
                        Transforme a forma como você gerencia seu negócio com nosso sistema PDV fácil de usar.
                    </S.DivSpan>
                </S.Content>
            </FadeInComponent>
        </S.Container>
    )
}