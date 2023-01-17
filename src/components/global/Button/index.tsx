import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Content, ContentLinear, Title} from './styles';

type IPropsButton = TouchableOpacityProps & {
  title: string;
  type?: boolean;
  full?: boolean;
};

export function Button({title, type, full, ...rest}: IPropsButton) {
  return (
    <Container full={full}>
      {type ? (
        <ContentLinear>
          <Title>{title}</Title>
        </ContentLinear>
      ) : (
        <Content>
          <Title>{title}</Title>
        </Content>
      )}
    </Container>
  );
}
