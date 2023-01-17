import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native';

interface Props {
  isFocused: boolean;
  typeError: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: ${RFValue(0)}px ${RFValue(10)}px;
  border-radius: ${RFValue(6)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(15)}px;
  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.borderButton};
    `}
  ${({typeError, theme}) =>
    typeError &&
    css`
      border-color: ${({theme}) => theme.colors.error};
    `}
`;

export const ContainerError = styled.View<Props>`
  width: 100%;
  padding: ${RFValue(4)}px ${RFValue(10)}px;
  border-radius: ${RFValue(6)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(5)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.error};
`;

export const Field = styled(TextInput)`
  flex: 1;
  color: ${({theme}) => theme.colors.textInput};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  padding: ${RFValue(4)}px 0;
  margin-left: ${RFValue(4)}px;
`;

export const ButtonSecurity = styled.TouchableOpacity``;

export const ContentIcon = styled.View`
  height: ${RFValue(30)}px;

  padding: 0 ${RFValue(10)}px;
  justify-content: center;
  /* border-radius: ${RFValue(4)}px; */
`;

export const TextNickNAme = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(14)}px;

  font-family: ${({theme}) => theme.fonts.regular};
`;
