import React from 'react'
import { Flex, Image,Box,Container,Stack,Text,Button } from '@chakra-ui/react'
import {FaStar,FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import Data from '../dummy'
import {useParams} from "react-router-dom"



function Details() {
    const {id} = useParams();
    const Food = Data.find((item) =>  (item.id) === (id))
    console.log(id)

  return (
    <Box >
    <Container>
    <Flex 
    justify='space-between' 
    paddingTop='40px' 
    alignItems='center'>
    <Flex
     boxSize='40px'
     border='2px'
     borderColor='#CDCDCD'
     borderRadius='10px'
     justifyContent='center'
     alignItems='center'
     fontSize='8px'
    >
    <FaChevronLeft />
    </Flex>
    <Flex
    boxSize='40px'
     background='#F5CA48'
     borderRadius='10px'
     justifyContent='center'
     alignItems='center'
     fontSize='8px'
     color='#ffffff'
    >
    <FaStar />
    </Flex>
   </Flex>
    <Stack>
    {Food?.id}
    <Box marginTop='30px'>
    <Text 
     fontSize='32px' 
     color='#313234'
     fontWeight='700'
     width='172px'
    marginBottom='5px'>
   {Food?.title}
    </Text>
    <Text
     fontSize='32px' 
     color='#E4723C'
     fontWeight='700'
     marginBottom='5px'
    >
    ${Food?.price}
    </Text>
    </Box>
    <Flex justifyContent='space-between' alignItems='center'>
     <Stack marginTop='30px'>
     <Box marginTop='20px'>
     <Text
     fontSize='14px'
     fontWeight='500'
     color='#CDCDCD'>
     Size
    </Text>
    <Text
     fontSize='16px'
     fontWeight='500'
     color='#000000'
    >
    {Food?.sizeName}
    </Text>
     </Box>
     <Box marginTop='20px'>
     <Text
     fontSize='14px'
     fontWeight='500'
     color='#CDCDCD'>
     Crust
    </Text>
    <Text
     fontSize='16px'
     fontWeight='500'
     color='#000000'
    >
    {Food?.crust}
    </Text>
     </Box>
     <Box marginTop='20px'>
     <Text
     fontSize='14px'
     fontWeight='500'
     color='#CDCDCD'>
     Delivery in
    </Text>
    <Text
     fontSize='16px'
     fontWeight='500'
     color='#000000'
    >
    {Food?.deliveryTime} min
    </Text>
     </Box>
     </Stack>
    <Image 
    src={Food?.image}
    alt={Food?.title}
    width='296px'
    height='176px'
    objectFit='contain'
    overflow='hidden'
/>
    </Flex>
    <Box pt='40px' pb='40px'>
    <Text
      color= '#000000'
      fontSize= '16px'
      fontWeight= '700'
      marginBottom= '10px'>
      Ingredients
      </Text>
   <Flex>
    {Food?.ingredients.map((item)  => {
        return(
            <Box
            width='100px'
            height='80px'
            background='#ffffff'
            borderRadius={15}
            shadow='md'
            paddingX='10px'
            marginRight='15px'
            alignItems='center'
            display='flex'
            justifyContent='center'
            key={item.id}
            >
            <Image 
            src={item.image} 
            alt={item.name}
            boxSize='80px'
            objectFit='contain'
            />
            </Box>
        )
    })
    }
   </Flex>
   </Box>
   
     <Button
     rightIcon={<FaChevronRight />}
     background= '#F5CA48'
     borderRadius={50}
     height='62px'
     fontSize='14px'
     fontWeight='700'
     color='#000000'
     >
     Place an order
     </Button>
   
    </Stack>
    </Container>
    </Box>
  )
}

export default Details