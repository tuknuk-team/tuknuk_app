import React from 'react';

import {RFValue} from 'react-native-responsive-fontsize';

import BG from '../../../assets/global/png/bgOnboarding.png';

import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';
import {InputForm} from '../../../components/global/InputForm';
import {ViewLinear} from '../StepOne/styles';
import {Button} from '../../../components/global/Button';

import {Container, Content, FormContent, SubTitle, Title} from './styles';

export function StepTwo() {
  const navigation = useNavigation();
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
        <SubTitle>Profissão</SubTitle>

        <FormContent>
          <InputForm
            name="company"
            control={control}
            placeholder="Empresa"
            placeholderTextColor={'#707070'}
            style={{marginTop: RFValue(27)}}
          />
          <ViewLinear />
          <InputForm
            name="office"
            control={control}
            placeholder="Cargo atual"
            placeholderTextColor={'#707070'}
            style={{marginTop: RFValue(27)}}
          />
          <ViewLinear />
          <InputForm
            name="city"
            control={control}
            placeholder="Cidade"
            placeholderTextColor={'#707070'}
            style={{marginTop: RFValue(27)}}
          />
          <ViewLinear />
          <InputForm
            name="startDate"
            control={control}
            placeholder="Data de início"
            placeholderTextColor={'#707070'}
            style={{marginTop: RFValue(27)}}
            keyboardType="number-pad"
          />
          <ViewLinear />
          <Button
            style={{marginTop: RFValue(69), marginBottom: RFValue(30)}}
            title="Continuar"
            type={true}
            full={true}
            onPress={() => navigation.navigate('StepThree')}
          />
        </FormContent>
      </Content>
    </Container>
  );
}
