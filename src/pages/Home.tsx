import React from 'react'
import Header from '../components/Header'
import { Box,  Text, Flex, Stack,Image, } from '@chakra-ui/react'
import Search from '../components/Search'
import { FaCrown,FaPlus,FaStar }  from 'react-icons/fa'
import Data from '../dummy'
import Category from '../components/Category'
import {Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Flex 
     justifyContent='center'
     pt='20'
     display={{base:'none',md:'flex'}}
     >
      <Text> ** Desktop Version Disabled Mobile View Only **</Text>
    </Flex>
    <Box display={{base:'block',md:'none'}}>
     <Header />
     {/* Food Topic */}
     <Box mt='30px' px='20px'>
     <Text 
      fontSize='16px' 
      color='#313234'
      fontWeight='400'
      mb='5px'>
        Food
    </Text>
     <Text fontSize='32px' 
     color='#313234'
     fontWeight='700'
     mb='5px'>
      Delivery
    </Text>
     </Box>
      <Search />
      <Flex>
        <Category/>
      </Flex>
     {/* Food List */}
      <Stack mt='30px' px='20px'>
        <Text
         color= '#000000'
         fontSize= '16px'
         fontWeight= '700'
         mb= '10px'>
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
                    mb='20px'
                    flexDir='row'
                    justifyContent='space-between'
                    pt= '20px'
                    pl= '20px'
                   >
                   <Box>
                   <Flex alignItems='center'>
                   <Box color='#F5CA48' fontSize={12}>
                   <FaCrown  />
                   </Box>
                   <Text
                    ml='5px'
                    fontSize='16px'
                    color= '#000000'
                    fontWeight='600'>
                      top of the week
                   </Text>
                   </Flex>
                    <Box mt='15px'>
                    <Text
                      fontSize='16px'
                      color= '#313234'
                      fontWeight='600'>
                       {item.title}
                   </Text>
                    <Text
                      mt='5ox'
                      fontSize='12px'
                      color= '#C4C4C4'
                      fontWeight='500'>
                      Weight: ${item.weight}
                   </Text>
                    </Box>
           
                    <Flex
                      flexDirection= 'row'
                      alignItems= 'center'
                      mt= '10px'
                      ml= '-20px'
                    >
                       <Box
                        px = '40px'
                        py= '20px'
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
                        ml = '20px' >
                        <Box color='#000000' fontSize='10px' >
                       <FaStar/>
                       </Box>
                       <Text
                         ml='10px'
                         fontSize='12px'
                         color= '#000000'
                         fontWeight='600'>{item.rating}</Text>
                       </Flex>
                    </Flex>
                    </Box>
           
                    <Flex ml='40px'>
                    <Image src={item.image}
                     width='210px'
                     height='125px'
                    objectFit='cover'
                    objectPosition={'0 -50%'}
                     alt={item.title}
                    />
                    </Flex>  
                   </Flex>
                   </Link>
                )
                }) }
      </Stack>
    </Box>
    </>
  )
}

export default Home