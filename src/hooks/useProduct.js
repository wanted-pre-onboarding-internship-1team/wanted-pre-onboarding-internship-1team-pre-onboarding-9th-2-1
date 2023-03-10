import { getLocalStorage } from '../util/getLocalStorage';
import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProduct } = action;

  switch (action.type) {
    case 'ADD':
      if (products.find(product => product.idx === newProduct.idx)) {
        return products;
      }
      const newProductList = [...products, { ...newProduct, count: 1 }];
      localStorage.setItem('products', JSON.stringify(newProductList));

      return newProductList;
    case 'DELETE':
      const deletedList = products.filter(
        item => item.idx !== targetProduct.idx
      );
      localStorage.setItem('products', JSON.stringify(deletedList));

      return deletedList;
    case 'INCREASE':
      const { maximumPurchases } = targetProduct;
      const increasedList = products.map(product => {
        if (
          product.idx === targetProduct.idx &&
          product.count < maximumPurchases
        ) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      localStorage.setItem('products', JSON.stringify(increasedList));

      return increasedList;
    case 'DECREASE':
      const decreaseProducts = products.map(product => {
        if (product.idx === targetProduct.idx) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      const decreasedList = decreaseProducts.filter(
        product => product.count > 0
      );
      localStorage.setItem('products', JSON.stringify(decreasedList));

      return decreasedList;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProduct = () => {
  const [response, dispatch] = useReducer(
    productReducer,
    getLocalStorage('products', [])
  );

  const addProduct = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteProduct = targetProduct => {
    dispatch({ type: 'DELETE', targetProduct });
  };

  const increaseCount = targetProduct => {
    dispatch({ type: 'INCREASE', targetProduct });
  };

  const decreaseCount = targetProduct => {
    dispatch({ type: 'DECREASE', targetProduct });
  };

  return [
    response,
    { addProduct, deleteProduct, increaseCount, decreaseCount },
  ];
};
