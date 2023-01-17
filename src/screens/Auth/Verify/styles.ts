import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const ContentDescription = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(30)}px;
  margin-top: ${RFValue(0)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const ViewPin = styled.View`
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(0)}px ${RFValue(45)}px;
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

export const Body = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ViewButton = styled.TouchableOpacity`
  width: ${RFValue(91)}px;
  height: ${RFValue(91)}px;
  align-items: center;
  justify-content: center;
`;

export const ResultTitle = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-size: ${RFValue(30)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  letter-spacing: ${RFValue(10)}px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const ContentFooter = styled.View`
  flex: 1;
  margin-bottom: ${RFValue(30)}px;
  align-items: center;
  justify-content: flex-end;
  /* border-bottom-width: 1px; */
  border-color: ${({theme}) => theme.colors.textButton};
`;
