import {GestureResponderEvent} from 'react-native';

export interface CustomButton {
  handleOnPress: (event: GestureResponderEvent) => void;
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
}
export interface CustomButtonFilter {
  handleOnPress: (event: GestureResponderEvent) => void;
  label: string;
  isLoading?: boolean;
  image: any;
}
