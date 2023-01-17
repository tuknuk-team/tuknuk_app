import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(30)}px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentInput = styled.View`
  padding: ${RFValue(20)}px ${RFValue(30)}px;
  margin-top: ${RFValue(30)}px;
  justify-content: space-evenly;
`;

export const ContentForgot = styled.View`
  align-items: center;
`;

export const ForgotText = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const ViewLinear = styled(LinearGradient).attrs({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  width: 100%;
  height: 1px;
  border-radius: 10px;
`;

export const ContentFooter = styled.View`
  padding: ${RFValue(30)}px;
  width: 100%;
  flex: 1;
  margin-bottom: ${RFValue(70)}px;
  align-items: center;
  justify-content: flex-end;
`;
