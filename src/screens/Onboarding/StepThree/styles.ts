import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const TitleContent = styled.View`
  padding: 0 ${RFValue(43)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
  margin-bottom: ${RFValue(42)}px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
`;

export const Content = styled.View`
  width: 100%;
  height: ${RFValue(175)}px;
  display: flex;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: RFValue(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})``;

export const FooterTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(42)}px;
`;
