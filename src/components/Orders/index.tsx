import React from "react";
import { ContainerOrders, OrdersBlock } from "./styled";
import OrdersElement from "./Order";
import { Container } from "reactstrap";

const Order = () => {
  return (
    <ContainerOrders>
      <Container>
        <OrdersBlock>
          <OrdersElement />
          <OrdersElement />
          <OrdersElement />
          <OrdersElement />
          <OrdersElement />
          <OrdersElement />
        </OrdersBlock>
      </Container>
    </ContainerOrders>
  );
};

export default Order;
