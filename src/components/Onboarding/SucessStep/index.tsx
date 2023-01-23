import React from 'react';

import IconSucess from '../../../assets/global/svg/sucess.svg';

import {Container, SubTitle, Title} from './styles';
import {Button} from '../../global/Button';

interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
}

export function SucessStep({title, subTitle, buttonText}: Props) {
  return (
    <Container>
      <IconSucess />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>

      <Button title={buttonText} type={true} />
    </Container>
  );
}
