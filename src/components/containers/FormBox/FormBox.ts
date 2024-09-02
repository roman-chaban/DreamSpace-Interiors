import { styled } from 'styled-components';

const colors = {
  lightGray: '#6c7275',
};

interface FormBoxStyleProps {
  $width: string;
  $display?: 'block' | 'flex' | 'grid';
  $direction?: 'row' | 'column' | 'column-reverse';
  $maxHeight?: string;
  $maxWidth?: string;
  $border?: string;
  $borderRadius?: string;
}

interface FormBoxProps {
  styles?: FormBoxStyleProps;
}

export const FormBox = styled.form<FormBoxProps>`
  width: ${(props) => props.styles?.$width || '100%'};
  display: ${(props) => props.styles?.$display || 'block'};
  flex-direction: ${(props) => props.styles?.$direction || 'row'};
  max-width: ${(props) => props.styles?.$maxWidth || '100%'};
  max-height: ${(props) => props.styles?.$maxHeight || '400px'};
  border: ${(props) =>
    props.styles?.$border || `1.5px solid ${colors.lightGray}`};
  border-radius: ${(props) => props.styles?.$borderRadius || '4px'};
`;
