import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.colorText};
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(5)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.colorText};
  margin-bottom: ${RFValue(36)}px;
`;
