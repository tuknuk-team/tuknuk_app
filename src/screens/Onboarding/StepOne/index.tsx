import React, {useState} from 'react';

import {Container} from './styles';

import BG from '../../../assets/global/png/bgOnboarding.png';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';

import {useNavigation} from '@react-navigation/native';

export function StepOne() {
  const navigation = useNavigation();

  return (
    <Container source={BG}>
      <HeaderNavigation bt={true} />
    </Container>
  );
}
