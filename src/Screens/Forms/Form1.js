/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import {Picker} from '@react-native-picker/picker';
import Immersive from 'react-native-immersive';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../Redux/index';
import Generateform1 from '../../GenerateHtml/Generateform1';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Form1 = () => {
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
  const name = useSelector(state => state.form1.name);
  const handDominance = useSelector(state => state.form1.handDominance);
  const age = useSelector(state => state.form1.age);
  const gender = useSelector(state => state.form1.gender);
  const address = useSelector(state => state.form1.address);
  const occupation = useSelector(state => state.form1.occupation);
  const patientImageClicked = useSelector(
    state => state.form1.patientImageClicked,
  );
  const patientImagePicked = useSelector(
    state => state.form1.patientImagePicked,
  );
  const [dooDatePickerVisible, setDooDatePickerVisible] = useState(false);
  const [doaDatePickerVisible, setDoaDatePickerVisible] = useState(false);
  const dateOfOccurance = useSelector(state => state.form1.dateOfOccurance);
  const dateOfAssessment = useSelector(state => state.form1.dateOfAssessment);
  const diagnosis = useSelector(state => state.form1.diagnosis);
  const chiefComplaint = useSelector(state => state.form1.chiefComplaint);
  const history = useSelector(state => state.form1.history);
  const pastMedical = useSelector(state => state.form1.pastMedical);
  const investigation = useSelector(state => state.form1.investigation);
  const attitudeofLimb = useSelector(state => state.form1.attitudeofLimb);
  const externalAids = useSelector(state => state.form1.externalAids);
  const gait = useSelector(state => state.form1.gait);
  const transferAbility = useSelector(state => state.form1.transferAbility);
  const bedSores = useSelector(state => state.form1.bedSores);
  const deformity = useSelector(state => state.form1.deformity);
  const reflexComs = useSelector(state => state.form1.reflexComs);
  const scoringSystem = useSelector(state => state.form1.scoringSystem);
  const asiaScale = useSelector(state => state.form1.asiaScale);
  const longTermGoal = useSelector(state => state.form1.longTermGoal);
  const shortTermGoal = useSelector(state => state.form1.shortTermGoal);
  const remarks = useSelector(state => state.form1.remarks);
  const therapistName = useSelector(state => state.form1.therapistName);
  const clickedImage1 = useSelector(state => state.form1.clickedImage1);
  const clickedImage2 = useSelector(state => state.form1.clickedImage2);
  const clickedImage3 = useSelector(state => state.form1.clickedImage3);
  const clickedImage4 = useSelector(state => state.form1.clickedImage4);
  const clickedImage5 = useSelector(state => state.form1.clickedImage5);
  const pickedImage1 = useSelector(state => state.form1.pickedImage1);
  const pickedImage2 = useSelector(state => state.form1.pickedImage2);
  const pickedImage3 = useSelector(state => state.form1.pickedImage3);
  const pickedImage4 = useSelector(state => state.form1.pickedImage4);
  const pickedImage5 = useSelector(state => state.form1.pickedImage5);

  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const nameHandler = name => {
    actions.updateNameForm1(name);
  };
  const handDominanceHandler = handDominance => {
    actions.updateHandDominanceForm1(handDominance);
  };
  const ageHandler = age => {
    actions.updateAgeForm1(age);
  };

  const genderHandler = gender => {
    actions.updateGenderForm1(gender);
  };
  const addressHandler = address => {
    actions.updateAddressForm1(address);
  };
  const occupationHandler = occupation => {
    actions.updateOccupationForm1(occupation);
  };
  const reflexComsHandler = reflexComs => {
    actions.updateReflexComs(reflexComs);
  };
  const datePickerHandlerDOO = () => {
    setDooDatePickerVisible(true);
  };
  const datePickerHandlerDOA = () => {
    setDoaDatePickerVisible(true);
  };
  const dateConfirmHandlerDOO = dooDate => {
    actions.updateDateofOccuranceForm1(dooDate);
    setDooDatePickerVisible(false);
  };
  const dateConfirmHandlerDOA = doaDate => {
    actions.updateDateofAssessmentForm1(doaDate);
    setDoaDatePickerVisible(false);
  };
  const diagnosisHandler = diagnosis => {
    actions.updateDiagnosisForm1(diagnosis);
  };
  const chiefComplaintHandler = chiefComplaint => {
    actions.updateChiefComplaintForm1(chiefComplaint);
  };
  const historyHandler = history => {
    actions.updateHistoryForm1(history);
  };
  const pastMedicalHandler = pastMedical => {
    actions.updatePastMedicalForm1(pastMedical);
  };
  const investigationHandler = investigation => {
    actions.updateInvestigationForm1(investigation);
  };
  const attitudeofLimbHandler = attitudeofLimb => {
    actions.updateAttitudeofLimbForm1(attitudeofLimb);
  };
  const externalAidsHandler = externalAids => {
    actions.updateExternalAidsForm1(externalAids);
  };
  const gaitHandler = gait => {
    actions.updateGaitForm1(gait);
  };
  const transferAbilityHandler = transferAbility => {
    actions.updateTransferAbilityForm1(transferAbility);
  };
  const bedSoresHandler = bedSores => {
    actions.updateBedSoresForm1(bedSores);
  };
  const deformityHandler = deformity => {
    actions.updateDeformityForm1(deformity);
  };
  const scoringSystemHandler = scoringSystem => {
    actions.updateScoringSystem(scoringSystem);
  };
  const asiaScaleHandler = asiaScale => {
    actions.updateAsiaScale(asiaScale);
  };
  const longTermGoalHandler = longTermGoal => {
    actions.updateLongTermGoal(longTermGoal);
  };
  const shortTermGoalHandler = shortTermGoal => {
    actions.updateShortTermGoal(shortTermGoal);
  };
  const remarksHandler = remarks => {
    actions.updateRemarks(remarks);
  };
  const therapistNameHandler = therapistName => {
    actions.updateTherapistNameForm1(therapistName);
  };
  // opening camera
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  // Patient image
  const openCamera0 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updatePatientImageClicked1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery0 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePatientImagePicked1(result.assets[0].uri);
  };
  // 1
  const openCamera1 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage1F1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery1 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage1F1(result.assets[0].uri);
  };
  // 2
  const openCamera2 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage2F1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery2 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage2F1(result.assets[0].uri);
  };
  // 3
  const openCamera3 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage3F1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery3 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage3F1(result.assets[0].uri);
  };
  // 4
  const openCamera4 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage4F1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery4 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage4F1(result.assets[0].uri);
  };
  // 5
  const openCamera5 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage5F1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery5 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage5F1(result.assets[0].uri);
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
        actions.updateNameForm1(parsedData.name);
        actions.updateHandDominanceForm1(parsedData.handDominance);
        actions.updateAgeForm1(parsedData.age);
        actions.updateGenderForm1(parsedData.gender);
        actions.updateAddressForm1(parsedData.address);
        actions.updateOccupationForm1(parsedData.occupation);
        actions.updateDiagnosisForm1(parsedData.diagnosis);
        actions.updateChiefComplaintForm1(parsedData.chiefComplaint);
        actions.updateHistoryForm1(parsedData.history);
        actions.updatePastMedicalForm1(parsedData.pastMedical);
        actions.updateInvestigationForm1(parsedData.investigation);
        actions.updateAttitudeofLimbForm1(parsedData.attitudeofLimb);
        actions.updateExternalAidsForm1(parsedData.externalAids);
        actions.updateGaitForm1(parsedData.gait);
        actions.updateTransferAbilityForm1(parsedData.transferAbility);
        actions.updateBedSoresForm1(parsedData.bedSores);
        actions.updateReflexComs(parsedData.reflexComs);
        actions.updateDeformityForm1(parsedData.deformity);
        actions.updateScoringSystem(parsedData.scoringSystem);
        actions.updateAsiaScale(parsedData.asiaScale);
        actions.updateLongTermGoal(parsedData.longTermGoal);
        actions.updateShortTermGoal(parsedData.shortTermGoal);
        actions.updateRemarks(parsedData.remarks);
        actions.updateTherapistNameForm1(parsedData.therapistName);
        actions.updateClickedImage1F1(parsedData.clickedImage1);
        actions.updatePickedImage1F1(parsedData.pickedImage1);
        actions.updateClickedImage2F1(parsedData.clickedImage2);
        actions.updatePickedImage2F1(parsedData.pickedImage2);
        actions.updateClickedImage3F1(parsedData.clickedImage3);
        actions.updatePickedImage3F1(parsedData.pickedImage3);
        actions.updateClickedImage4F1(parsedData.clickedImage4);
        actions.updatePickedImage4F1(parsedData.pickedImage4);
        actions.updateClickedImage5F1(parsedData.clickedImage5);
        actions.updatePickedImage5F1(parsedData.pickedImage5);
        actions.updatePatientImageClicked1(parsedData.patientImageClicked);
        actions.updatePatientImagePicked1(parsedData.patientImagePicked);
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
            Spinal Cord Evaluation Form
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={name}
              onChangeText={nameHandler}
              keyboardType="ascii-capable"
              placeholder="Name"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={age}
              onChangeText={ageHandler}
              keyboardType="numeric"
              placeholder="Age"
              placeholderTextColor="#FFFFFF"
              style={styles.age}
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
              <TouchableOpacity onPress={openGallery0} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera0} style={styles.newBtn}>
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
                    onPress={() => actions.updatePatientImagePicked1('')}>
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
                      onPress={() => actions.updatePatientImagePicked1('')}>
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
                    onPress={() => actions.updatePatientImageClicked1('')}>
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
                      onPress={() => actions.updatePatientImageClicked1('')}>
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
          <View style={styles.inputTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Select Gender</Text>
              <View style={styles.bigContainer}>
                <Picker selectedValue={gender} onValueChange={genderHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Male"
                    value="Male"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="Female"
                    value="Female"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Hand Dominance</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={handDominance}
                  onValueChange={handDominanceHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="Left"
                    value="Left"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="Right"
                    value="Right"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={address}
              onChangeText={addressHandler}
              keyboardType="ascii-capable"
              placeholder="Address"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={occupation}
              onChangeText={occupationHandler}
              keyboardType="ascii-capable"
              placeholder="Occupation"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={diagnosis}
              onChangeText={diagnosisHandler}
              keyboardType="ascii-capable"
              placeholder="Diagnosis"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputFieldContainerDOB}>
            <Text style={styles.selectDOBText}>Date of Occurance :</Text>
            <Text style={styles.dobText}>
              {dateOfOccurance.toLocaleDateString()}
            </Text>
            <TouchableOpacity
              style={styles.buttonContainerDOB}
              onPress={datePickerHandlerDOO}>
              <Text style={styles.buttonTextDOB}>Select Date</Text>
            </TouchableOpacity>
            {dooDatePickerVisible && (
              <DateTimePicker
                value={dateOfOccurance}
                mode="date"
                display="calendar"
                onChange={(event, selectedDate) =>
                  dateConfirmHandlerDOO(selectedDate || dateOfOccurance)
                }
              />
            )}
          </View>
          <View style={styles.inputFieldContainerDOE}>
            <Text style={styles.selectDOBText}>Date of Assessment :</Text>
            <Text style={styles.doeText}>
              {dateOfAssessment.toLocaleDateString()}
            </Text>
            <TouchableOpacity
              style={styles.buttonContainerDOE}
              onPress={datePickerHandlerDOA}>
              <Text style={styles.buttonTextDOE}>Select Date</Text>
            </TouchableOpacity>
            {doaDatePickerVisible && (
              <DateTimePicker
                value={dateOfAssessment}
                mode="date"
                display="default"
                onChange={(event, selectedDateDOE) =>
                  dateConfirmHandlerDOA(selectedDateDOE || dateOfAssessment)
                }
              />
            )}
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={chiefComplaint}
              multiline={true}
              numberOfLines={4}
              onChangeText={chiefComplaintHandler}
              keyboardType="ascii-capable"
              placeholder="Chief Complaint"
              placeholderTextColor="#FFFFFF"
              style={styles.complaintText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={history}
              multiline={true}
              onChangeText={historyHandler}
              keyboardType="ascii-capable"
              placeholder="History"
              placeholderTextColor="#FFFFFF"
              style={styles.history}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={pastMedical}
              multiline={true}
              numberOfLines={4}
              onChangeText={pastMedicalHandler}
              keyboardType="ascii-capable"
              placeholder="Past Medical / Surgical"
              placeholderTextColor="#FFFFFF"
              style={styles.addressedByText}
            />
          </View>
          <View style={styles.inputTextContainerMultiLine}>
            <TextInput
              value={investigation}
              multiline={true}
              numberOfLines={4}
              onChangeText={investigationHandler}
              keyboardType="ascii-capable"
              placeholder="Investigation"
              placeholderTextColor="#FFFFFF"
              style={styles.diagnosisText}
            />
          </View>
          {/* Image 1 */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery1} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera1} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {pickedImage1 && !clickedImage1 ? (
              <View>
                <Image
                  source={{uri: pickedImage1}}
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
                    onPress={() => actions.updatePickedImage1F1('')}>
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
                  source={{uri: pickedImage1}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {pickedImage1 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePickedImage1F1('')}>
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
            {clickedImage1 && !pickedImage1 ? (
              <View>
                <Image
                  source={{uri: clickedImage1}}
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
                    onPress={() => actions.updateClickedImage1F1('')}>
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
                  source={{uri: clickedImage1}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImage1 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateClickedImage1F1('')}>
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
          {/* Image 2 */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery2} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera2} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {pickedImage2 && !clickedImage2 ? (
              <View>
                <Image
                  source={{uri: pickedImage2}}
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
                    onPress={() => actions.updatePickedImage2F1('')}>
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
                  source={{uri: pickedImage2}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {pickedImage2 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePickedImage2F1('')}>
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
            {clickedImage2 && !pickedImage2 ? (
              <View>
                <Image
                  source={{uri: clickedImage2}}
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
                    onPress={() => actions.updateClickedImage2F1('')}>
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
                  source={{uri: clickedImage2}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImage2 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateClickedImage2F1('')}>
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
          {/* Image 3 */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery3} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera3} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {pickedImage3 && !clickedImage3 ? (
              <View>
                <Image
                  source={{uri: pickedImage3}}
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
                    onPress={() => actions.updatePickedImage3F1('')}>
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
                  source={{uri: pickedImage3}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {pickedImage3 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePickedImage3F1('')}>
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
            {clickedImage3 && !pickedImage3 ? (
              <View>
                <Image
                  source={{uri: clickedImage3}}
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
                    onPress={() => actions.updateClickedImage3F1('')}>
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
                  source={{uri: clickedImage3}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImage3 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateClickedImage3F1('')}>
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
          {/* Image 4 */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery4} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera4} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {pickedImage4 && !clickedImage4 ? (
              <View>
                <Image
                  source={{uri: pickedImage4}}
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
                    onPress={() => actions.updatePickedImage4F1('')}>
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
                  source={{uri: pickedImage4}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {pickedImage4 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePickedImage4F1('')}>
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
            {clickedImage4 && !pickedImage4 ? (
              <View>
                <Image
                  source={{uri: clickedImage4}}
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
                    onPress={() => actions.updateClickedImage4F1('')}>
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
                  source={{uri: clickedImage4}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImage4 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateClickedImage4F1('')}>
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
          {/* Image 5*/}
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity onPress={openGallery5} style={styles.newBtn}>
                <Text style={styles.newBtnText}>Select Image</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openCamera5} style={styles.newBtn}>
              <Text style={styles.newBtnText}>Click Image</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {pickedImage5 && !clickedImage5 ? (
              <View>
                <Image
                  source={{uri: pickedImage5}}
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
                    onPress={() => actions.updatePickedImage5F1('')}>
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
                  source={{uri: pickedImage5}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {pickedImage5 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updatePickedImage5F1('')}>
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
            {clickedImage5 && !pickedImage5 ? (
              <View>
                <Image
                  source={{uri: clickedImage5}}
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
                    onPress={() => actions.updateClickedImage5F1('')}>
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
                  source={{uri: clickedImage5}}
                  style={{
                    marginHorizontal: wp('15%'),
                    marginVertical: wp('6%'),
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                  }}
                />
                {clickedImage5 ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => actions.updateClickedImage5F1('')}>
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
          {/* New Section */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('5%'),
              textDecorationLine: 'underline',
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            On Observation
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={attitudeofLimb}
              onChangeText={attitudeofLimbHandler}
              keyboardType="ascii-capable"
              placeholder="Attitude of Limb"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={externalAids}
              onChangeText={externalAidsHandler}
              keyboardType="ascii-capable"
              placeholder="External Aids "
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={gait}
              onChangeText={gaitHandler}
              keyboardType="ascii-capable"
              placeholder="Gait"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={transferAbility}
              onChangeText={transferAbilityHandler}
              keyboardType="ascii-capable"
              placeholder="Transfer Ability"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={bedSores}
              onChangeText={bedSoresHandler}
              keyboardType="ascii-capable"
              placeholder="Bed Sores"
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={deformity}
              onChangeText={deformityHandler}
              keyboardType="ascii-capable"
              placeholder="Deformity "
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
            />
          </View>
          {/* New Section */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('5%'),
              textDecorationLine: 'underline',
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            On Examination
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1.5%'),
            }}>
            Reflex
          </Text>
          <View style={styles.inputTextContainerBig}>
            <TextInput
              value={reflexComs}
              multiline={true}
              onChangeText={reflexComsHandler}
              keyboardType="ascii-capable"
              placeholder="Comments"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Norton Pressure Score Risk Assessment Scale Scoring System
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={scoringSystem}
              onChangeText={scoringSystemHandler}
              keyboardType="ascii-capable"
              placeholder="Score"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Asia Scale
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={asiaScale}
              onChangeText={asiaScaleHandler}
              keyboardType="ascii-capable"
              placeholder="Scale"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={longTermGoal}
              onChangeText={longTermGoalHandler}
              keyboardType="ascii-capable"
              placeholder="Long Term Goal"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={shortTermGoal}
              onChangeText={shortTermGoalHandler}
              keyboardType="ascii-capable"
              placeholder="Short Term Goal"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={remarks}
              onChangeText={remarksHandler}
              keyboardType="ascii-capable"
              placeholder="Remarks"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={therapistName}
              onChangeText={therapistNameHandler}
              keyboardType="ascii-capable"
              placeholder="Therapist Name"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <Generateform1 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputFieldContainerSHARE: {
    width: wp('80%'),
    height: hp('5%'),
    marginVertical: wp('10%'),
    marginHorizontal: wp('10%'),
    flexDirection: 'column',
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 50,
    elevation: 10,
  },
  exportBtn: {
    alignItems: 'center',
  },
  exportText: {
    fontSize: hp('2%'),
    color: 'white',
    marginVertical: wp('1.7%'),
    marginHorizontal: wp('1.3%'),
  },
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
  inputTextContainerBig: {
    width: wp('90%'),
    height: hp('50%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  normalContainerPicker: {
    width: wp('90%'),
    height: null,
    flex: 1,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  inputRTLeft: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('18%'),
    fontSize: wp('3%'),
  },
  inputRTRight: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTLeft: {
    flexDirection: 'column',
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTRight: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('25%'),
    fontSize: wp('3%'),
  },
  firstName: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  age: {
    marginVertical: wp('1%'),
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  complaintText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
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
  bigContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
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
  inputFieldContainerDOE: {
    width: wp('90%'),
    height: hp('6%'),
    flexDirection: 'row',
    backgroundColor: '#2e5db0',
    borderRadius: 10,
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
  },
  doeText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('3%'),
  },
  buttonTextDOE: {
    color: 'white',
    fontSize: wp('1.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainerDOE: {
    backgroundColor: '#0a5e78',
    borderRadius: 5,
    padding: 15,
    marginVertical: wp('1%'),
    marginHorizontal: wp('7%'),
    alignSelf: 'center',
  },
  inputTextContainerMultiLine: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  informantText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  addressedByText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  history: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
    marginVertical: wp('6%'),
  },
  diagnosisText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  referredByText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('1.5%'),
  },
  inputTextContainerPicker: {
    width: wp('41%'),
    height: hp('6%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#169cc4',
    borderRadius: 10,
  },
  pickerContainer: {
    width: wp('20%'),
    height: hp('5%'),
    marginHorizontal: wp('5%'),
    marginVertical: wp('0.5%'),
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
});

export default Form1;
