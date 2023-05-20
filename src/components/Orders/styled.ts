import styled from "styled-components";

const ContainerOrders = styled.div`
    padding: 50px 0;
`;

const OrdersBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width: 994px) {
        justify-content: center;
    }
`

export {ContainerOrders, OrdersBlock}