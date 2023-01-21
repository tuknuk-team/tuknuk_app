import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0px ${RFValue(43)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
  margin-bottom: ${RFValue(43)}px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
`;

export const FormContent = styled.View``;
