import styled from 'styled-components';

const colors = {
  lightGray: '#6c7275',
};

interface FormBoxProps {
  $width: string;
  $display?: 'block' | 'flex' | 'grid';
  $direction?: 'row' | 'column' | 'column-reverse';
  $maxHeight?: string;
  $maxWidth?: string;
  $border?: string;
  $borderRadius?: string;
}

export const FormBox = styled.form<FormBoxProps>`
  width: ${(props) => props.$width || '100%'};
  display: ${(props) => props.$display || 'block'};
  flex-direction: ${(props) => props.$direction || 'row'};
  max-width: ${(props) => props.$maxWidth || '100%'};
  max-height: ${(props) => props.$maxHeight || '400px'};
  border: ${(props) => props.$border || `1.5px solid ${colors.lightGray}`};
  border-radius: ${(props) => props.$borderRadius || '4px'};
`;
