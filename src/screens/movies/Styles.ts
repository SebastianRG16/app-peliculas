import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Padding = styled.View`
  padding-vertical: 20px;
`;

export const Card = styled.View`
  margin-bottom: 20px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-horizontal: 4px;
  padding-vertical: 4px;
  border-color: #ccc;
  border-radius: 8px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Information = styled.View`
  gap: 10px;
  padding-horizontal: 20px;
  height: 100%;
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.View`
  width: 200px;
`;

export const Description = styled.View`
  gap: 20px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 400px;
  resize-mode: cover;
`;

export const ButtonBackTo = styled.View`
  padding-horizontal: 10px;
  top: 40px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  padding: 10px;
  border: 1px solid ${({ theme }: any) => theme.color.gray};
  border-radius: ${({ theme }: any) => theme.borderRadius.small};
  background-color: #fff;
`;

