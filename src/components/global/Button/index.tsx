import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Content, ContentLinear, Title} from './styles';

type IPropsButton = TouchableOpacityProps & {
  title: string;
  type?: boolean;
  full?: boolean;
  handlePress?: () => void;
};

export function Button({
  title,
  type,
  full,
  handlePress,
  ...rest
}: IPropsButton) {
  return (
    <Container full={full} onPress={handlePress}>
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
