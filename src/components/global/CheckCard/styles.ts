import LinearGradient from 'react-native-linear-gradient';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface variationCardProps {
  otherTheme: boolean;
}

export const Container = styled.TouchableOpacity``;

export const ContainerLinear = styled(LinearGradient).attrs<variationCardProps>(
  props => ({
    colors: props.otherTheme ? ['#F12B60', '#F12B60'] : ['#7F4AFC', '#4AAEFD'],
    start: {x: 1, y: 1},
    end: {x: 0, y: 1},
  }),
)`
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(11)}px;
  ${({otherTheme}) =>
    otherTheme
      ? css`
          align-items: flex-start;
          padding: ${RFValue(20)}px ${RFValue(24)}px};
        `
      : css`
          justify-content: center;
          padding: ${RFValue(13)}px ${RFValue(18)}px};
        `}
`;

export const ConectContent = styled.View<variationCardProps>`
  height: ${RFValue(47)}px;
  align-items: center;
  justify-content: center;
  margin-right: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({theme}) => theme.colors.colorText};
  ${({otherTheme}) =>
    otherTheme === true
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;

export const ConectNowText = styled.Text`
  width: ${RFValue(50)}px;
  margin-top: ${RFValue(5)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(8)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.colorText};
`;

export const LocationContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StreetInfo = styled.View<variationCardProps>`
  ${({otherTheme}) =>
    otherTheme
      ? css`
          width: ${RFPercentage(12)}%;
        `
      : css`
          width: ${RFValue(219)}px;
        `}
`;

export const Title = styled.Text<variationCardProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.colorText};
  width: ${RFValue(190)}px;
  ${({otherTheme}) =>
    otherTheme
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;

export const Street = styled.Text<variationCardProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.colorText};
  ${({otherTheme}) =>
    otherTheme
      ? css`
          font-size: ${RFValue(14)}px;
        `
      : css`
          font-size: ${RFValue(12)}px;
        `};
`;
