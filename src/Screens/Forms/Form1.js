/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../Redux/Action-Creators';

const Form1 = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);
  return (
    <SafeAreaView>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Form1;
