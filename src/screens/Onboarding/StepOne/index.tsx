import React, {useState} from 'react';

import {RFValue} from 'react-native-responsive-fontsize';

import {Container, Content, FormatContent, InputContent, Title} from './styles';

import BG from '../../../assets/global/png/bgOnboarding.png';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';

import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

// Components
import {ProfileSelector} from '../../../components/Onboarding/ProfileSelector';
import {Button} from '../../../components/global/Button';
import {InputForm} from '../../../components/global/InputForm';
import {ViewLinear} from '../../Auth/Signin/styles';

export function StepOne() {
  const schema = Yup.object({
    name: Yup.string().required('Informe seu nome'),
  });

  const {
    control,
    // handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <Container source={BG}>
      <HeaderNavigation bt={true} />

      <Content>
        <Title>Complete seu cadastro para começar suas conexões</Title>

        <ProfileSelector
          text="Adicionar foto"
          type="selectPhoto"
          photo={require('../../../assets/global/png/otherIconAvatar.png')}
        />

        <InputContent>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            placeholderTextColor={'#707070'}
            style={{marginTop: RFValue(50)}}
          />
          <ViewLinear />
        </InputContent>

        <InputContent>
          <InputForm
            name="username"
            control={control}
            placeholder="Nome de usuário"
            placeholderTextColor={'#707070'}
          />
          <ViewLinear />
        </InputContent>

        <FormatContent>
          <ProfileSelector
            text="Data de nascimento"
            type="selectDate"
            photo={require('../../../assets/global/png/otherIconAvatar.png')}
          />
        </FormatContent>

        <FormatContent>
          <ProfileSelector
            text="Gênero"
            type="selectGenre"
            photo={require('../../../assets/global/png/otherIconAvatar.png')}
          />
        </FormatContent>

        <FormatContent>
          <InputForm
            name="bio"
            control={control}
            placeholder="Bio"
            placeholderTextColor={'#707070'}
            multiline={true}
            style={{
              borderWidth: 1,
              borderColor: '#2FA5FB',
              borderRadius: 11,
              paddingTop: 18,
              paddingLeft: 18,
              paddingRight: 18,
              paddingBottom: 138,
            }}
          />
        </FormatContent>

        <Button
          style={{marginTop: RFValue(20), marginBottom: RFValue(30)}}
          title="Continuar"
          type={true}
          full={true}
        />
      </Content>
    </Container>
  );
}
