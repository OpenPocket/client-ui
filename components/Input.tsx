import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Flex, Box, BaseProps, BoxProps } from 'rebass';
import { FaSortDown } from 'react-icons/fa';
import MaskedInput from 'react-text-mask';

type Theme = import('../theme').themeProptypes;

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  BaseProps & {
    tag?: string;
    label?: string;
    name: string;
    mask?: (string | RegExp)[];
    isLoading?: boolean;
    errorMessage?: string;
    iconRight?: ReactNode;
    placeholder?: string;
    options?: optionProps[];
  };

export type optionProps = {
  disabled?: boolean;
  label: string | number;
  selected?: boolean;
  hidden?: boolean;
  value?: string | number;
};
export type selectProps = Pick<BoxProps, Exclude<keyof BoxProps, 'css'>> & {
  name: string;
  options?: optionProps[];
};

const Select = ({ name, options, value, placeholder, ...etc }: selectProps) => (
  <Box as="select" name={name} value={value || ''} {...etc}>
    {placeholder && (
      <option disabled hidden value="">
        {placeholder}
      </option>
    )}
    {options &&
      options.map(({ label, ...rest }) => (
        <option {...rest} key={label}>
          {label}
        </option>
      ))}
  </Box>
);

const Switcher = ({ tag, name, ...etc }: { tag?: string; name: string; disabled?: boolean }) => {
  switch (tag) {
    case 'masked':
      return <Box as={MaskedInput} name={name} {...etc} />;
    case 'select':
      return <Select name={name} {...etc} />;
    case 'textarea':
      return <Box as="textarea" name={name} {...etc} />;
    default:
      return <Box as="input" name={name} {...etc} />;
  }
};
export const Input = ({
  label,
  isLoading,
  errorMessage,
  name,
  iconRight,
  tag = 'input',
  disabled,
  ...etc
}: InputProps) => {
  return (
    <Box>
      <Switcher data-testid="input" tag={tag} disabled={disabled} name={name} {...etc} />
      {label && <label htmlFor={name}>{label}</label>}
      {tag === 'select' && (
        <FaSortDown size={16} style={{ opacity: 0.25 }} className="input__right" />
      )}
      {iconRight && (
        <Flex aria-hidden="true" className="input__right">
          {iconRight}
        </Flex>
      )}
    </Box>
  );
};
