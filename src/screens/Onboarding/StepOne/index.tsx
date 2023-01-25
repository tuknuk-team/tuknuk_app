import React, {useState} from 'react';

import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Content,
  Female,
  FemaleText,
  FormatContent,
  GenreTitle,
  InputContent,
  Male,
  MaleText,
  GenreContent,
  Title,
  ContainerGenre,
} from './styles';

import BG from '../../../assets/global/png/bgOnboarding.png';

import {HeaderNavigation} from '../../../components/Headers/HeaderNavigation';

import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

// Components
import {ProfileSelector} from '../../../components/Onboarding/ProfileSelector';
import {Button} from '../../../components/global/Button';
import {ViewLinear} from '../../Auth/Signin/styles';
import {Input} from '../../../components/global/Input';

export function StepOne() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [showDate, setShowDate] = useState('');

  const [genreType, setGenreType] = useState('');

  function setMale() {
    setGenreType('male');
  }

  function setFemale() {
    setGenreType('female');
  }

  return (
    <Container source={BG}>
      <HeaderNavigation bt={true} />

      <Content>
        <Title>Complete seu cadastro para começar suas conexões</Title>

        <InputContent>
          <ProfileSelector
            text="Adicionar foto"
            type="selectPhoto"
            photo={require('../../../assets/global/png/otherIconAvatar.png')}
          />
        </InputContent>

        <InputContent>
          <Input placeholder="Name" placeholderTextColor={'#707070'} />
          <ViewLinear />
        </InputContent>

        <InputContent>
          <Input
            placeholder="Nome de usuário"
            placeholderTextColor={'#707070'}
          />
          <ViewLinear />
        </InputContent>

        <FormatContent>
          <ProfileSelector
            text="Data de nascimento"
            type="selectDate"
            datePress={() => setDateOpen(true)}
            dateValue={showDate}
          />
          <DatePicker
            modal
            title="Selecionar data de nascimento"
            confirmText="Selecionar"
            cancelText="Cancelar"
            mode="date"
            date={date}
            open={dateOpen}
            locale="pt"
            onDateChange={setDate}
            onConfirm={date => {
              setDateOpen(false);
              setDate(date);
              setShowDate(date.toLocaleDateString());
            }}
            onCancel={() => {
              setDateOpen(false);
            }}
          />
        </FormatContent>

        <GenreContent>
          <GenreTitle>Gênero</GenreTitle>
          <ContainerGenre onPress={() => setMale()}>
            <Male type={genreType}>
              <MaleText>Masculino</MaleText>
            </Male>
          </ContainerGenre>
          <ContainerGenre onPress={() => setFemale()}>
            <Female type={genreType}>
              <FemaleText>Feminino</FemaleText>
            </Female>
          </ContainerGenre>
        </GenreContent>

        <FormatContent>
          <Input
            placeholder="Bio"
            placeholderTextColor={'#707070'}
            multiline={true}
            style={{
              borderWidth: 1,
              borderColor: '#2FA5FB',
              borderRadius: 11,
              paddingTop: RFValue(18),
              paddingLeft: RFValue(18),
              paddingRight: RFValue(18),
              paddingBottom: RFValue(138),
            }}
          />
        </FormatContent>

        <Button
          style={{marginTop: RFValue(20), marginBottom: RFValue(30)}}
          title="Continuar"
          type={true}
          full={true}
          onPress={() => navigation.navigate('StepTwo')}
        />
      </Content>
    </Container>
  );
}
