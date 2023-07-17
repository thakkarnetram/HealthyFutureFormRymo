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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Immersive from 'react-native-immersive';
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    getLoginTime();
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  Immersive.setImmersive(true);
  const TIME = 2592000000; // 30days in milliseconds
  const getLoginTime = async () => {
    try {
      const value = await AsyncStorage.getItem('loginTime');
      if (!value) {
        saveLoginTime();
      } else if (value !== null) {
        const loginTime = new Date(value);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - loginTime.getTime();
        if (timeDifference > TIME) {
          logout();
          saveLoginTime();
        }
      }
    } catch (error) {
      console.log('error logging out ' + error);
    }
  };

  const saveLoginTime = async () => {
    try {
      await AsyncStorage.setItem('loginTime', new Date().toString());
    } catch (error) {
      console.log('Error saving the Key', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      if (navigation.canGoBack()) {
        navigation.goBack(); // First go back
      }
      if (navigation.canGoBack()) {
        navigation.goBack(); // Second go back
      }
    } catch (error) {
      console.log('couldnt remove' + error);
    }
  };

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
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form1');
            }}>
            <Text style={styles.buttonTextStyle}>
              Spinal Cord Evaluation Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form2');
            }}>
            <Text style={styles.buttonTextStyle}>
              Neurological Evaluation Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form3');
            }}>
            <Text style={styles.buttonTextStyle}>
              Musculoskeletal Assessment Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Form4');
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
