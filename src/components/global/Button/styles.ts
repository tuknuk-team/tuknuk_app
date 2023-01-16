import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
interface type {
  type: boolean;
}

export const Container = styled.TouchableOpacity``;

export const Content = styled.View<type>`
  border-radius: ${RFValue(20)}px;
  border-width: 1px;
  /* border-color: ${({theme}) => theme.colors.borderButton}; */
  border-color: ${({theme, type}) =>
    type ? theme.colors.borderButton : theme.colors.borderButton};
  padding: ${RFValue(10)}px;
  width: ${RFValue(120)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ContentLinear = styled(LinearGradient).attrs({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(10)}px;
  width: ${RFValue(120)}px;
  align-items: center;
  justify-content: center;
`;
