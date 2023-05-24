import React from "react";
import { ContainerOrders, OrdersBlock } from "./styled";
import OrdersElement from "./Order";
import { Container } from "reactstrap";
import dataItems from "./orderData.json"

const Order = () => {
  return (
    <ContainerOrders>
      <Container>
        <OrdersBlock>
          {
            dataItems.map((Item) => {
              return <OrdersElement key={Item.id} {...Item} />
            })
          }
        </OrdersBlock>
      </Container>
    </ContainerOrders>
  );
};

export default Order;
