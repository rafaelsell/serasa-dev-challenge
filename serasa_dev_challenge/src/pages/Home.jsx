import React from 'react';
import { Center, Image } from '@chakra-ui/react';
import logo from '../assets/serasa-logo-full.svg';
import { FloatingActionButton } from '../components/FloatingActionButton';

export const Home = () => {
  return (<>
    <Center h={'100vh'}>
        <Image alt='Esta é a logo da empresa Serasa' pb={7} src={logo} ></Image>
    </Center>
    <FloatingActionButton/>
    </>
  )
}
