import React, { useState, useEffect, useContext } from 'react';
import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Container, Icon } from 'atomize';
import { ShopContext } from '../context/shopContext';

const Cart = () => {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  if(checkout.lineItems) {
    return (
      <SideDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart} 
      >
        <Container 
          d="flex" 
          flexDir="column" 
          h="100%"
        >
         <Row 
          justify="space-between" 
          border={{
            b: '1px solid'
          }} 
          p="0.7rem" 
          borderColor="gray300"
        >
          <Text 
            tag="h1" 
            textColor="black500" 
            textSize="paragraph" 
            hoverTextColor="black700" 
            transition="0.3s"
          >
            Droplet
          </Text>
          <Anchor 
            onClick={() => closeCart()}
          >
              <Icon 
                name="Cross" 
                color="black500" 
              />
          </Anchor>
        </Row>
        <Row 
          flexGrow="2" 
          p="0.7rem" 
          overflow="auto" 
          flexWrap="nowrap" 
          flexDir="column"
        >
          {checkout.lineItems.length < 1 ? 
          <Row>
            <Col>
              <Text
                tag="h1" 
                textColor="black500" 
                textSize="paragraph" 
                hoverTextColor="black700" 
                transition="0.3s"
              >
                Droplet is Empty
              </Text>
            </Col>
          </Row>
          }
        </Row>
        </Container>
      </SideDrawer>
    )
  }
}

export default Cart;