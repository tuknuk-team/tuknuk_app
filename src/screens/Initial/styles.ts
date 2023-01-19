import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(30)}px;
  padding: ${RFValue(20)}px ${RFValue(30)}px;
  height: ${RFValue(150)}px;
  justify-content: space-between;
`;
