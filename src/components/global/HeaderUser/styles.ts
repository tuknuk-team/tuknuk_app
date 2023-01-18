import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${RFValue(30)}px;
  margin-top: ${RFValue(50)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentUSer = styled.View`
  margin-left: ${RFValue(15)}px;
  margin-top: ${RFValue(15)}px;
  align-items: center;
`;

export const ImageUser = styled.Image``;

export const TextBold = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.colorText};
`;

export const Text = styled.Text`
  margin-top: ${RFValue(2)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.colorText};
`;

export const ButtonDefault = styled.TouchableOpacity`
  margin-bottom: ${RFValue(20)}px;
`;
