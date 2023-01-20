import React, {useState} from 'react';

import {
  Container,
  ContentButton,
  ContentInput,
  ViewLinear,
  ContentFooter,
  ContentForgot,
  ForgotText,
} from './styles';

import BG from '../../../assets/global/png/bgContainer.png';
import IconEyeClose from '../../../assets/global/svg/iconEyeClosed.svg';
import IconEye from '../../../assets/global/svg/iconEye.svg';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';
import {Button} from '../../../components/global/Button';
import {InputForm} from '../../../components/global/InputForm';

import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export function Signin() {
  const navigation = useNavigation();

  const [onFocus, setOnFocus] = useState<'email' | 'password' | 'phone'>('');
  const [isError, setIsError] = useState<boolean>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLinear, setLinear] = useState<boolean>(false);

  const schema = yup.object({
    email: yup.string().email('E-mail invalido').required('Informe seu email'),
    password: yup
      .string()
      // .min(8, ' senha deve conter no minimo 8 digitos')
      .required('Senha obrigatoria'),
  });

  const {
    control,
    // handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function cleanError(value) {
    setIsError(false);
    setOnFocus(value);
  }

  function changeTypeEmail() {
    setLinear(false);
  }

  function changeTypePhone() {
    setLinear(true);
  }

  return (
    <Container source={BG}>
      <HeaderNavigation title="Login" bg={true} bt={true} />
      <ContentButton>
        <Button
          title="Email"
          type={!isLinear}
          onPress={() => changeTypeEmail()}
        />
        <Button
          title="Telefone"
          type={isLinear}
          onPress={() => changeTypePhone()}
        />
      </ContentButton>
      <ContentInput>
        {!isLinear ? (
          <InputForm
            name="email"
            control={control}
            typeError={isError}
            placeholder="Email"
            placeholderTextColor={'#707070'}
            onFocus={() => cleanError('email')}
            isFocused={onFocus === 'email'}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        ) : (
          <InputForm
            name="phone"
            control={control}
            typeError={isError}
            placeholder="Telefone"
            placeholderTextColor={'#707070'}
            onFocus={() => cleanError('phone')}
            isFocused={onFocus === 'phone'}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        )}
        <ViewLinear />
        <InputForm
          control={control}
          name="password"
          typeError={isError}
          placeholder="Senha"
          placeholderTextColor={'#707070'}
          onFocus={() => cleanError('password')}
          isFocused={onFocus === 'password'}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          handlePress={() => setShowPassword(!showPassword)}
          iconSecurity={showPassword ? IconEye : IconEyeClose}
        />
        <ViewLinear />
      </ContentInput>
      <ContentForgot>
        <ForgotText>Esqueceu sua senha ?</ForgotText>
      </ContentForgot>
      <ContentFooter>
        <Button
          title="Entrar"
          type={true}
          full={true}
          onPress={() => navigation.navigate('TabRoutes')}
        />
      </ContentFooter>
    </Container>
  );
}
