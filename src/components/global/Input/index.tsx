import React, {FC, useState} from 'react';
import {TextInputProps} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SvgProps} from 'react-native-svg';

import {
  Container,
  Field,
  ContentIcon,
  ButtonSecurity,
  TextNickNAme,
  isFocused,
  ViewLinear,
  ContainerError,
} from './styles';

export type InputProps = TextInputProps & {
  icon?: FC<SvgProps>;
  iconSecurity?: FC<SvgProps>;
  value?: string;
  isFocused: boolean;
  textDecoration: string;
  typeError: boolean;
  handlePress?: () => void;
};

interface InputRef {
  focus(): void;
}

export function Input({
  icon: Icon,
  iconSecurity: IconSecurity,
  value,
  textDecoration,
  isFocused,
  typeError,
  handlePress,
  ...rest
}: InputProps) {
  // const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(true);

  // function handleInputFocus() {
  //   setIsFocused(true);
  // }

  // function handleInputBlur() {
  //   setIsFocused(false);
  //   // setIsFilled(!!value);
  // }

  return (
    <>
      {typeError ? (
        <ContainerError isFocused={isFocused} typeError={typeError}>
          {Icon ? (
            <ContentIcon>
              <Icon width={RFValue(20)} height={RFValue(20)} />
            </ContentIcon>
          ) : null}
          <Field
            // onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
            // isFocused={isFocused}
            value={value}
            {...rest}
          />
          {IconSecurity ? (
            <ButtonSecurity onPress={handlePress}>
              <IconSecurity width={RFValue(20)} height={RFValue(20)} />
            </ButtonSecurity>
          ) : null}
        </ContainerError>
      ) : (
        <Container isFocused={isFocused} typeError={typeError}>
          {Icon ? (
            <ContentIcon>
              <Icon />
            </ContentIcon>
          ) : null}
          <Field
            // onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
            // isFocused={isFocused}
            value={value}
            {...rest}
          />
          {IconSecurity ? (
            <ButtonSecurity onPress={handlePress}>
              <IconSecurity width={RFValue(20)} height={RFValue(20)} />
            </ButtonSecurity>
          ) : null}
        </Container>
      )}
    </>
  );
}
