import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #324375;
  width: 100%;
  align-items: center;
  padding: ${RFValue(0)}px ${RFValue(5)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  /* align-items: center; */
`;

export const ImageEstablish = styled.Image.attrs({})`
  width: ${RFValue(120)}px;
  height: ${RFValue(90)}px;
  border-radius: 14px;
`;

export const ContentInfos = styled.View`
  justify-content: space-between;
  padding: ${RFValue(10)}px;
`;

export const TextTitle = styled.Text`
  color: ${({theme}) => theme.colors.colorText};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const TextAddres = styled.Text`
  font-size: ${RFValue(11)}px;
  /* margin-top: ${RFValue(2)}px; */
  color: ${({theme}) => theme.colors.colorText};

  font-family: ${({theme}) => theme.fonts.regular};
`;
