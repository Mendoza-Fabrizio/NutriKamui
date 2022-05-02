import React from 'react';
import {View, Text, TextInput} from 'react-native';
import inputFormStyles from './inputForm.styles';
import {_GeneralColors} from '@colors/index';
import {InputFormProps} from '@interfaces/components/inputForm';

const InputForm: React.FC<InputFormProps> = ({
  isEditable = true,
  maxLength = 1000,
  onChangeValue,
  label,
  value,
  placeHolder,
  required = false,
  secureText = false,
  keyboardType,
}) => {
  return (
    <View style={inputFormStyles.container}>
      <View>
        <Text style={inputFormStyles.label}>{label}</Text>
        {required && <Text style={inputFormStyles.required}>{' *'}</Text>}
      </View>
      <TextInput
        secureTextEntry={secureText}
        maxLength={maxLength}
        editable={isEditable}
        style={inputFormStyles.textInput}
        keyboardType={keyboardType}
        onChangeText={onChangeValue}
        value={value}
        placeholderTextColor={_GeneralColors.lightGray}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default InputForm;
