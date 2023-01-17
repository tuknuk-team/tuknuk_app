import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import styled, {css} from 'styled-components/native';
interface type {
  type: boolean;
}
interface full {
  full: boolean;
}

export const Container = styled.TouchableOpacity<full>`
  width: 100%;
  ${({full}) =>
    !full &&
    css`
      width: 37%;
    `}
`;

export const Content = styled.View`
  border-radius: ${RFValue(20)}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.borderButton};
  padding: ${RFValue(10)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(14)}px;
`;

export const ContentLinear = styled(LinearGradient).attrs({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;
