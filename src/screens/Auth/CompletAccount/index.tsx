import React, {useState} from 'react';

import {Container} from './styles';

import BG from '../../../assets/global/png/bgContainer.png';

import {Header} from '../../../components/global/Header';
import {CheckCard} from '../../../components/global/CheckCard';

import {useNavigation} from '@react-navigation/native';

export function CompletAccount() {
  const navigation = useNavigation();

  return (
    <Container source={BG}>
      <Header title="Conecte-se" bg={true} bt={true} />
      <CheckCard
        textConnectNow="Conectado agora"
        locationTitle="Lucca Cafés Especiais"
        street="Alameda Pres. Taunay, 40 - Batel, Curitiba - PR, 80420-180"
        alternativeTheme={false}
      />
    </Container>
  );
}
