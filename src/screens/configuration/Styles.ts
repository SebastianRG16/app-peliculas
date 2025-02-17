import styled from 'styled-components/native';

interface ColorButtonProps {
  backgroundColor: string;
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Section = styled.View`
  margin-vertical: 20px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ColorButton = styled.TouchableOpacity<{
  backgroundColor: string;
  isSelected: boolean;
}>`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({backgroundColor}: ColorButtonProps) => backgroundColor};
  border-width: ${({isSelected} : ColorButtonProps) => (isSelected ? '2px' : '0px')};
  border-color: ${({isSelected} : ColorButtonProps) => (isSelected ? '#000' : 'transparent')};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const StyledButton = styled.TouchableOpacity<{isSelected: boolean}>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: ${({isSelected} : ColorButtonProps) => (isSelected ? '#ddd' : '#f4f4f4')};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;
