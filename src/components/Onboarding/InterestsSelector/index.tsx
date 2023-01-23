import React from 'react';

import {Container, Interest, InterestOption, Title} from './styles';

interface Props {
  title: string;
  isSelected?: boolean;
  style?: any;
}

export function InterestsSelector({title, isSelected, style}: Props) {
  return (
    <Container style={style}>
      <Interest>
        <InterestOption isSelected={isSelected}>
          <Title>{title}</Title>
        </InterestOption>
      </Interest>
    </Container>
  );
}
