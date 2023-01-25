import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface typeProps {
  type: 'selectPhoto' | 'selectDate' | 'selectGenre';
}

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.colorText};
  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const AddPhoto = styled.View`
  align-items: center;
`;

export const SelectProfilePhoto = styled.TouchableOpacity<typeProps>`
  ${({type}) =>
    type === 'selectPhoto' &&
    css`
      display: flex;
    `};
  ${({type}) =>
    type !== 'selectPhoto' &&
    css`
      display: none;
    `};

  align-items: center;
  justify-content: center;
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  border-radius: 45px;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(103)}px;
  height: ${RFValue(103)}px;
`;

// Date Component
export const SelectDate = styled.TextInput<typeProps>`
  flex: 1;
  color: ${({theme}) => theme.colors.textInput};
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: ${RFValue(4)}px;
  padding-bottom: ${RFValue(5)}px;
  width: 100%;
  text-align: center;
  ${({type}) =>
    type === 'selectDate' &&
    css`
      display: flex;
    `}

  ${({type}) =>
    type !== 'selectDate' &&
    css`
      display: none;
    `}
`;

export const DateViewLinear = styled(LinearGradient).attrs<typeProps>({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  width: 100%;
  height: 1px;
  border-radius: 10px;
  ${({type}) =>
    type === 'selectDate' &&
    css`
      display: flex;
    `}
  ${({type}) =>
    type !== 'selectDate' &&
    css`
      display: none;
    `}
`;
