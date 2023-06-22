/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../Redux/index';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import Generateform4 from '../../GenerateHtml/Generateform4';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Form4 = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);
  // Immersive fullScreen
  Immersive.setImmersive(true);
  // managing states
  const dispatch = useDispatch();
  const name = useSelector(state => state.form4.name);
  const date = useSelector(state => state.form4.date);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const patientImageClicked = useSelector(
    state => state.form4.patientImageClicked,
  );
  const patientImagePicked = useSelector(
    state => state.form4.patientImagePicked,
  );
  const therapist = useSelector(state => state.form4.therapist);
  const mainTherapist = useSelector(state => state.form4.mainTherapistName);
  const presentProgress = useSelector(state => state.form4.presentProgress);
  const presentConcern = useSelector(state => state.form4.presentConcern);
  const commentAndPlan = useSelector(state => state.form4.commentAndPlan);
  const planWithPatient = useSelector(state => state.form4.planWithPatient);
  const videoOfProgressTaken = useSelector(
    state => state.form4.videoOfProgressTaken,
  );
  const therapistName = useSelector(state => state.form4.therapistName);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const nameHandler = text => {
    actions.updateNameForm4(text);
  };
  const dateHandler = text => {
    actions.updateDate(text);
  };
  const datePickerHandler = () => {
    setDatePickerVisible(true);
  };
  const dateConfirmHandler = date => {
    actions.updateDate(date);
    setDatePickerVisible(false);
  };
  const therapistHandler = text => {
    actions.updateTherapist(text);
  };
  const mainTherapistHandler = text => {
    actions.updateMainTherapistName(text);
  };
  const presentProgressHandler = text => {
    actions.updatePresentProgress(text);
  };
  const presentConcernHandler = text => {
    actions.updatePresentConcern(text);
  };
  const commentAndPlanHandler = text => {
    actions.updateCommentAndPlan(text);
  };
  const planWithPatientHandler = text => {
    actions.updatePlanWithPatient(text);
  };
  const videoOfProgressTakenHandler = text => {
    actions.updateVideoOfProgressTaken(text);
  };
  const therapistNameHandler = text => {
    actions.updateTherapistName(text);
  };
  // opening camera
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  // Patient image
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updatePatientImageClicked4(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePatientImagePicked4(result.assets[0].uri);
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  // Fetch saved form data
  const fetchFormData = async () => {
    try {
      // Fetch the saved form data from AsyncStorage
      const savedFormData = await AsyncStorage.getItem('form1Data');
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        actions.updateNameForm4(parsedData.name);
        actions.updatePatientImageClicked4(parsedData.patientImageClicked);
        actions.updatePatientImagePicked4(parsedData.patientImagePicked);
        actions.updateTherapist(parsedData.therapist);
        actions.updateMainTherapistName(parsedData.mainTherapistName);
        actions.updatePresentProgress(parsedData.presentProgress);
        actions.updatePresentConcern(parsedData.presentConcern);
        actions.updateCommentAndPlan(parsedData.commentAndPlan);
        actions.updatePlanWithPatient(parsedData.planWithPatient);
        actions.updateVideoOfProgressTaken(parsedData.videoOfProgressTaken);
        actions.updateTherapistName(parsedData.therapistName);
      }
      console.log('data fetched', savedFormData);
      successToast();
    } catch (error) {
      console.log('Error fetching form data:', error);
      errorToast();
    }
  };

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Data Fetched !',
    });
  };

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error Fetching Data !',
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              textAlign: 'center',
              textDecorationLine: 'underline',
              marginVertical: wp('2%'),
            }}>
            Weekly Review Form
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={name}
              onChangeText={nameHandler}
              keyboardType="ascii-capable"
              placeholder="Name"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          {/* Patient Image */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Patient Image
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {patientImagePicked && !patientImageClicked ? (
              <View>
                <Image
                  source={{uri: patientImagePicked}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updatePatientImagePicked4('')}>
                    <Image
                      source={require('../../Assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: patientImagePicked}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {patientImagePicked ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePatientImagePicked4('')}>
                      <Image
                        source={require('../../Assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
            {patientImageClicked && !patientImagePicked ? (
              <View>
                <Image
                  source={{uri: patientImageClicked}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => actions.updatePatientImageClicked4('')}>
                    <Image
                      source={require('../../Assets/cross.png')}
                      style={{
                        tintColor: '#808080',
                        marginHorizontal: wp('20%'),
                        marginVertical: wp('6%'),
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: patientImageClicked}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {patientImageClicked ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePatientImageClicked4('')}>
                      <Image
                        source={require('../../Assets/cross.png')}
                        style={{
                          tintColor: '#808080',
                          marginHorizontal: wp('20%'),
                          marginVertical: wp('6%'),
                          width: 50,
                          height: 50,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            )}
          </View>
          {/* End */}
          <View style={styles.inputFieldContainerDOB}>
            <Text style={styles.selectDOBText}>Date of Occurance :</Text>
            <Text style={styles.dobText}>{date.toLocaleDateString()}</Text>
            <TouchableOpacity
              style={styles.buttonContainerDOB}
              onPress={datePickerHandler}>
              <Text style={styles.buttonTextDOB}>Select Date</Text>
            </TouchableOpacity>
            {datePickerVisible && (
              <DateTimePicker
                value={date}
                mode="date"
                display="calendar"
                onChange={(event, selectedDate) =>
                  dateConfirmHandler(selectedDate || date)
                }
              />
            )}
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={therapist}
              onChangeText={therapistHandler}
              keyboardType="ascii-capable"
              placeholder="Therapist"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={mainTherapist}
              onChangeText={mainTherapistHandler}
              keyboardType="ascii-capable"
              placeholder="Main Therapist"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={presentProgress}
              multiline={true}
              onChangeText={presentProgressHandler}
              keyboardType="ascii-capable"
              placeholder="Present Progress"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={presentConcern}
              multiline={true}
              onChangeText={presentConcernHandler}
              keyboardType="ascii-capable"
              placeholder="Present Concern"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={commentAndPlan}
              multiline={true}
              onChangeText={commentAndPlanHandler}
              keyboardType="ascii-capable"
              placeholder="Comment and Plan"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={planWithPatient}
              multiline={true}
              onChangeText={planWithPatientHandler}
              keyboardType="ascii-capable"
              placeholder="Plan Discussed with Patient"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Progress Video Taken ?</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={videoOfProgressTaken}
                  onValueChange={videoOfProgressTakenHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Yes"
                    value="Yes"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="No"
                    value="No"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={therapistName}
              onChangeText={therapistNameHandler}
              keyboardType="ascii-capable"
              placeholder="Therapist Name"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <Generateform4 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#d1b6b6',
  },
  inputTextContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  newBtn: {
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
    borderRadius: 20,
    backgroundColor: '#2e5db0',
    height: hp('5%'),
    width: wp('35%'),
  },
  newBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
  },
  checkContainer: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginVertical: wp('2.26%'),
    color: 'white',
    fontSize: wp('2.85%'),
    marginHorizontal: wp('5%'),
  },
  inputTextContainerMultiLine: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  inputFieldContainerDOB: {
    width: wp('90%'),
    height: hp('6%'),
    flexDirection: 'row',
    backgroundColor: '#2e5db0',
    borderRadius: 10,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
  },
  selectDOBText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  dobText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('7%'),
  },
  buttonContainerDOB: {
    backgroundColor: '#0a5e78',
    borderRadius: 5,
    padding: 15,
    marginVertical: wp('1%'),
    marginHorizontal: wp('7%'),
    alignSelf: 'center',
  },
  buttonTextDOB: {
    color: 'white',
    fontSize: wp('1.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  genderHead: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('2.3%'),
    marginVertical: hp('2%'),
  },
  bigContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
  },
});

export default Form4;
