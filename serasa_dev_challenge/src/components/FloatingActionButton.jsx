import React from 'react';
import { IconButton, Icon, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
export const FloatingActionButton = () => {
    const navigate = useNavigate();
  return (
    <Menu>
  <MenuButton color={'white'} rightIcon={<QuestionOutlineIcon fontSize={'2xl'} color={'white'}/>} padding={5} borderRadius={'full'} position={'fixed'} right={4} bottom={4} as={Button} bgColor={"brand.accent"}>
  Ajuda
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>{navigate('/help/avaliation')}}>Enviar Avaliação</MenuItem>
    <MenuItem>Reportar Bug</MenuItem>
    <MenuItem>FAQ</MenuItem>
  </MenuList>
</Menu>
    //<IconButton position={'fixed'} right={4} bottom={4} icon={<QuestionOutlineIcon fontSize={'2xl'} color={'white'}/>} size={'lg'} isRound  bgColor={"brand.accent"}/>
  )
}
