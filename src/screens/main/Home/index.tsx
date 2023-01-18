import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import BgTabs from '../../../assets/global/png/bgTabs.png';
import IconSearch from '../../../assets/Tab/svg/iconSearch.svg';
import IconClose from '../../../assets/Tab/svg/iconClose.svg';

import {HeaderUser} from '../../../components/global/HeaderUser';

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
  return (
    <Container source={BgTabs} resizeMode="cover">
      <HeaderUser />
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
