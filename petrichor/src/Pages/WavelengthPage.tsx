import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Button, Row, Col, Container } from 'atomize';
import Loading from '../Components/Loading';

interface IProps{
  props: any
}
const WavelengthPage:React.FC<IProps> = (({ props }: IProps) => {
  let { id } = useParams();
  const { fetchWavelengthWithId, addWavelengthToCheckout, wavelength } = useContext(ShopContext);

  useEffect(() => {
    fetchWavelengthWithId(id);

    return () => {

    };
  }, [fetchWavelengthWithId, id])

  return (
    <Container>
      <Row 
        m={{
          b: "2rem"
        }}
        p="2rem"
      >
        <Col>
          <Div 
            bgImg={wavelength.images[0].src}
            shadow="3" 
            bgSize="cover" 
            w="100%" 
            bgPos="center center" 
            h="40rem" 
          />
        </Col>
        <Col>
          <Text 
            tag="h1" 
            textColor="black500" 
            textWeight="200" 
            m={{
              y: '2rem'
            }}>
          {wavelength.title}
          </Text>
          <Text 
            tag="h3" 
            m={{
              y: '2rem'
            }}
            textWeight="200"
          >
            ${wavelength.variants[0].price}
          </Text>
          <Text 
            tag="p" 
            textSize="paragraph" 
            textColor="gray900" 
            textWeight="200" 
          >
            {wavelength.description}
          </Text>
          <Button 
            rounded="0"
            shadow="3" 
            bg="black500" 
            m={{
              y: '2rem'
            }} 
            onClick={() => {
              addWavelengthToCheckout(wavelength.variants[0].id, 1)}
            }
          >
              Add This Same Wavelength 
          </Button>
        </Col>
      </Row>
    </Container>
  )
});

export default WavelengthPage;