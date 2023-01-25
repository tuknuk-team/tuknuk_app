import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  type: 'male' | 'female';
}

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const FormatContent = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const ContentDescription = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(30)}px;
  margin-top: ${RFValue(20)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.textButton};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const ContentInput = styled.View`
  padding: ${RFValue(20)}px ${RFValue(30)}px;
  margin-top: ${RFValue(10)}px;
  justify-content: space-evenly;
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

export const ContentFooter = styled.View`
  padding: ${RFValue(30)}px;
  width: 100%;
  flex: 1;
  margin-bottom: ${RFValue(70)}px;
  align-items: center;
  justify-content: flex-end;
`;

//
export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0px 40px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
  margin-bottom: ${RFValue(58)}px;
`;

export const InputContent = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

// Genre
export const GenreContent = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const GenreTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.colorText};
  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ContainerGenre = styled.TouchableOpacity``;

export const Male = styled(LinearGradient).attrs<Props>(props => ({
  colors:
    props.type === 'male' ? ['#7F4AFC', '#4AAEFD'] : ['#243561', '#36477B'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
}))`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(12)}px ${RFValue(70)}px;
  border-radius: 7px;
  margin-bottom: ${RFValue(9)}px;
`;
export const Female = styled(LinearGradient).attrs<Props>(props => ({
  colors:
    props.type === 'female' ? ['#7F4AFC', '#4AAEFD'] : ['#243561', '#36477B'],
  start: {x: 1, y: 1},
  end: {x: 0, y: 1},
}))`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(12)}px ${RFValue(70)}px;
  border-radius: 7px;
`;

export const MaleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
`;
export const FemaleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.colorText};
  text-align: center;
`;
