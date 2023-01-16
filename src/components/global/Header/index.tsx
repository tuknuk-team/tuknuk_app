import React, {useState} from 'react';

import {Container, Title, ButtonDefault} from './styles';
import IconArrow from '../../../assets/global/svg/arrowBack.svg';

export function Header() {
  return (
    <Container>
      <ButtonDefault>
        <IconArrow />
      </ButtonDefault>
      <Title>Login</Title>
      <ButtonDefault>{/* <IconArrow /> */}</ButtonDefault>
    </Container>
  );
}
