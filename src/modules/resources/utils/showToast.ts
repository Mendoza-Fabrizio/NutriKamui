import Toast from 'react-native-toast-message';
export enum ToastTypes {
  SUCCESS = 'info',
  WARNING = 'Alerta',
  ERROR = 'Error',
}

interface ToastParams {
  message: string;
  type: ToastTypes;
}

export const showToast = ({message, type}: ToastParams) => {
  switch (type) {
    case ToastTypes.SUCCESS:
      return Toast.show({type: 'info', text1:message});
    case ToastTypes.WARNING:
      return Toast.show({type: 'warning', text1:message});
    case ToastTypes.ERROR:
      return Toast.show({type: 'error', text1:message});
  }
};