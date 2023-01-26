import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface btProps {
  btHide: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['#243561', '#36477B'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  width: ${RFValue(306)}px;
  border-radius: 11px;
  padding: ${RFValue(47)}px ${RFValue(33)}px ${RFValue(29)}px;
  justify-content: center;
  align-items: center;
`;

export const CloseContent = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(12)}px;
  top: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

export const Title = styled.Text<btProps>`
  ${({btHide}) =>
    btHide
      ? css`
          font-size: ${RFValue(15)}px;
        `
      : css`
          font-size: ${RFValue(17)}px;
        `}
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.colorText};
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(15)}px;
  text-align: center;
`;
export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.colorText};
  font-size: ${RFValue(13)}px;
  text-align: center;
  margin-bottom: ${RFValue(22)}px;
`;

export const ButtonContent = styled.View<btProps>`
  ${({btHide}) =>
    btHide
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  width: 100%;
`;
