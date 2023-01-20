import React from 'react';
import {TouchableOpacityProps} from 'react-native';

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

type IPropsButton = TouchableOpacityProps & {
  textConnectNow: string;
  locationTitle: string;
  street: string;
  alternativeTheme: boolean;
  handlePress: () => void;
};

export function CheckCard({
  textConnectNow,
  locationTitle,
  street,
  alternativeTheme,
  handlePress,
}: IPropsButton) {
  return (
    <Container onPress={handlePress}>
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
