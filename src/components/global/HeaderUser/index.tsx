import React, {useState} from 'react';
import {
  ButtonDefault,
  Content,
  Container,
  ContentUSer,
  Text,
  ImageUser,
  TextBold,
} from './styles';
import IconBack from '../../../assets/global/svg/arrowBack.svg';
import IconUser from '../../../assets/Tab/svg/IconAvatar.svg';
import IconTukNuk from '../../../assets/Tab/svg/LogoMain.svg';
import IconNotication from '../../../assets/Tab/svg/IconNotication.svg';
import {RFValue} from 'react-native-responsive-fontsize';

import Bg from '../../../assets/global/png/teste.png';

export function HeaderUser() {
  return (
    <Container source={Bg}>
      <IconTukNuk />
      <Content>
        <ButtonDefault>
          <IconBack width={RFValue(10)} height={RFValue(15)} />
        </ButtonDefault>
        <ContentUSer>
          <IconUser width={RFValue(60)} height={RFValue(55)} />
          <Text>
            Olá,
            <TextBold> José</TextBold>
          </Text>
        </ContentUSer>

        <IconNotication />
      </Content>
    </Container>
  );
}
