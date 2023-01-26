import React from 'react';

import {
  ButtonContent,
  CloseContent,
  Container,
  Content,
  Description,
  Title,
} from './styles';
import {Button} from '../global/Button';

import IconClose from '../../assets/global/svg/close.svg';

interface Props {
  handleClose?: any;
  title?: string;
  description?: string;
  btShow: boolean;
  btTitle?: string;
  icon: any;
}

export function ModalCheckInOut({
  handleClose,
  title,
  description,
  btShow,
  btTitle,
  icon,
}: Props) {
  return (
    <Container>
      <Content>
        <CloseContent onPress={handleClose}>
          <IconClose />
        </CloseContent>

        {icon}
        <Title btHide={btShow}>{title}</Title>
        <Description>{description}</Description>
        <ButtonContent btHide={btShow}>
          <Button title={btTitle} btShow={btShow} type={true} full={true} />
        </ButtonContent>
      </Content>
    </Container>
  );
}
