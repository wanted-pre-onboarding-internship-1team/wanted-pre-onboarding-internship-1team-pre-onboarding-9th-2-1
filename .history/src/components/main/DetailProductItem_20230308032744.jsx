import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default function DetailProductItem() {
  const { selectedItem, isOpen, onClose } = useTravelProductContext();
  console.log(selectedItem);
  if (!selectedItem) return;
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <Image
        borderRadius='0.8rem'
        height='500px'
        width='100%'
        src={selectedItem.mainImage}
      />
      <Stack mt='3' spacing='3'>
        <Heading
          size='md'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'>{`${selectedItem.idx}. ${selectedItem.name}`}</Heading>
        <Container height='100%' p='0'>
          {selectedItem.description}
        </Container>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>{selectedItem.price}</Text>
          <Text width='50%'>{selectedItem.spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          예약하기
        </Button>
      </Stack>
    </Modal>
  );
}
{
  /* <Image
        borderRadius='0.8rem'
        height='500px'
        width='100%'
        src={selectedItem.mainImage}
      />
      <Stack mt='3' spacing='3'>
        <Heading
          size='md'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'>{`${selectedItem.idx}. ${selectedItem.name}`}</Heading>
        <Container height='100%' p='0'>
          {selectedItem.description}
        </Container>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>{selectedItem.price}</Text>
          <Text width='50%'>{selectedItem.spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          예약하기
        </Button>
      </Stack> */
}
