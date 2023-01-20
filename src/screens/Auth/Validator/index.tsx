import React, {useState} from 'react';

import {
  Container,
  ContentDescription,
  ContentInput,
  ViewLinear,
  ContentFooter,
  Description,
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
import {useNavigation} from '@react-navigation/native';

export function Validator() {
  const navigation = useNavigation();

  const [onFocus, setOnFocus] = useState<'email' | 'password' | 'phone'>('');
  const [isError, setIsError] = useState<boolean>();

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

  function handleNavigation(route: string) {
    navigation.navigate(route);
  }

  return (
    <Container source={BG}>
      <HeaderNavigation title="Conecte-se" bg={true} bt={true} />
      <ContentDescription>
        <Description>
          Insira seu email para receber o código de validação tuknuk.
        </Description>
      </ContentDescription>
      <ContentInput>
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
        <ViewLinear />
      </ContentInput>
      <ContentFooter>
        <Button
          title="Continuar"
          type={true}
          full={true}
          onPress={() => handleNavigation('Verify')}
        />
      </ContentFooter>
    </Container>
  );
}
