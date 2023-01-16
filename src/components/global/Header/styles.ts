import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: ${RFValue(30)}px;
  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const ButtonDefault = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;
