import React from 'react'
import { Stack, Input,  Box, InputGroup} from '@chakra-ui/react'
import { BiSearch} from 'react-icons/bi'

function Search() {
  return (
    <Stack spacing={4}>
  <InputGroup
   alignItems='center'
  >
   <Box color='#313234' fontSize='16px'>
    <BiSearch />
    </Box>
    <Input type='text' 
    placeholder='Search....' 
    borderBottomColor='#CDCDCD' 
    borderBottomWidth='2px'
    variant='flushed'
    marginLeft='5px'
    />
  </InputGroup>
  </Stack>
  )
}

export default Search