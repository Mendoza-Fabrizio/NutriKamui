import {Alert} from 'react-native';

export enum AlertTypes {
  SUCCESS = 'Exito',
  WARNING = 'Alerta',
  ERROR = 'Error',
}

interface AlertParams {
  message: string;
  type: AlertTypes;
}

export const showAlert = ({message, type}: AlertParams) => {
  switch (type) {
    case AlertTypes.SUCCESS:
      return Alert.alert('Exito', message);
    case AlertTypes.WARNING:
      return Alert.alert('Alerta', message);
    case AlertTypes.ERROR:
      return Alert.alert('Ocurrio un Error', message);
  }
};
