import React from 'react';

import IconLocation from '../../../assets/global/svg/iconLocation.svg';
import IconArrowRight from '../../../assets/global/svg/arrowRigh.svg';

import {
  ConectContent,
  ConectNowText,
  Container,
  ContainerLinear,
  LocationContent,
  Street,
  StreetInfo,
  Title,
} from './styles';

interface Props {
  textConnectNow: string;
  locationTitle: string;
  street: string;
  alternativeTheme: boolean;
}

export function CheckCard({
  textConnectNow,
  locationTitle,
  street,
  alternativeTheme,
}: Props) {
  return (
    <Container>
      <ContainerLinear otherTheme={alternativeTheme}>
        <ConectContent otherTheme={alternativeTheme}>
          <IconLocation width="18" height="24" />
          <ConectNowText>{textConnectNow}</ConectNowText>
        </ConectContent>

        <LocationContent>
          <StreetInfo otherTheme={alternativeTheme}>
            <Title otherTheme={alternativeTheme}>{locationTitle}</Title>
            <Street otherTheme={alternativeTheme}>{street}</Street>
          </StreetInfo>
          <IconArrowRight width="13" height="13" />
        </LocationContent>
      </ContainerLinear>
    </Container>
  );
}
