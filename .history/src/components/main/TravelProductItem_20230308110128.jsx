import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function TravelProductItem(data) {
  const { idx, name, spaceCategory, price, mainImage } = data;
  const { selectItem, handleAddProduct } = useTravelProductContext();

  const onClick = e => {
    e.preventDefault();
    e.stopPropagation();
    handleAddProduct(data);
  };

  return (
    <Box
      w='100%'
      h='100%'
      p='0.8rem'
      borderRadius='0.8rem'
      boxShadow='xl'
      cursor='pointer'
      onClick={() => selectItem(data)}>
      <Image borderRadius='0.8rem' height='60%' width='100%' src={mainImage} />
      <Stack mt='3' spacing='3'>
        <Heading
          size='md'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'>{`${idx}. ${name}`}</Heading>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>{price}</Text>
          <Text width='50%'>{spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg' onClick={onClick}>
          예약하기
        </Button>
      </Stack>
    </Box>
  );
}
