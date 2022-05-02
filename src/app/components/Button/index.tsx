import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {CustomButton} from '../../../interfaces/button';
import {_GeneralColors} from '@colors/index';
import buttonStyles from './button.styles';

const Button: React.FC<CustomButton> = ({
  handleOnPress,
  label,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={buttonStyles({disabled}).container}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator
          color={_GeneralColors.secondary}
          size={19}
          style={buttonStyles({disabled}).loading}
        />
      ) : (
        <Text style={buttonStyles({disabled}).label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
