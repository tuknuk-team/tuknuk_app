import React from 'react';

import BG from '../../../assets/global/png/bgFooter.png';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/global/Button';
import {InterestsSelector} from '../../../components/Onboarding/InterestsSelector';

import {
  Container,
  Content,
  ContentScroll,
  FooterTitle,
  SubTitle,
  Title,
  TitleContent,
} from './styles';

export function StepThree() {
  const navigation = useNavigation();

  return (
    <Container source={BG}>
      <HeaderNavigation bt={true} />

      <TitleContent>
        <Title>Complete seu cadastro para começar suas conexões</Title>
        <SubTitle>Interesses</SubTitle>
      </TitleContent>

      <Content>
        <ContentScroll showsVerticalScrollIndicator={false}>
          <InterestsSelector title="Tecnologia" isSelected={true} />
          <InterestsSelector title="Música" />
          <InterestsSelector title="Design" />
          <InterestsSelector title="Cafés" />
          <InterestsSelector title="Investimento" />
          <InterestsSelector title="Teatro" />
          <InterestsSelector title="Arte" />
          <InterestsSelector title="Filmes" />
          <InterestsSelector title="Arquitetura" />
          <InterestsSelector title="Animais" />
          <InterestsSelector title="Livros" />
          <InterestsSelector title="Finanças" isSelected={true} />
          <InterestsSelector title="Restaurantes" />
          <InterestsSelector title="Esportes" isSelected={true} />
          <InterestsSelector title="Podcasts" />
          <InterestsSelector title="Finanças" />
          <InterestsSelector title="Artes" />
          <InterestsSelector title="Jogos" />
        </ContentScroll>
      </Content>

      <Button
        title="Continuar"
        full={true}
        type={true}
        onPress={() => navigation.navigate('StepFour')}
        style={{
          paddingLeft: RFValue(35),
          paddingRight: RFValue(35),
          marginTop: RFValue(21),
        }}
      />
      <FooterTitle>*Selecione no mínimo 3 opções</FooterTitle>
    </Container>
  );
}
