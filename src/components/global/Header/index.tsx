import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, Title, ButtonDefault} from './styles';

import IconArrow from '../../../assets/global/svg/arrowBack.svg';
import bgHeader from '../../../assets/global/png/bgHeader.png';

type IPropsHeader = TouchableOpacityProps & {
  title: string;
  type?: boolean;
};

export function Header({title, type, ...rest}: IPropsHeader) {
  const navigation = useNavigation();

  return (
    <Container source={bgHeader}>
      <Content {...rest} type={type}>
        <ButtonDefault onPress={() => navigation.goBack()}>
          <IconArrow />
        </ButtonDefault>
        <Title>{title}</Title>
        <ButtonDefault />
      </Content>
    </Container>
  );
}
