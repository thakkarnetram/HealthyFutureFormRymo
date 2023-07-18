/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
const HomeScreen = ({navigation, route}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  Immersive.setImmersive(true);
  const {selectedPatientName, selectedPatientId, selectedImage} = route.params;


  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image
            source={require('../Assets/logo.png')}
            style={{
              width: wp('80%'),
              height: hp('7%'),
              marginHorizontal: wp('7%'),
              marginVertical: wp('10%'),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 15,
              width: wp('70%'),
              height: hp('10%'),
              marginVertical: wp('1%'),
              marginHorizontal: wp('10%'),
            }}>
            {selectedImage ? (
              <Image
                source={{uri: selectedImage}}
                style={styles.patientImage}
              />
            ) : (
              <Image
                source={require('../Assets/profile.png')}
                style={styles.patientImage}
              />
            )}
            <View style={styles.patientNameContainer}>
              <Text style={styles.patientText}>{selectedPatientName}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form1', {
                selectedPatientName: selectedPatientName,
                selectedPatientId: selectedPatientId,
              });
            }}>
            <Text style={styles.buttonTextStyle}>
              Spinal Cord Evaluation Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form2', {
                selectedPatientName: selectedPatientName,
                selectedPatientId: selectedPatientId,
              });
            }}>
            <Text style={styles.buttonTextStyle}>
              Neurological Evaluation Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form3', {
                selectedPatientName: selectedPatientName,
                selectedPatientId: selectedPatientId,
              });
            }}>
            <Text style={styles.buttonTextStyle}>
              Musculoskeletal Assessment Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form4', {
                selectedPatientName: selectedPatientName,
                selectedPatientId: selectedPatientId,
              });
            }}>
            <Text style={styles.buttonTextStyle}>Weekly Review Form</Text>
          </TouchableOpacity>
          <Image
            source={require('../Assets/rymo.png')}
            style={{
              width: wp('100%'),
              height: hp('17%'),
              marginVertical: wp('10%'),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    height: hp('100%'),
    width: wp('100%'),
  },
  scrollViewContainer: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#e8e8e8',
    height: hp('100%'),
    width: wp('100%'),
  },
  patientImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
    marginHorizontal: wp('3%'),
  },
  patientText: {
    marginVertical: wp('1.5%'),
    color: '#082173',
    marginHorizontal: wp('3%'),
    fontSize: wp('3%'),
  },
  buttonStyle: {
    marginHorizontal: wp('20%'),
    marginVertical: wp('3%'),
    borderRadius: 20,
    backgroundColor: '#2353B3',
    height: hp('6%'),
    width: wp('60%'),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1.5%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
  },
});

export default HomeScreen;
