import React from 'react';

import {
  AddPhoto,
  Container,
  DateViewLinear,
  SelectDate,
  SelectProfilePhoto,
  Title,
  UserPhoto,
} from './styles';

interface Props {
  text: string;
  photo?: any;
  type: 'selectPhoto' | 'selectDate' | 'selectGenre';
  datePress?: any;
  dateValue?: string;
}

export function ProfileSelector({
  text,
  photo,
  type,
  datePress,
  dateValue,
}: Props) {
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
          onPressIn={datePress}
          value={dateValue}
        />

        <DateViewLinear type={type} />
      </AddPhoto>
    </Container>
  );
}
