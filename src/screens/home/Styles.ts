import styled from 'styled-components/native';


const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }: any) => theme.spacing.padding};
  background-color: ${({ theme }: any) => theme.color.overlay};
`;



export { BackgroundImage, TextContainer};
