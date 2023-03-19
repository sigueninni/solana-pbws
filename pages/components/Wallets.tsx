import {
  VStack, Button, Image, Text, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Badge,
  HStack,Flex, Spacer 
} from "@chakra-ui/react";
import { CloseIcon, EmailIcon } from "@chakra-ui/icons";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from 'next/router';

const Wallets = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();
  const router = useRouter();

  const goShops = () => {
    router.push('../shops')
  };

  

  return !publicKey ? (
    <VStack gap={4}>
      {wallets.filter((wallet) => wallet.readyState === "Installed").length >
        0 ? (
        wallets
          .filter((wallet) => wallet.readyState === "Installed")
          .map((wallet) => (
            <Button
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
              variant='outline'
              size="sm"
              fontSize="md"
              leftIcon={
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  h={6}
                  w={6}
                />
              }
            >
              {wallet.adapter.name}
            </Button>
          ))
      ) : (
        <Text>No wallet found. Please download a supported Solana wallet</Text>
      )}
    </VStack>
  ) : (
    <VStack >
      <HStack pl={10} pr={10}  >
      <Badge variant='outline'  pl='1' fontSize='0.6em' colorScheme='green'>
        {publicKey.toBase58()}
      </Badge>
      
      <Button colorScheme='teal' variant='outline' leftIcon={<CloseIcon />}  size='sm'>
    
  </Button>
      </HStack>

      <VStack  mt={10}>
      <Stat>
  <StatLabel>Total Balance in GRN</StatLabel>
  <StatNumber>523.00</StatNumber>
  <StatHelpText>Feb 12 22- Mar 19 23</StatHelpText>
</Stat>
        <Button onClick={goShops} size='md' colorScheme='teal' variant='outline' >Find a shop</Button>
        <Button onClick={goShops} size='md' colorScheme='teal' variant='outline' >Go to Invest DAO</Button>
      </VStack>
    </VStack>
  );
};

export default Wallets;
