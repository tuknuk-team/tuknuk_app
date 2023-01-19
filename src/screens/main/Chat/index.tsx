import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import IconNewChat from '../../../assets/Chat/svg/iconChat.svg';
import IconNew from '../../../assets/Chat/svg/IconNew.svg';
import IconSearch from '../../../assets/Tab/svg/iconSearch.svg';

import {
  Container,
  Title,
  TextInput,
  ViewLinear,
  ContentInput,
  ContentIcons,
  ContentHeader,
  ButtonDefault,
} from './styles';

export function Chat() {
  return (
    <Container>
      <ContentHeader>
        <Title>Chat</Title>
        <ContentIcons>
          <ButtonDefault>
            <IconNew width={RFValue(18)} height={RFValue(18)} />
          </ButtonDefault>
          <ButtonDefault>
            <IconNewChat width={RFValue(20)} height={RFValue(20)} />
          </ButtonDefault>
        </ContentIcons>
      </ContentHeader>
      <ContentInput>
        <TextInput placeholder="Buscar" placeholderTextColor="#707070" />
        <IconSearch />
      </ContentInput>
      <ViewLinear />
    </Container>
  );
}
