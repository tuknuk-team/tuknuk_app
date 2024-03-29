import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const ContentInput = styled.View`
  border-radius: ${RFValue(20)}px;
  width: 67%;
  margin-top: ${RFValue(-15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 0.1667px;
  padding: ${RFValue(8)}px ${RFValue(10)}px;
  border-color: #707070;
  align-self: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ContentIconsInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
  margin-right: ${RFValue(10)}px;
`;

export const ContentValidate = styled.TouchableOpacity`
  padding: ${RFValue(20)}px ${RFValue(15)}px ${RFValue(5)}px ${RFValue(15)}px;
`;

export const ButtonDefault = styled.TouchableOpacity``;

export const TextInput = styled.TextInput`
  padding: ${RFValue(0)}px ${RFValue(10)}px;
  width: 75%;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.colorText};
`;

export const Obfuscate = styled.View`
  /* background-color: 'rgba(135, 137, 141, 0.9)'; */
  width: 100%;
  z-index: 1;
  height: 100%;
  position: absolute;
  margin-top: ${RFValue(210)}px;
`;

export const Content = styled.View`
  color: 'rgba(0,0,0,0.9)';
  flex: 1;
  margin-top: ${RFValue(10)}px;
`;
