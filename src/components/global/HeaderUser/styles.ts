import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface type {
  type: boolean;
}

export const Container = styled.ImageBackground`
  height: ${getStatusBarHeight() + RFValue(140)}px;
`;

export const ContentLogo = styled.View`
  margin: ${getStatusBarHeight() + RFValue(10)}px ${RFValue(0)}px
    ${RFValue(5)}px ${RFValue(30)}px;
`;

export const ContentAvatar = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;
  border-radius: ${RFValue(50)}px;
`;

export const ButtonDefault = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonDefaultBack = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(11)}px ${RFValue(15)}px;
`;

export const Content = styled.View<type>`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  ${({type}) =>
    type &&
    css`
      justify-content: center;
    `}
`;

export const ContentName = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TextName = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
