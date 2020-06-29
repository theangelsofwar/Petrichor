import React, { useState, useEffect, useContext } from 'react';
import Client from 'shopify-buy';


const ShopContext = useContext();

const client = Client.buildClient({
  storefrontAccesstoken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myshopify.com",
});

const ShopProvider: React.FC<any> = ({ props }: any) => {
  const [wavelengths, setWavelengths] = useState([]);
  const [wavelength, setWavelength] = useState({});
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);


  if(localStorage.checkout) {
    fetchCheckout(localStorage.checkout);
  } else {
    createCheckout();
  }


  const createCheckout = async ()=> {
    const check = await client.checkout.create();
    localStorage.setItem("checkout", check.id);
    await setCheckout(check);
  };


  const fetchCheckout = async ({ checkoutId } : any) => {
    client.checkout
      .fetch(checkoutId)
      .then((check) => {
        setCheckout(check);
      })
      .catch((err) => console.log(err));
  };


  const addWavelengthToCheckout = async ({variantId, quantity}: any) => {
    const lineWavelengthsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const check = await client.checkout.addLineItems(
     checkout.id,
     lineWavelengthsToAdd
    );
    setCheckout(check);
    console.log(checkout);
    openCart();
  };


  const fetchAllWavelengths = async () => {
    const wavelengthsExtract = await client.product.fetchAll();
    setWavelengths(wavelengthsExtract);
  };

  const fetchWavelengthWithId = async ({ id} : any) => {
    const wavelengthExtract = await client.product.fetch(id);
    setWavelength(wavelengthExtract);
    console.log(JSON.stringify(wavelengthExtract));

    return wavelengthExtract;
  }


  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <ShopContext.Provider
      value={{
        wavelength: wavelength, 
        wavelengths: wavelengths, 
        checkout: checkout,
        isCartOpen: isCartOpen, 
        fetchAllProducts: fetchAllWavelengths, 
        fetchProductWithId: fetchWavelengthWithId,
        closeCart: closeCart,
        openCart: openCart,
        addItemToCheckout: addWavelengthToCheckout,
      }} 
    >
      {props.children}
    </ShopContext.Provider>
  );
}


const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;