/* eslint-disable no-unused-vars */ 
import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import { idbPromise } from '../utils/helpers';

function Success() {

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      console.log("cart: ", cart);

      cart.forEach((item) => {
        idbPromise('cart', 'delete', item);
      });

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
}, []);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for being our Recipe Buddy!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;