import {KeyboardTypeOptions} from 'react-native';

export interface InputFormProps {
  isEditable?: boolean;
  label: string;
  maxLength?: number;
  onChangeValue: (text: string) => void;
  value: string;
  placeHolder: string;
  required?: boolean;
  secureText?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
