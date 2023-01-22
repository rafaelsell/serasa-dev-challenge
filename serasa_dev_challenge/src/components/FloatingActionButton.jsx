import React from 'react';
import { IconButton, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
export const FloatingActionButton = () => {
    const navigate = useNavigate();
  return (
    <Menu>
  <MenuButton _expanded={{bg: "rgba(227, 28, 121, 1)"}} _hover={{bg: "rgba(227, 28, 121, 1)"}} color={'white'} rightIcon={<QuestionOutlineIcon fontSize={'2xl'} color={'white'}/>} padding={5} borderRadius={'full'} position={'fixed'} right={4} bottom={4} as={IconButton} bgColor={"brand.accent"}>
  Ajuda
  </MenuButton>
  <MenuList>
    <MenuItem _focus={{bgColor: "rgba(227, 28, 121, 0.1)"}} textStyle={'bodyM'} _hover={{bgColor: "rgba(227, 28, 121, 0.1)"}} onClick={()=>{navigate('/help/avaliation')} }>Enviar Avaliação</MenuItem>
    <MenuItem _focus={{bgColor: "rgba(227, 28, 121, 0.1)"}} textStyle={'bodyM'} _hover={{bgColor: "rgba(227, 28, 121, 0.1)"}}>Reportar Bug</MenuItem>
    <MenuItem _focus={{bgColor: "rgba(227, 28, 121, 0.1)"}} textStyle={'bodyM'} _hover={{bgColor: "rgba(227, 28, 121, 0.1)"}}>FAQ</MenuItem>
  </MenuList>
</Menu>
  )
}
