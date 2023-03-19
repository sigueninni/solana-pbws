
import { Card, CardHeader, CardBody, CardFooter, Stack, Image,Heading,Text ,Button, SimpleGrid , Divider, ButtonGroup} from '@chakra-ui/react'
import { useRouter } from 'next/router';

/* export default function Shops() {
    return <div>Shops</div>
  } */


  const Shops = () => {


    const goPayment = () => {
      router.push('../payment')
    };

    const router = useRouter();
    return  (
      <SimpleGrid m={10} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1619283249351-d12c18f8870b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Ferme de Didier</Heading>
      <Text>
      This Farm is located in Montpellier, family Farm with Bio Label since 2009.
        they uses organic and sustainable farming practices to produce crops and raise livestock. 
        These farms avoid the use of synthetic pesticides and fertilizers and prioritize the health
         and well-being of the animals and environment.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='green'  onClick={goPayment}>
        Send GRN 
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Boucherie du centre</Heading>
      <Text>

      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Button variant='solid' colorScheme='green'>
        Send GRN 
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1518735869015-566a18eae4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Magasin solidaire</Heading>
      <Text>
        This Farm is located in Montpellier, family Farm with Bio Label since 2009.
        they uses organic and sustainable farming practices to produce crops and raise livestock. 
        These farms avoid the use of synthetic pesticides and fertilizers and prioritize the health
         and well-being of the animals and environment.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Send GRN 
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </SimpleGrid>
    );
  };
  
  export default Shops;
  