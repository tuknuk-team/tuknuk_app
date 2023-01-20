import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import Bg from '../../../assets/global/png/bgContainer.png';
import IconSearch from '../../../assets/Tab/svg/iconSearch.svg';
import IconClose from '../../../assets/Tab/svg/iconClose.svg';

import {HeaderUser} from '../../../components/Headers/HeaderUser';

import {
  Container,
  ContentInput,
  TextInput,
  ContentIconsInput,
  ButtonDefault,
  Content,
} from './styles';
import {Establishment} from '../../../components/Home/Establishment';
import {ScrollView} from 'react-native';

export function Home() {
  const data = {
    name: 'Daniel',
    avatar:
      'https://media.licdn.com/dms/image/C4D03AQEK0H3X5cpk_A/profile-displayphoto-shrink_100_100/0/1641226188268?e=1679529600&v=beta&t=Fs4qDlZzzBQw9S9hPNkvA_L_x0hggF3_PJhUW6pN5sY',
  };
  return (
    <Container source={Bg} resizeMode="cover">
      <HeaderUser data={data} bt={true} bn={true} />
      <ContentInput>
        <TextInput />
        <ContentIconsInput>
          <ButtonDefault>
            <IconClose width={RFValue(16)} height={RFValue(16)} />
          </ButtonDefault>
          <ButtonDefault>
            <IconSearch width={RFValue(15)} height={RFValue(16)} />
          </ButtonDefault>
        </ContentIconsInput>
      </ContentInput>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Establishment />
        </ScrollView>
      </Content>
    </Container>
  );
}
