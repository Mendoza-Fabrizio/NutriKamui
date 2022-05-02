import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import Modal from '@components/Modal';
import {RootState} from '@redux/store';
import {_GeneralColors} from '@colors/index';
import {LoadingProps} from '@interfaces/components/loading';
import LoadingStyles from './loading.styles'
const Loading: React.FC<LoadingProps | null> = ({isLoading}) => {
  return (
    <Modal isVisible={isLoading}>
      <View style={LoadingStyles.container}>
        <ActivityIndicator size={50} color={_GeneralColors.primary} />
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.ui.isLoading,
});

export default connect(mapStateToProps, null)(Loading);
