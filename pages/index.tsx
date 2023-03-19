import { Heading, HStack , VStack, Image, Box, Highlight ,Center , Flex} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import unit from './assets/unit.png';

const Wallets = dynamic(() => import("./components/Wallets"), { ssr: false });

export default function IndexPage() {
  return (
    <VStack gap={8} mt={16} color='white'>
      <Wallets />
      <Heading>UNI-T community</Heading>
      <Box boxSize='sm'>
        <Image src={unit.src} alt="logo" />
      </Box>
    
        <Heading >
          <Highlight
          
            query='investment'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.100' }}
          >
            Adopt a sustainable consumption to open new investment opportunities!
            </Highlight>
            </Heading>
    </VStack>
  );
}
