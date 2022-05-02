import React from 'react';
import {View, Modal, Pressable} from 'react-native';
import {CustomModalProps} from '@interfaces/components/modal';
import modalStyles from './modal.styles';

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  children,
  handleCLoseModal,
}) => {
  return (
    <View>
      <View style={modalStyles.container}>
        <Modal animationType="fade" transparent={true} visible={isVisible}>
          <Pressable style={modalStyles.container} onPress={handleCLoseModal}>
            <View style={modalStyles.content}>{children}</View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
};

export default CustomModal;
