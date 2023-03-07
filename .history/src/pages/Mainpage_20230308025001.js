import DetailProductItem from '../components/main/DetailProductItem';
import TravelProductList from '../components/main/TravelProductList';
import TravelProductContextProvider from '../context/TravelProductContext';
import { Container, Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Mainpage() {
  return (
    <TravelProductContextProvider>
      <Container
        width='100vw'
        height='100vh'
        overflow='auto'
        mx='0'
        px='0'
        position='relative'
        maxWidth='100vw'>
        <Flex justify='center' width='100%' height='100%' p='1rem'>
          <Suspense fallback={<div>로딩중</div>}>
            <TravelProductList />
          </Suspense>
        </Flex>
      </Container>
      <DetailProductItem />
    </TravelProductContextProvider>
  );
}