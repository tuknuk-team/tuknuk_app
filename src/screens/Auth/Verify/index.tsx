import React, {useState, useEffect} from 'react';

import {
  Container,
  ContentDescription,
  ViewLinear,
  ContentInput,
  ContentFooter,
  Description,
  ResultTitle,
  ViewPin,
  Body,
  ViewButton,
  SubTitle,
} from './styles';

import BG from '../../../assets/global/png/bgContainer.png';

import {Header} from '../../../components/global/Header';
import {Button} from '../../../components/global/Button';

import {useNavigation} from '@react-navigation/native';

export function Verify() {
  const navigation = useNavigation();

  const [isSetOne, onSetOne] = useState('');
  const [isSetTwo, onSetTwo] = useState('');
  const [isSetThree, onSetThree] = useState('');
  const [isSetFor, onSetFor] = useState('');
  const [isSetFive, onSetFive] = useState('');
  const [isSetSix, onSetSix] = useState('');
  const [isSetSeven, onSetSeven] = useState('');
  const [isSetEight, onSetEight] = useState('');
  const [isSetNine, onSetNine] = useState('');
  const [isSetZero, onSetZero] = useState('');
  const [isResult, setResult] = useState();

  useEffect(() => {
    const result =
      isSetOne + isSetTwo + isSetThree + isSetFor + isSetFive + isSetSix;
    setResult(result);

    if (result?.length >= 4) {
      handleNavigate();
    }
  }, [
    navigation,
    isSetOne,
    isSetTwo,
    isSetThree,
    isSetFor,
    isSetFive,
    isSetSix,
    isSetSeven,
    isSetEight,
    isSetNine,
    isSetZero,
  ]);

  function handleNavigate() {
    navigation.navigate('HomeDesable');
  }

  function ClearPin() {
    onSetOne('');
    onSetTwo('');
    onSetThree('');
    onSetFor('');
    onSetFive('');
    onSetSix('');
    onSetSeven('');
    onSetEight('');
    onSetNine('');
    onSetZero('');
  }

  function handleGoBack() {
    console.log('aq');
    ClearPin();
  }

  function getPinWrite(value: string) {
    if (isSetOne === '') {
      onSetOne(value);
      return;
    }
    if (isSetTwo === '') {
      onSetTwo(value);
      return;
    }
    if (isSetThree === '') {
      onSetThree(value);
      return;
    }
    if (isSetFor === '') {
      onSetFor(value);
      return;
    }
  }

  return (
    <Container source={BG}>
      <Header title="Conecte-se" bg={true} bt={true} />
      <ContentDescription>
        <Description>
          Insira o código de validação enviado para *****@gmail.com
        </Description>
      </ContentDescription>

      <ViewPin>
        <ResultTitle>{isResult}</ResultTitle>
        <ViewLinear />
      </ViewPin>
      <Body>
        <ViewButton onPress={() => getPinWrite('1')}>
          <SubTitle>1</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('2')}>
          <SubTitle>2</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('3')}>
          <SubTitle>3</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('4')}>
          <SubTitle>4</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('5')}>
          <SubTitle>5</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('6')}>
          <SubTitle>6</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('7')}>
          <SubTitle>7</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('8')}>
          <SubTitle>8</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('9')}>
          <SubTitle>9</SubTitle>
        </ViewButton>
        <ViewButton onPress={() => getPinWrite('0')}>
          <SubTitle>0</SubTitle>
        </ViewButton>
      </Body>
      <ContentFooter>
        <Description>Reenviar código</Description>
      </ContentFooter>
    </Container>
  );
}
