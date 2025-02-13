import React, {useState} from 'react';
import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import {useThemeStore} from '../../storage/storage';
import {TextCom} from '../../components/text/TextCom';
import styles from './Styles';

export type Type =
  | 'succes'
  | 'primary'
  | 'warning'
  | 'secondary'
  | 'tertiary'
  | 'neutral';

export const Configuration = () => {
  const {setNavbarColor, setButtonType} = useThemeStore();
  const [selectedButtonType, setSelectedButtonType] = useState<Type>('primary');
  const [selectedNavbarColor, setSelectedNavbarColor] = useState<string>('');

  const handleButtonTypeChange = (type: Type) => {
    setSelectedButtonType(type);
    setButtonType(type);
  };

  const handleNavbarColorSelection = (color: string) => {
    setSelectedNavbarColor(color);
    setNavbarColor(color);
  };

  const navbarColors = ['#000000', '#FFFFFF', '#808080', '#0000FF'];

  return (
    <View style={styles.container}>
      <TextCom
        text="CONFIGURACION"
        size="xl1"
        center="center"
        fontVariant="bold"
      />

      <View style={styles.containerSecondarys}>
        <TextCom text="Color de la barra de navegación:" size="sm2" />
        <View style={styles.navbar}>
          {navbarColors.map(color => (
            <TouchableOpacity
            key={color}
            onPress={() => handleNavbarColorSelection(color)}
            style={[
              styles.colorButton,
              { backgroundColor: color },
              selectedNavbarColor === color ? styles.selectedColorButton : null,
            ]}
          />
          ))}
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <TextCom text="Tipo de botón:" size="sm2" />
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10}}>
          {[
            'succes',
            'primary',
            'warning',
            'secondary',
            'tertiary',
            'neutral',
          ].map(type => (
            <TouchableOpacity
              key={type}
              onPress={() => handleButtonTypeChange(type as Type)}
              style={[
                styles.button,
                selectedButtonType === type
                  ? styles.buttonSelected
                  : styles.buttonUnselected,
              ]}>
              <Text style={styles.buttonText}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};
