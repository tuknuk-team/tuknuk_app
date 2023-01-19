import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.textButton};
`;

export const ContentIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  width: 20%;
`;

export const ButtonDefault = styled.TouchableOpacity``;

export const ViewLinear = styled(LinearGradient).attrs({
  colors: ['#7F4AFC', '#4AAEFD'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
})`
  width: 72%;
  height: 2px;
  align-self: center;
  border-radius: 10px;
`;

export const Content = styled.View`
  padding: ${RFValue(23)}px;
  flex-direction: row;
  align-items: center;
`;

export const ContentInput = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin: ${RFValue(10)}px 0;
  margin-top: ${RFValue(30)}px;
  /* background-color: red; */
  width: 63%;
`;

export const TextInput = styled.TextInput`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.light};
  color: ${({theme}) => theme.colors.textButton};
  text-align: right;
  /* background-color: red; */
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(40)}px;
  padding: 0 ${RFValue(30)}px;
  justify-content: space-between;
`;

export const TextTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.textButton};
  /* text-align: right; */
`;

export const TextUSer = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textButton};
`;

export const ContentHours = styled.View``;

export const Texthours = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textButton};
`;

// export const C;
