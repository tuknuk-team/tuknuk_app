import React from 'react';

import {
  Container,
  ContentDescription,
  ContentInput,
  ViewLinear,
  ContentFooter,
  Description,
} from './styles';

import BG from '../../../assets/global/png/bgContainer.png';

import {Header} from '../../../components/global/Header';
import {Button} from '../../../components/global/Button';

import {useNavigation} from '@react-navigation/native';

export function Verify() {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Signin');
  }

  return (
    <Container source={BG}>
      <Header title="Conecte-se" bg={true} bt={true} />
      <ContentDescription>
        <Description>
          Insira o código de validação enviado para *****@gmail.com
        </Description>
      </ContentDescription>
      <ContentInput>
        <ViewLinear />
      </ContentInput>
      <ContentFooter>
        <Button
          title="Confirmar código"
          type={true}
          full={true}
          handlePress={() => handleNavigate()}
        />
        <Description>Reenviar código</Description>
      </ContentFooter>
    </Container>
  );
}
