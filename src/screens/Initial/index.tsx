import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, ContentButton} from './styles';

import BG from '../../assets/global/png/bgInitial.png';

import {HeaderNavigation} from '../../components/Headers/HeaderNavigation';
import {Button} from '../../components/global/Button';

export function Initial() {
  const navigation = useNavigation();

  function Validate() {
    navigation.navigate('Validator');
  }

  function handleNavigation(route: string) {
    navigation.navigate(route);
  }

  return (
    <Container source={BG}>
      <HeaderNavigation title="Conecte-se" bg={false} type={true} />
      <Content>
        {/* <LottieView
          source={require('../assets/animation.json')}
          autoPlay
          loop
        /> */}
        <ContentButton>
          <Button
            title="Cadastrar uma conta"
            type={true}
            full={true}
            // handlePress={() => Validate()}
            onPress={() => handleNavigation('Validator')}
          />
          <Button
            title="Logar em uma conta"
            type={false}
            full={true}
            onPress={() => handleNavigation('Signin')}
            // handlePress={() => signIn()}/
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
