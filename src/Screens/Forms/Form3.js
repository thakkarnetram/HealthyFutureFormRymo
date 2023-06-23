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
import CheckBox from '@react-native-community/checkbox';
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
import Generateform3 from '../../GenerateHtml/Generateform3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Form3 = () => {
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
  const name = useSelector(state => state.form3.name);
  const age = useSelector(state => state.form3.age);
  const male = useSelector(state => state.form3.male);
  const female = useSelector(state => state.form3.female);
  const patientImageClicked = useSelector(
    state => state.form3.patientImageClicked,
  );
  const patientImagePicked = useSelector(
    state => state.form3.patientImagePicked,
  );
  const occupation = useSelector(state => state.form3.occupation);
  const referredBy = useSelector(state => state.form3.referredBy);
  const chiefComplaint = useSelector(state => state.form3.chiefComplaint);
  const painSeverity = useSelector(state => state.form3.painSeverity);
  const history = useSelector(state => state.form3.history);
  const pain = useSelector(state => state.form3.pain);
  const painSeverityBox = useSelector(state => state.form3.painSeverityBox);
  const onSet = useSelector(state => state.form3.onSet);
  const type = useSelector(state => state.form3.type);
  const aggravatingFactor = useSelector(state => state.form3.aggravatingFactor);
  const relievingFactor = useSelector(state => state.form3.relievingFactor);
  const swelling1 = useSelector(state => state.form3.swelling1);
  const deformity = useSelector(state => state.form3.deformity);
  const gaitImbalance = useSelector(state => state.form3.gaitImbalance);
  const scarWound = useSelector(state => state.form3.scarWound);
  const swelling2 = useSelector(state => state.form3.swelling2);
  const oedema = useSelector(state => state.form3.oedema);
  const temperature = useSelector(state => state.form3.temperature);
  const tenderness = useSelector(state => state.form3.tenderness);
  const wasting = useSelector(state => state.form3.wasting);
  const capsularPattern = useSelector(state => state.form3.capsularPattern);
  const jointPlay = useSelector(state => state.form3.jointPlay);
  const lld = useSelector(state => state.form3.lld);
  const investigations = useSelector(state => state.form3.investigations);
  const specialTest = useSelector(state => state.form3.specialTest);
  const diagnosis = useSelector(state => state.form3.diagnosis);
  const treatment = useSelector(state => state.form3.treatment);
  const remarks = useSelector(state => state.form3.remarks);
  const mmt = useSelector(state => state.form3.mmt);
  const reflexes = useSelector(state => state.form3.reflexes);
  const rom = useSelector(state => state.form3.rom);
  const sensoryExamination = useSelector(
    state => state.form3.sensoryExamination,
  );
  const dermatomes = useSelector(state => state.form3.dermatomes);
  const myotomes = useSelector(state => state.form3.myotomes);
  const clickedImage1 = useSelector(state => state.form3.clickedImage1);
  const clickedImage2 = useSelector(state => state.form3.clickedImage2);
  const clickedImage3 = useSelector(state => state.form3.clickedImage3);
  const clickedImage4 = useSelector(state => state.form3.clickedImage4);
  const clickedImage5 = useSelector(state => state.form3.clickedImage5);
  const pickedImage1 = useSelector(state => state.form3.pickedImage1);
  const pickedImage2 = useSelector(state => state.form3.pickedImage2);
  const pickedImage3 = useSelector(state => state.form3.pickedImage3);
  const pickedImage4 = useSelector(state => state.form3.pickedImage4);
  const pickedImage5 = useSelector(state => state.form3.pickedImage5);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const nameHandler = name => {
    actions.updateNameForm3(name);
  };
  const ageHandler = age => {
    actions.updateAgeForm3(age);
  };
  const maleHandler = male => {
    actions.updateMale(male);
  };
  const femaleHandler = female => {
    actions.updateFemale(female);
  };
  const occupationHandler = occupation => {
    actions.updateOccupationForm3(occupation);
  };
  const referredByHandler = referredBy => {
    actions.updateReferredBy(referredBy);
  };
  const chiefComplaintHandler = chiefComplaint => {
    actions.updateChiefComplaintForm3(chiefComplaint);
  };
  const painSeverityHandler = painSeverity => {
    actions.updatePainSeverity(painSeverity);
  };
  const historyHandler = history => {
    actions.updateHistory(history);
  };
  const painHandler = pain => {
    actions.updatePain(pain);
  };
  const painSeverityBoxHandler = painSeverityBox => {
    actions.updatePainSeverityBox(painSeverityBox);
  };
  const onSetHandler = onSet => {
    actions.updateOnSet(onSet);
  };
  const typeHandler = type => {
    actions.updateType(type);
  };
  const aggravatingFactorHandler = aggravatingFactor => {
    actions.updateAggravatingFactor(aggravatingFactor);
  };
  const relievingFactorHandler = relievingFactor => {
    actions.updateRelievingFactor(relievingFactor);
  };
  const swelling1Handler = swelling1 => {
    actions.updateSwelling1(swelling1);
  };
  const deformityHandler = deformity => {
    actions.updateDeformity(deformity);
  };
  const gaitImbalanceHandler = gaitImbalance => {
    actions.updateGaitImbalance(gaitImbalance);
  };
  const scarWoundHandler = scarWound => {
    actions.updateScarWound(scarWound);
  };
  const swelling2Handler = swelling2 => {
    actions.updateSwelling2(swelling2);
  };
  const oedemaHandler = oedema => {
    actions.updateOedema(oedema);
  };
  const temperatureHandler = temperature => {
    actions.updateTemperature(temperature);
  };
  const tendernessHandler = tenderness => {
    actions.updateTenderness(tenderness);
  };
  const wastingHandler = wasting => {
    actions.updateWasting(wasting);
  };
  const capsularPatternHandler = capsularPattern => {
    actions.updateCapsularPattern(capsularPattern);
  };
  const jointPlayHandler = jointPlay => {
    actions.updateJointPlay(jointPlay);
  };
  const lldHandler = lld => {
    actions.updateLLD(lld);
  };
  const investigationsHandler = investigations => {
    actions.updateInvestigations(investigations);
  };
  const specialTestHandler = specialTest => {
    actions.updateSpecialTest(specialTest);
  };
  const diagnosisHandler = diagnosis => {
    actions.updateDiagnosis(diagnosis);
  };
  const treatmentHandler = treatment => {
    actions.updateTreatment(treatment);
  };
  const remarksHandler = remarks => {
    actions.updateRemarks2(remarks);
  };
  const mmtHandler = mmt => {
    actions.updateMMT(mmt);
  };
  const romHandler = rom => {
    actions.updateROM(rom);
  };
  const reflexesHandler = reflexes => {
    actions.updateReflexes(reflexes);
  };
  const sensoryExaminationHandler = sensoryExamination => {
    actions.updateSensoryExamination(sensoryExamination);
  };
  const dermatomesHandler = dermatomes => {
    actions.updateDermatomes(dermatomes);
  };
  const myotomesHandler = myotomes => {
    actions.updateMyotomes(myotomes);
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
      actions.updatePatientImageClicked3(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery0 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePatientImagePicked3(result.assets[0].uri);
  };
  // 1
  const openCamera1 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage1(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery1 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage1(result.assets[0].uri);
  };
  // 2
  const openCamera2 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage2(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery2 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage2(result.assets[0].uri);
  };
  // 3
  const openCamera3 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage3(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery3 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage3(result.assets[0].uri);
  };
  // 4
  const openCamera4 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage4(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery4 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage4(result.assets[0].uri);
  };
  // 5
  const openCamera5 = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updateClickedImage5(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };
  const openGallery5 = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePickedImage5(result.assets[0].uri);
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  // Fetch saved form data
  const fetchFormData = async () => {
    try {
      // Fetch the saved form data from AsyncStorage
      const savedFormData = await AsyncStorage.getItem('form3Data');
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        actions.updateNameForm3(parsedData.name);
        actions.updateAgeForm3(parsedData.age);
        actions.updateMale(parsedData.male);
        actions.updateFemale(parsedData.female);
        actions.updateOccupationForm3(parsedData.occupation);
        actions.updateReferredBy(parsedData.referredBy);
        actions.updateChiefComplaintForm3(parsedData.chiefComplaint);
        actions.updatePainSeverity(parsedData.painSeverity);
        actions.updateHistory(parsedData.history);
        actions.updatePain(parsedData.pain);
        actions.updateOnSet(parsedData.onSet);
        actions.updateType(parsedData.type);
        actions.updateAggravatingFactor(parsedData.aggravatingFactor);
        actions.updateRelievingFactor(parsedData.relievingFactor);
        actions.updateSwelling1(parsedData.swelling1);
        actions.updateDeformity(parsedData.deformity);
        actions.updateGaitImbalance(parsedData.gaitImbalance);
        actions.updateScarWound(parsedData.scarWound);
        actions.updateSwelling2(parsedData.swelling2);
        actions.updatePainSeverityBox(parsedData.painSeverityBox);
        actions.updateOedema(parsedData.oedema);
        actions.updateTemperature(parsedData.temperature);
        actions.updateTenderness(parsedData.tenderness);
        actions.updateWasting(parsedData.wasting);
        actions.updateCapsularPattern(parsedData.capsularPattern);
        actions.updateJointPlay(parsedData.jointPlay);
        actions.updateLLD(parsedData.lld);
        actions.updateInvestigations(parsedData.investigations);
        actions.updateSpecialTest(parsedData.specialTest);
        actions.updateDiagnosis(parsedData.diagnosis);
        actions.updateTreatment(parsedData.treatment);
        actions.updateRemarks2(parsedData.remarks);
        actions.updateMMT(parsedData.mmt);
        actions.updateReflexes(parsedData.reflexes);
        actions.updateROM(parsedData.rom);
        actions.updateSensoryExamination(parsedData.sensoryExamination);
        actions.updateDermatomes(parsedData.dermatomes);
        actions.updateMyotomes(parsedData.myotomes);
        actions.updateClickedImage1(parsedData.clickedImage1);
        actions.updatePickedImage1(parsedData.pickedImage1);
        actions.updateClickedImage2(parsedData.clickedImage2);
        actions.updatePickedImage2(parsedData.pickedImage2);
        actions.updateClickedImage3(parsedData.clickedImage3);
        actions.updatePickedImage3(parsedData.pickedImage3);
        actions.updateClickedImage4(parsedData.clickedImage4);
        actions.updatePickedImage4(parsedData.pickedImage4);
        actions.updateClickedImage5(parsedData.clickedImage5);
        actions.updatePickedImage5(parsedData.pickedImage5);
        actions.updatePatientImageClicked3(parsedData.patientImageClicked);
        actions.updatePatientImagePicked3(parsedData.patientImagePicked);
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
            Musculoskeletal Assessment Form
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={age}
              onChangeText={ageHandler}
              keyboardType="ascii-capable"
              placeholder="Age"
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
                    onPress={() => actions.updatePatientImagePicked3('')}>
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
                      onPress={() => actions.updatePatientImagePicked3('')}>
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
                    onPress={() => actions.updatePatientImageClicked3('')}>
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
                      onPress={() => actions.updatePatientImageClicked3('')}>
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
          <View style={styles.checkBoxContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.genderHead}>Select your Gender</Text>
              <View style={styles.checkContainer}>
                <CheckBox
                  style={styles.maleCheckBox}
                  value={male}
                  onValueChange={maleHandler}
                />
                <Text style={styles.maleCheckBoxText}>Male</Text>
                <CheckBox
                  style={styles.femaleCheckBox}
                  value={female}
                  onValueChange={femaleHandler}
                />
                <Text style={styles.femaleCheckBoxText}>Female</Text>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={occupation}
              onChangeText={occupationHandler}
              keyboardType="ascii-capable"
              placeholder="Occupation"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={referredBy}
              onChangeText={referredByHandler}
              keyboardType="ascii-capable"
              placeholder="Referred By"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={chiefComplaint}
              onChangeText={chiefComplaintHandler}
              keyboardType="ascii-capable"
              placeholder="Chief Complaint"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <View style={styles.row}>
              <Text style={styles.rowText}>Pain Severity</Text>
              <View style={styles.bigContainer}>
                <Picker
                  selectedValue={painSeverity}
                  onValueChange={painSeverityHandler}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item
                    label="0"
                    value="0"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="1"
                    value="1"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="2"
                    value="2"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="3"
                    value="3"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="4"
                    value="4"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="5"
                    value="5"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="6"
                    value="6"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="7"
                    value="7"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="8"
                    value="8"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="9"
                    value="9"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                  <Picker.Item
                    label="10"
                    value="10"
                    style={{color: 'black', fontSize: wp('2%')}}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={painSeverityBox}
              onChangeText={painSeverityBoxHandler}
              keyboardType="ascii-capable"
              placeholder="Pain Severity Text "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={history}
              onChangeText={historyHandler}
              keyboardType="ascii-capable"
              placeholder="History of "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={pain}
              onChangeText={painHandler}
              keyboardType="ascii-capable"
              placeholder="Pain Area "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={onSet}
              onChangeText={onSetHandler}
              keyboardType="ascii-capable"
              placeholder="Onset "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={type}
              onChangeText={typeHandler}
              keyboardType="ascii-capable"
              placeholder="Type "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={aggravatingFactor}
              onChangeText={aggravatingFactorHandler}
              keyboardType="ascii-capable"
              placeholder="Aggravating Factor "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={relievingFactor}
              onChangeText={relievingFactorHandler}
              keyboardType="ascii-capable"
              placeholder="Relieving Factor "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
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
            On Observation
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={swelling1}
              onChangeText={swelling1Handler}
              keyboardType="ascii-capable"
              placeholder="Swelling "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={deformity}
              onChangeText={deformityHandler}
              keyboardType="ascii-capable"
              placeholder="Deformity "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={gaitImbalance}
              onChangeText={gaitImbalanceHandler}
              keyboardType="ascii-capable"
              placeholder="Gait Imbalance "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={scarWound}
              onChangeText={scarWoundHandler}
              keyboardType="ascii-capable"
              placeholder="Scar / Wound "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
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
            On Palpation
          </Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={swelling2}
              onChangeText={swelling2Handler}
              keyboardType="ascii-capable"
              placeholder="Swelling "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={oedema}
              onChangeText={oedemaHandler}
              keyboardType="ascii-capable"
              placeholder="Oedema "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={temperature}
              onChangeText={temperatureHandler}
              keyboardType="ascii-capable"
              placeholder="Temperature  "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={tenderness}
              onChangeText={tendernessHandler}
              keyboardType="ascii-capable"
              placeholder="Tenderness  "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={wasting}
              onChangeText={wastingHandler}
              keyboardType="ascii-capable"
              placeholder="Wasting "
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          {/* New section */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('5%'),
              textDecorationLine: 'underline',
              marginHorizontal: wp('5%'),
              marginVertical: wp('1%'),
            }}>
            Postural Deformity
          </Text>
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
                    onPress={() => actions.updatePickedImage1('')}>
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
                      onPress={() => actions.updatePickedImage1('')}>
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
                    onPress={() => actions.updateClickedImage1('')}>
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
                      onPress={() => actions.updateClickedImage1('')}>
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
                    onPress={() => actions.updatePickedImage2('')}>
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
                      onPress={() => actions.updatePickedImage2('')}>
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
                    onPress={() => actions.updateClickedImage2('')}>
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
                      onPress={() => actions.updateClickedImage2('')}>
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
                    onPress={() => actions.updatePickedImage3('')}>
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
                      onPress={() => actions.updatePickedImage3('')}>
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
                    onPress={() => actions.updateClickedImage3('')}>
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
                      onPress={() => actions.updateClickedImage3('')}>
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
                    onPress={() => actions.updatePickedImage4('')}>
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
                      onPress={() => actions.updatePickedImage4('')}>
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
                    onPress={() => actions.updateClickedImage4('')}>
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
                      onPress={() => actions.updateClickedImage4('')}>
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
                    onPress={() => actions.updatePickedImage5('')}>
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
                      onPress={() => actions.updatePickedImage5('')}>
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
                    onPress={() => actions.updateClickedImage5('')}>
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
                      onPress={() => actions.updateClickedImage5('')}>
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
          {/* New section */}
          <View style={styles.inputTextContainer}>
            <TextInput
              value={remarks}
              onChangeText={remarksHandler}
              keyboardType="ascii-capable"
              placeholder="Remarks"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={mmt}
              onChangeText={mmtHandler}
              keyboardType="ascii-capable"
              placeholder="MMT"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={rom}
              onChangeText={romHandler}
              keyboardType="ascii-capable"
              placeholder="ROM"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          {/* New section */}
          <View style={styles.inputTextContainer}>
            <TextInput
              value={capsularPattern}
              onChangeText={capsularPatternHandler}
              keyboardType="ascii-capable"
              placeholder="Capsular Pattern"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={jointPlay}
              onChangeText={jointPlayHandler}
              keyboardType="ascii-capable"
              placeholder="Joint Play"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={reflexes}
              onChangeText={reflexesHandler}
              keyboardType="ascii-capable"
              placeholder="Reflexes"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={lld}
              onChangeText={lldHandler}
              keyboardType="ascii-capable"
              placeholder="LLD"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={sensoryExamination}
              onChangeText={sensoryExaminationHandler}
              keyboardType="ascii-capable"
              placeholder="Sensory Examination"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={dermatomes}
              onChangeText={dermatomesHandler}
              keyboardType="ascii-capable"
              placeholder="Deramatomes"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={myotomes}
              onChangeText={myotomesHandler}
              keyboardType="ascii-capable"
              placeholder="Myotomes"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={investigations}
              onChangeText={investigationsHandler}
              keyboardType="ascii-capable"
              placeholder="Investigations"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={specialTest}
              onChangeText={specialTestHandler}
              keyboardType="ascii-capable"
              placeholder="Special Test"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={diagnosis}
              onChangeText={diagnosisHandler}
              keyboardType="ascii-capable"
              placeholder="Diagnosis"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={treatment}
              onChangeText={treatmentHandler}
              keyboardType="ascii-capable"
              placeholder="Treatment"
              placeholderTextColor="#FFFFFF"
              style={styles.inputText}
            />
          </View>
          <Generateform3 />
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
  checkBoxContainer: {
    width: wp('90%'),
    height: hp('7%'),
    marginVertical: wp('2%'),
    marginHorizontal: wp('4%'),
    backgroundColor: '#2e5db0',
    borderRadius: 10,
  },
  checkContainer: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    flexDirection: 'row',
  },
  maleCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('2%'),
  },
  maleCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('1%'),
  },
  femaleCheckBox: {
    marginVertical: hp('1.2%'),
    marginHorizontal: wp('3%'),
  },
  femaleCheckBoxText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  newBtn: {
    marginHorizontal: wp('5%'),
    marginVertical: wp('3%'),
    borderRadius: 20,
    backgroundColor: '#2e5db0',
    height: hp('5%'),
    width: wp('35%'),
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
  newBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
  },
});

export default Form3;
