
import {
    Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Card, Input, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Button, SimpleGrid, Divider, ButtonGroup
} from '@chakra-ui/react'


/* export default function Shops() {
    return <div>Shops</div>
  } */


const Payment = () => {

    return (
        <Flex m={50} gap={5} alignItems="center" justifyContent="center" direction={'column'}>
            <Heading>Payment Page</Heading>

            <FormControl>
                <FormLabel>Shop Payment address address</FormLabel>
                <Input type='text' value={"0x812451b63AE13E1d91c33f88aac9791E193f9916"} />
                <FormHelperText>Adress of the shop</FormHelperText>

                <FormLabel>Amount of GRN to send</FormLabel>
                <Input type='number' />

               <Flex>
                <Button mt={15} size='md' colorScheme='teal' variant='outline' >Transfer GRN</Button>
                </Flex>
            </FormControl>

        </Flex>

    );
};

export default Payment;
