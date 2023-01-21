import React from 'react';

import {
  AddPhoto,
  ArrowRight,
  Container,
  DateViewLinear,
  Female,
  FemaleText,
  Male,
  MaleText,
  Other,
  OtherText,
  SelectDate,
  SelectGenre,
  SelectProfilePhoto,
  Title,
  UserPhoto,
} from './styles';

interface Props {
  text: string;
  photo: any;
  type: 'selectPhoto' | 'selectDate' | 'selectGenre';
}

export function ProfileSelector({text, photo, type}: Props) {
  return (
    <Container>
      <Title>{text}</Title>

      <AddPhoto>
        <SelectProfilePhoto type={type}>
          <UserPhoto source={photo} />
        </SelectProfilePhoto>

        <SelectDate
          type={type}
          placeholder="DD / MM / YYYY"
          placeholderTextColor={'#707070'}
          keyboardType="number-pad"
        />

        <DateViewLinear type={type} />

        <SelectGenre type={type}>
          <Male>
            <MaleText>Masculino</MaleText>
          </Male>
          <Female>
            <FemaleText>Feminino</FemaleText>
          </Female>
          <Other>
            <OtherText>Outro</OtherText>
            <ArrowRight>&gt;</ArrowRight>
          </Other>
        </SelectGenre>
      </AddPhoto>
    </Container>
  );
}
