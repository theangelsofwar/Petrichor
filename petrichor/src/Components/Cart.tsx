import React, { useState, useEffect, useContext } from 'react';
import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Container, Icon } from 'atomize';
import { ShopContext } from '../context/shopContext';



import Head from 'next/head'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import CircularProgerss from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
// import Button  from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/core/DeleteIcon';


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
          : 
          <>
            {checkout.lineItems && checkout.lineItems.map(wave => (
              <Row 
                key={wave.id} 
                p={{ 
                  t: "5px" 
                }}>
                  <Col>
                    <Div 
                      bgImg={wave.variant.image.src} 
                      bgSize="cover" 
                      bgPos="center" 
                      h="5rem" 
                      w="4rem"
                    />
                  </Col>
                  <Col>
                    <Text>{wave.title}</Text>
                    <Text>{wave.variant.title}</Text>
                    <Text>{wave.quantity}</Text>
                  </Col>
                  <Col>
                    <Text>{wave.variant.price}</Text>
                  </Col>
              </Row>
            ))}
            </>
          }
        </Row>
        <Row 
          border={{ 
            t: '1px solid'
          }} 
          p="0.7rem" 
          borderColor="gray300" 
        >
          <Anchor 
            w="100%" 
            href={checkout.webUrl} 
            target=")blank" 
            rel="noopener noreferrer"
          >
            <Button 
              w="100%" 
              rounded="0" 
              bg="black500" 
              shadow="2" 
              hoverShadow="3" 
              m={{
                t: '1rem'
              }}
            >
              Checkout
            </Button>
          </Anchor>
        </Row>
        </Container>
      </SideDrawer>
    )
  }

  return null;
}

export default Cart;