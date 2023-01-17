import React, {useState} from 'react';

import {Container} from './styles';

import BG from '../../../assets/global/png/bgContainer.png';

import {Header} from '../../../components/global/Header';
import {Button} from '../../../components/global/Button';

import {useNavigation} from '@react-navigation/native';

export function CompletAccount() {
  const navigation = useNavigation();

  return (
    <Container source={BG}>
      <Header title="Conecte-se" bg={true} bt={true} />
    </Container>
  );
}
