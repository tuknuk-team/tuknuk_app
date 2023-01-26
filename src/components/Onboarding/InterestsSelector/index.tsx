import React from 'react';

import {Container, InterestOption, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  isSelected?: boolean;
};

export function InterestsSelector({title, isSelected, ...rest}: Props) {
  return (
    <Container {...rest}>
      <InterestOption isSelected={isSelected}>
        <Title>{title}</Title>
      </InterestOption>
    </Container>
  );
}
