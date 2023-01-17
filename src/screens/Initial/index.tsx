import React from 'react';

import {Container, Content, ContentButton} from './styles';

import BG from '../../assets/global/png/bgInitial.png';

import {Header} from '../../components/global/Header';
import {Button} from '../../components/global/Button';
import {useNavigation} from '@react-navigation/native';

export function Initial() {
  const navigation = useNavigation();

  return (
    <Container source={BG}>
      <Header title="Conecte-se" bg={false} type={true} />
      <Content>
        <ContentButton>
          <Button title="Cadastrar uma conta" type={true} full={true} />
          <Button title="Logar em uma conta" type={false} full={true} />
        </ContentButton>
      </Content>
    </Container>
  );
}
