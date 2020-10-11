import { ProductType } from '../components/Product';
import { CART_ACTIONS } from '../types';
import axios from 'axios';
import { Dispatch } from 'react';
import { CartActionTypes } from '../reducers/cartReducers';
import store from '../store';

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch<CartActionTypes>,
  getState: typeof store.getState
) => {
  const { data } = await axios.get<ProductType>(`/api/products/${id}`);

  dispatch({
    type: CART_ACTIONS.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id: string) => (
  dispatch: Dispatch<CartActionTypes>,
  getState: typeof store.getState
) => {
  dispatch({
    type: CART_ACTIONS.CART_REMOVE_ITEM,
    payload: id
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
