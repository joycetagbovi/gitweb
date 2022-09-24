import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

export default function Header() {
  return (
   <Flex 
    justify='space-between' 
    paddingTop='40px' 
    alignItems='center'>
   <Image 
     borderRadius='full'
     boxSize='40px'
     src= "img/profile.png" 
      alt='user profile'
   />
    <Image
     boxSize='24px'
     src='img/menu2.png' 
      alt='menu button'
   />
   </Flex>
  )
}
