import React from 'react';

import {Container, ContentButton} from './styles';
import BG from '../../assets/global/png/bgContainer.png';

import {Header} from '../../components/global/Header';
import {Button} from '../../components/global/Button';

export function Signin() {
  return (
    <Container source={BG}>
      <Header title="Login" type={false} />
      <ContentButton>
        <Button title="Email" type={true} />
        <Button title="Telefone" type={false} />
      </ContentButton>
    </Container>
  );
}
