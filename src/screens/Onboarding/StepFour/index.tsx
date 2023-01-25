import React from 'react';

import BG from '../../../assets/global/png/bgContainer.png';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';

import {SucessStep} from '../../../components/Onboarding/SucessStep';

import {Container, Content} from './styles';

export function StepFour() {
  return (
    <Container source={BG}>
      <HeaderNavigation bt={true} bg={true} showLogo={true} />
      <Content>
        <SucessStep
          title="Parabéns"
          subTitle="Agora você já pode conectar"
          buttonText="Continuar"
        />
      </Content>
    </Container>
  );
}
