import React, {useState} from 'react';

import {Container} from './styles';
import BG from '../../assets/global/png/bg.png';

import {Header} from '../../components/global/Header';
import {Button} from '../../components/global/Button';

export function Signin() {
  return (
    <Container source={BG}>
      <Header />
      <Button title="tste" />
    </Container>
  );
}
