import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  margin-bottom: ${RFValue(10)}px;
  margin-left: 8px;
  align-items: center;
`;

export const InterestOption = styled(LinearGradient).attrs<Props>(props => ({
  colors: props.isSelected ? ['#7F4AFC', '#4AAEFD'] : ['#243561', '#36477B'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
}))`
  padding: ${RFValue(6)}px ${RFValue(17)}px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.colorText};
  font-size: ${RFValue(8)}px;
  text-align: center;
`;
