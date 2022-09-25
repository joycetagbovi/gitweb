import React from 'react'
import { Flex, Image,Box,Stack,Text,Button } from '@chakra-ui/react'
import {FaStar,FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import Data from '../dummy'
import {useParams, useNavigate} from "react-router-dom"



function Details() {
    const {id} = useParams();
    const Food = Data.find((item) =>  (item.id) === (id))
    const navigate = useNavigate()

  return (
    
    <Box display={{base:'block',md:'none'}}>
    {/* Header */}
    <Flex 
    justify='space-between' 
    paddingTop='30px' 
    alignItems='center'
    px='20px'
    >
    <Flex
     onClick={() => navigate(-1)}
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
     {/* Food Details */}
    <Stack >
    {Food?.id}
    <Box mt='30px' px='20px'>
    <Text 
     fontSize='32px' 
     color='#313234'
     fontWeight='700'
     width='172px'
    mb='5px'>
   {Food?.title}
    </Text>
    <Text
     fontSize='32px' 
     color='#E4723C'
     fontWeight='700'
     mb='5px'
    >
    ${Food?.price}
    </Text>
    </Box>
    {/* Food Wrapper */}
    <Flex justifyContent='space-between' alignItems='center' pl='20px' mt='30px'>
     <Stack  w='120px'>
     <Box mt='20px'>
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
     <Box mt='20px'>
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
     <Box mt='20px'>
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
    {/* Item Image */}
     <Flex ml='50px'>
    <Image 
    src={Food?.image}
    alt={Food?.title}
    width='296px'
    height='176px'
    objectFit='cover'
    objectPosition={'0 -100%'}
    mt='30px'
/>
</Flex>
    </Flex>
    {/* Indgredient */}
    <Box pt='40px'  pl='20px'>
    <Text
      color= '#000000'
      fontSize= '16px'
      fontWeight= '700'
      mb= '10px'>
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
            alignItems='center'
            display='flex'
            justifyContent='center'
            key={item.id}
            mr='15px'
            px='20px'
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
   {/* Button */}
   <Box px='20px' py='60px'>
     <Button
      onClick={() => alert('Order Placed Suceessful')}
     rightIcon={<FaChevronRight />}
     background= '#F5CA48'
     borderRadius={50}
     height='62px'
     fontSize='14px'
     fontWeight='700'
     color='#000000'
     transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
     width='100%'
     _hover={{ bg: '#000000', color:'#ffffff' }}
     >
     Place an order
     </Button>
     </Box>
    </Stack>
    </Box>
 
  )
}

export default Details