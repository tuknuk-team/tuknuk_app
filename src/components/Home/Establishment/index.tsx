import React, {useState} from 'react';
import {
  Container,
  Content,
  ImageEstablish,
  ContentInfos,
  TextTitle,
  TextAddres,
} from './styles';

import BgAine from '../../../assets/Home/png/BgAline.png';
import BgLuca from '../../../assets/Home/png/BgLucaCafe.png';
import BgPadaria from '../../../assets/Home/png/BgPadaria.png';

import IconStart from '../../../assets/Tab/svg/iconStarts.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native';

type IProsEstablishment = {
  title: string;
  img: string;
};

export function Establishment() {
  return (
    <>
      {/* <ScrollView> */}
      <Container>
        <Content>
          <ImageEstablish source={BgPadaria} />
          <ContentInfos>
            <TextTitle>Lucca Cafés Especiais</TextTitle>
            <TextAddres>
              Alameda Pres. Taunay, 40 - Batel,{'\n'}Curitiba - PR, 80420-180
            </TextAddres>
            <IconStart height={RFValue(30)} width={RFValue(50)} />
          </ContentInfos>
        </Content>
      </Container>
      <Container>
        <Content>
          <ImageEstablish source={BgLuca} resizeMode="contain" />
          <ContentInfos>
            <TextTitle>Jorge Padarias</TextTitle>
            <TextAddres>
              Alameda Pres. Taunay, 40 - Batel,{'\n'}Curitiba - PR, 80420-180
            </TextAddres>
            <IconStart height={RFValue(30)} width={RFValue(50)} />
          </ContentInfos>
        </Content>
      </Container>
      <Container>
        <Content>
          <ImageEstablish source={BgAine} resizeMode="contain" />
          <ContentInfos>
            <TextTitle>Aline Restaurante</TextTitle>
            <TextAddres>
              Alameda Pres. Taunay, 40 - Batel,{'\n'}Curitiba - PR, 80420-180
            </TextAddres>
            <IconStart height={RFValue(30)} width={RFValue(50)} />
          </ContentInfos>
        </Content>
      </Container>
      <Container>
        <Content>
          <ImageEstablish source={BgAine} resizeMode="contain" />
          <ContentInfos>
            <TextTitle>Aline Restaurante</TextTitle>
            <TextAddres>
              Alameda Pres. Taunay, 40 - Batel,{'\n'}Curitiba - PR, 80420-180
            </TextAddres>
            <IconStart height={RFValue(30)} width={RFValue(50)} />
          </ContentInfos>
        </Content>
      </Container>
      <Container>
        <Content>
          <ImageEstablish source={BgAine} resizeMode="contain" />
          <ContentInfos>
            <TextTitle>Aline Restaurante</TextTitle>
            <TextAddres>
              Alameda Pres. Taunay, 40 - Batel,{'\n'}Curitiba - PR, 80420-180
            </TextAddres>
            <IconStart height={RFValue(30)} width={RFValue(50)} />
          </ContentInfos>
        </Content>
      </Container>

      {/* </ScrollView> */}
    </>
  );
}
