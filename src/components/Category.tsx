import React from 'react'
import categoriesData from '../fake'
import { Text, Flex, Image, Box, } from '@chakra-ui/react'
import { FaChevronRight} from 'react-icons/fa'

function Category() {
  return (
    <Flex flexDir={'column'} marginTop='30px'>
    <Text
      color= '#000000'
      fontSize= '16px'
      fontWeight= '700'
      marginBottom= '10px'>
      Category
      </Text>
    <Flex >
     {categoriesData.map((item) => {
        return (
        <Box key={item.id}
         background={ item.selected ? '#F5CA48' : '#ffffff'}
         shadow='md'
         borderRadius={20}
         display='flex'
         flexDir='column'
         alignItems='center'
         justifyContent='center'
         paddingX='10px'
         height='177px'
         width= '105px'
         marginRight='20px'
         marginBottom='5px'
        
        >
        <Image 
          src={item.image} 
         alt={item.title}
         objectFit='contain'
         boxSize='60px'
        />
        <Text 
          color= '#31323'
          fontSize= '12px'
          fontWeight= '600'
          textAlign= 'center'
          marginTop= '10px'
        >
            {item.title}
        </Text>
        <Flex
         background={item.selected ? '#ffffff' : '#F26C68' }
         color={item.selected ? '#000000' : '#ffffff'}
         borderRadius= '40'
         marginTop= '20px'
         height= '26px'
         width= '26px'
         alignItems='center' 
         justifyContent='center'
         >
         <FaChevronRight />
        </Flex>
        </Box>
        )
     })
    
     }
    </Flex>
    </Flex>
  )
}

export default Category