import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface type {
  type: boolean;
}

export const Container = styled.ImageBackground`
  height: ${getStatusBarHeight() + RFValue(120)}px;
  padding: ${RFValue(0)}px ${RFValue(20)}px;
`;

export const ButtonDefault = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View<type>`
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  align-items: center;
  ${({type}) =>
    type &&
    css`
      /* background-color: ${({theme}) => theme.colors.textButton}; */
    `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
