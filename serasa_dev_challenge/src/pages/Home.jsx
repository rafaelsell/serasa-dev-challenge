import React from 'react';
import { Center, Image } from '@chakra-ui/react';
import logo from '../assets/serasa-logo-full.svg';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const Home = () => {
  return (<>
    <Center h={'100vh'} p={8}>
        <Image h={['20%', "25%", "30%"]} alt='Esta é a logo da empresa Serasa' src={logo} ></Image>
    </Center>
    <FloatingActionButton/>
    </>
  )
}
