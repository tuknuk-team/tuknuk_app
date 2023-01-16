import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(30)}px;
  flex-direction: row;
  justify-content: space-evenly;
`;
