import useTravelProducts from '../../hooks/useTravelProducts';
import { Grid } from '@chakra-ui/react';

export default function TravelProductList() {
  const data = useTravelProducts();

  return <Grid>1</Grid>;
}