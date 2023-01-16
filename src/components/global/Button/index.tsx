import React, {useState} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ContentLinear, Title} from './styles';

type IPropsButton = TouchableOpacityProps & {
  title: string;
  type?: string;
};

export function Button() {
  return (
    <Container>
      <ContentLinear>
        <Title>teste</Title>
      </ContentLinear>
    </Container>
  );
}
