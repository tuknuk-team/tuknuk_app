import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const ImageUSer = styled.Image`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
`;

export const ContentText = styled.View``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  /* border-bottom-width: 1px; */

  /* justify-content: space-between; */
  /* border-bottom-width: 1px; */
  /* width: ${RFValue(50)}px; */
`;

export const ContentBar = styled.View`
  border-bottom-width: 0.5px;
  width: 100%;
  border-color: #707070;
  margin-top: ${RFValue(10)}px;
`;

export const TextUSer = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textButton};
`;

export const TextTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.textButton};
  /* text-align: right; */
`;

export const ContentTitles = styled.View`
  justify-content: space-between;
  /* background-color: red; */
  height: ${RFValue(40)}px;
  margin-right: ${RFValue(70)}px;
  margin-left: ${RFValue(10)}px;
`;

export const ContentHours = styled.View``;

export const Texthours = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textButton};
`;
