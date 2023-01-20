import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Content,
  Avatar,
  ButtonDefault,
  ContentLogo,
  ContentAvatar,
  ButtonDefaultBack,
  ContentName,
  TextName,
  Text,
} from './styles';

import IconArrow from '../../../assets/global/svg/arrowBack.svg';
import IconLogo from '../../../assets/global/svg/iconLogo.svg';
import IconNotify from '../../../assets/global/svg/iconNotify.svg';
import IconUser from '../../../assets/global/svg/iconUser.svg';

import bgHeader from '../../../assets/global/png/bgHeaderUser.png';

type IPropsHeader = TouchableOpacityProps & {
  data?: any;
  type?: boolean;
  bt?: boolean;
  bn?: boolean;
};

export function HeaderUser({data, type, bt, bn, ...rest}: IPropsHeader) {
  const navigation = useNavigation();

  return (
    <Container source={bgHeader}>
      <ContentLogo>
        <IconLogo />
      </ContentLogo>
      <Content {...rest} type={type}>
        {bt ? (
          <ButtonDefaultBack onPress={() => navigation.goBack()}>
            <IconArrow />
          </ButtonDefaultBack>
        ) : (
          <ButtonDefault />
        )}
        <ContentAvatar>
          {data.avatar ? (
            <Avatar
              source={{
                uri: data.avatar,
              }}
            />
          ) : (
            <IconUser />
          )}
        </ContentAvatar>

        {bn ? (
          <ButtonDefault>
            <IconNotify width={RFValue(40)} height={RFValue(40)} />
          </ButtonDefault>
        ) : (
          <ButtonDefault />
        )}
      </Content>
      <ContentName>
        <Text>Olá</Text>
        {data.name ? <TextName>, {data.name}</TextName> : null}
      </ContentName>
    </Container>
  );
}
