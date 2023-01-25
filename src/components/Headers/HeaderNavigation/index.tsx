import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  ButtonDefault,
  ContentBg,
  Logo,
  LogoContent,
} from './styles';

import IconArrow from '../../../assets/global/svg/arrowBack.svg';
import bgHeader from '../../../assets/global/png/bgHeader.png';
import LogoTukNuk from '../../../assets/global/png/logo.png';

type IPropsHeader = TouchableOpacityProps & {
  title?: string;
  type?: boolean;
  bg?: boolean;
  bt?: boolean;
  showLogo?: boolean;
};

export function HeaderNavigation({
  title,
  type,
  bg,
  bt,
  showLogo,
  ...rest
}: IPropsHeader) {
  const navigation = useNavigation();

  return (
    <Container>
      {bg ? (
        <ContentBg source={bgHeader}>
          <Content {...rest} type={type}>
            {bt ? (
              <ButtonDefault onPress={() => navigation.goBack()}>
                <IconArrow />
              </ButtonDefault>
            ) : (
              <ButtonDefault />
            )}
            <LogoContent showLogo={showLogo} type={type}>
              <Logo source={LogoTukNuk} />
            </LogoContent>
            <Title>{title}</Title>
            <ButtonDefault />
          </Content>
        </ContentBg>
      ) : (
        <ContentBg>
          <Content {...rest} type={type}>
            {bt ? (
              <ButtonDefault onPress={() => navigation.goBack()}>
                <IconArrow />
              </ButtonDefault>
            ) : (
              <ButtonDefault />
            )}
            <LogoContent showLogo={showLogo} type={type}>
              <Logo source={LogoTukNuk} />
            </LogoContent>
            <Title>{title}</Title>
            <ButtonDefault />
          </Content>
        </ContentBg>
      )}
    </Container>
  );
}
