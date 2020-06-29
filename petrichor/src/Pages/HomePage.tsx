import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Row, Col, Container } from 'atomize';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';

interface IProps {
  props: any
}
const HomePage: React.FC<IProps> = ({ props }: IProps) => {
  //itemize frequency/wavelength
  const {fetchAllWavelengths, wavelengths} = useContext(ShopContext);

  useEffect(() => {
    fetchAllWavelengths();
    return () => {

    }
  }, [fetchAllWavelengths]);

  if(!products) {
    return 
    (<Loading />);
  };

  return (
    <Container>
      <Row>
        {wavelengths.map(wave => (
          <Col key={wave.id} size="3">
            <Link to={`/product/${wave.id}`} style={{
              textDecoration: 'none'
            }}>
              <Div p="2rem">
                <Div 
                  h="20rem"
                  bgImg={wave.images[0].src}
                  bgSize="cover"
                  bgPos="center center"
                  shadow="3" 
                  hoverShadow="4" 
                  transition="0.3s" 
                  m={{ 
                    b: "1.5rem" 
                  }} 
                >
                </Div>
                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500"> {wave.title} </Text> 
                <Text tag="h2" textWeight="300"  textSize="body" textDecor="none" textColor="gray500"> ${wave.variants[0].price} </Text>
              </Div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;