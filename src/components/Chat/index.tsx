import React, {useState} from 'react';
import {
  Container,
  ImageUSer,
  Content,
  ContentTitles,
  TextTitle,
  TextUSer,
  ContentHours,
  Texthours,
  ContentBar,
} from './styles';

import AvatarDanil from '../../assets/Chat/png/danilo.png';
import AvatarHudson from '../../assets/Chat/png/hudson.png';
import AvatarJoao from '../../assets/Chat/png/joao.png';

export function Chat() {
  return (
    <Container>
      <Content>
        <ImageUSer source={AvatarDanil} resizeMode="contain" />
        <ContentTitles>
          <TextTitle>Matheus Gonçalves</TextTitle>
          <TextUSer>Olá! Tudo bem? Gostaria de…</TextUSer>
        </ContentTitles>
        <ContentHours>
          <Texthours>1h</Texthours>
        </ContentHours>
      </Content>
      <ContentBar />
    </Container>
  );
}
