import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.medium};
`;

export const ContentLinear = styled(LinearGradient).attrs({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  border-radius: ${RFValue(20)}px;
  height: ${RFValue(30)}px;
  width: ${RFValue(120)}px;
  align-items: center;
  justify-content: center;
`;
