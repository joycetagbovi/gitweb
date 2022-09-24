import React from 'react'
import Header from '../components/Header'
import { Box, Container, Text, Flex, Stack,Image, } from '@chakra-ui/react'
import Search from '../components/Search'
import { FaCrown,FaPlus,FaStar }  from 'react-icons/fa'
import Data from '../dummy'
import Category from '../components/Category'
import {Link } from 'react-router-dom'

function Home() {
  return (
    <Box >
    <Container>
     <Header />
     <Box marginTop='30px'>
     <Text 
      fontSize='16px' 
      color='#313234'
      fontWeight='400'
      marginBottom='5px'>
        Food
    </Text>
     <Text fontSize='32px' 
     color='#313234'
     fontWeight='700'
    marginBottom='5px'>
      Delivery
    </Text>
     </Box>
      <Search />
      <Flex>
        <Category/>
      </Flex>

     
      <Stack  marginTop='30px'>
        <Text
         color= '#000000'
         fontSize= '16px'
         fontWeight= '700'
         marginBottom= '10px'>
         Popular
        </Text>
        {
        Data.map((item) => {
                return (
                    <Link to={`/details/${item.id}`} key={item.id}>
                    <Flex
                    backgroundColor='#ffffff'
                    shadow= 'lg'
                    height= '166px'
                    borderRadius='25px'
                    marginBottom='20px'
                    flexDir='row'
                    justifyContent={'space-between'}
                    paddingTop= '20px'
                    paddingLeft= '20px'
                   >
                   <Box>
                   <Flex alignItems='center'>
                   <Box color='#F5CA48' fontSize={12}>
                   <FaCrown  />
                   </Box>
                   <Text
                    marginLeft='5px'
                    fontSize='16px'
                    color= '#000000'
                    fontWeight='600'>
                      top of the week
                   </Text>
                   </Flex>
                    <Box marginTop='15px'>
                    <Text
                      fontSize='16px'
                      color= '#313234'
                      fontWeight='600'>
                       {item.title}
                   </Text>
                    <Text
                      marginTop='5ox'
                      fontSize='12px'
                      color= '#C4C4C4'
                      fontWeight='500'>
                      Weight: ${item.weight}
                   </Text>
                    </Box>
           
                    <Flex
                      flexDirection= 'row'
                      alignItems= 'center'
                      marginTop= '10px'
                      marginLeft= '-20px'
                    >
                       <Box
                        paddingX = '40px'
                        paddingY= '20px'
                        borderTopRightRadius= '25px'
                        borderBottomLeftRadius= '25px'
                        backgroundColor= '#F5CA48'
                       >
                        <Box color='#000000' width='24px'>
                       <FaPlus  />
                       </Box>
                       </Box>
                       <Flex 
                        flexDirection = 'row'
                        alignItems = 'center'
                        marginLeft = '20px' >
                        <Box color='#000000' width='10px' >
                       <FaStar/>
                       </Box>
                       <Text
                         marginLeft='10px'
                         fontSize='12px'
                         color= '#000000'
                         fontWeight='600'>{item.rating}</Text>
                       </Flex>
                    </Flex>
                    </Box>
           
                    <Flex
                     marginLeft = '40px'>
                    <Image src={item.image}
                     width='210px'
                     height='125px'
                    objectFit='contain'
                    alt="pizza"
                    />
                    </Flex>  
                   </Flex>
                   </Link>
                )
                })
        }
       
      </Stack>
     
     
     </Container>
    

    </Box>
  )
}

export default Home