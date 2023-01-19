import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContentInput,
  TextInput,
  ContentIconsInput,
  ButtonDefault,
  Content,
  Obfuscate,
  ContentValidate,
} from './styles';

import Bg from '../../../assets/global/png/bgContainer.png';
import IconSearch from '../../../assets/Tab/svg/iconSearch.svg';
import IconClose from '../../../assets/Tab/svg/iconClose.svg';

import {Establishment} from '../../../components/Home/Establishment';
import {HeaderUser} from '../../../components/global/HeaderUser';
import {CheckCard} from '../../../components/global/CheckCard';

export function HomeDesable() {
  const navigation = useNavigation();

  const data = {
    // name: 'Daniel',
    // avatar:
    //   'https://media.licdn.com/dms/image/C4D03AQEK0H3X5cpk_A/profile-displayphoto-shrink_100_100/0/1641226188268?e=1679529600&v=beta&t=Fs4qDlZzzBQw9S9hPNkvA_L_x0hggF3_PJhUW6pN5sY',
  };

  function handleNavigation(route: string) {
    navigation.navigate(route);
  }

  return (
    <Container source={Bg} resizeMode="cover">
      <HeaderUser data={data} />
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
      <ContentValidate>
        <CheckCard
          textConnectNow="Conectado agora"
          locationTitle="Lucca Cafés Especiais"
          street="Complete seu cadastro para começar suas conexões "
          alternativeTheme={true}
          onPress={() => handleNavigation('CompletAccount')}
        />
      </ContentValidate>
      {/* <Obfuscate /> */}
      <Content>
        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Establishment />
        </ScrollView>
      </Content>
    </Container>
  );
}
