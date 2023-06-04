/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
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
import Generateform2 from '../../GenerateHtml/Generateform2';

const Form2 = () => {
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
  const name = useSelector(state => state.form2.name);
  const handDominance = useSelector(state => state.form2.handDominance);
  const age = useSelector(state => state.form2.age);
  const gender = useSelector(state => state.form2.gender);
  const address = useSelector(state => state.form2.address);
  const occupation = useSelector(state => state.form2.occupation);
  const [dooDatePickerVisible, setDooDatePickerVisible] = useState(false);
  const [doaDatePickerVisible, setDoaDatePickerVisible] = useState(false);
  const dateOfOccurance = useSelector(state => state.form2.dateOfOccurance);
  const dateOfAssessment = useSelector(state => state.form2.dateOfAssessment);
  const diagnosis = useSelector(state => state.form2.diagnosis);
  const chiefComplaint = useSelector(state => state.form2.chiefComplaint);
  const history = useSelector(state => state.form2.history);
  const pastMedical = useSelector(state => state.form2.pastMedical);
  const investigation = useSelector(state => state.form2.investigation);
  const attitudeofLimb = useSelector(state => state.form2.attitudeofLimb);
  const externalAids = useSelector(state => state.form2.externalAids);
  const gait = useSelector(state => state.form2.gait);
  const transferAbility = useSelector(state => state.form2.transferAbility);
  const bedSores = useSelector(state => state.form2.bedSores);
  const deformity = useSelector(state => state.form2.deformity);
  const shoulderFlexorLT = useSelector(state => state.form2.shoulderFlexorLT);
  const shoulderExtensorLT = useSelector(
    state => state.form2.shoulderExtensorLT,
  );
  const shoulderAbductorLT = useSelector(
    state => state.form2.shoulderAbductorLT,
  );
  const shoulderAdductorLT = useSelector(
    state => state.form2.shoulderAdductorLT,
  );
  const shoulderFlexorRT = useSelector(state => state.form2.shoulderFlexorRT);
  const shoulderExtensorRT = useSelector(
    state => state.form2.shoulderExtensorRT,
  );
  const shoulderAbductorRT = useSelector(
    state => state.form2.shoulderAbductorRT,
  );
  const shoulderAdductorRT = useSelector(
    state => state.form2.shoulderAdductorRT,
  );
  const shoulderExtRotLT = useSelector(state => state.form2.shoulderExtRotLT);
  const shoulderExtRotRT = useSelector(state => state.form2.shoulderExtRotRT);
  const shoulderIntRotLT = useSelector(state => state.form2.shoulderIntRotLT);
  const shoulderIntRotRT = useSelector(state => state.form2.shoulderIntRotRT);
  const elbowFlexorLT = useSelector(state => state.form2.elbowFlexorLT);
  const elbowExtensorLT = useSelector(state => state.form2.elbowExtensorLT);
  const elbowFlexorRT = useSelector(state => state.form2.elbowFlexorRT);
  const elbowExtensorRT = useSelector(state => state.form2.elbowExtensorRT);
  const wristFlexorLT = useSelector(state => state.form2.wristFlexorLT);
  const wristExtensorLT = useSelector(state => state.form2.wristExtensorLT);
  const wristFlexorRT = useSelector(state => state.form2.wristFlexorRT);
  const wristExtensorRT = useSelector(state => state.form2.wristExtensorRT);
  const hipFlexorLT = useSelector(state => state.form2.hipFlexorLT);
  const hipExtensorLT = useSelector(state => state.form2.hipExtensorLT);
  const hipAbductorLT = useSelector(state => state.form2.hipAbductorLT);
  const hipAdductorLT = useSelector(state => state.form2.hipAdductorLT);
  const hipExtRotLT = useSelector(state => state.form2.hipExtRotLT);
  const hipIntRotLT = useSelector(state => state.form2.hipIntRotLT);
  const hipFlexorRT = useSelector(state => state.form2.hipFlexorRT);
  const hipExtensorRT = useSelector(state => state.form2.hipExtensorRT);
  const hipAbductorRT = useSelector(state => state.form2.hipAbductorRT);
  const hipAdductorRT = useSelector(state => state.form2.hipAdductorRT);
  const hipExtRotRT = useSelector(state => state.form2.hipExtRotRT);
  const hipIntRotRT = useSelector(state => state.form2.hipIntRotRT);
  const kneeFlexorLT = useSelector(state => state.form2.kneeFlexorLT);
  const kneeExtensorLT = useSelector(state => state.form2.kneeExtensorLT);
  const kneeFlexorRT = useSelector(state => state.form2.kneeFlexorRT);
  const kneeExtensorRT = useSelector(state => state.form2.kneeExtensorRT);
  const plantarFlexorLT = useSelector(state => state.form2.plantarFlexorLT);
  const plantarFlexorRT = useSelector(state => state.form2.plantarFlexorRT);
  const dorsiflexorLT = useSelector(state => state.form2.dorsiflexorLT);
  const dorsiflexorRT = useSelector(state => state.form2.dorsiflexorRT);
  const shoulderLT = useSelector(state => state.form2.shoulderLT);
  const shoulderRT = useSelector(state => state.form2.shoulderRT);
  const elbowLT = useSelector(state => state.form2.elbowLT);
  const elbowRT = useSelector(state => state.form2.elbowRT);
  const wristLT = useSelector(state => state.form2.wristLT);
  const wristRT = useSelector(state => state.form2.wristRT);
  const hipLT = useSelector(state => state.form2.hipLT);
  const hipRT = useSelector(state => state.form2.hipRT);
  const kneeLT = useSelector(state => state.form2.kneeLT);
  const kneeRT = useSelector(state => state.form2.kneeRT);
  const ankleLT = useSelector(state => state.form2.ankleLT);
  const ankleRT = useSelector(state => state.form2.ankleRT);
  const bowelBladder = useSelector(state => state.form2.bowelBladder);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const nameHandler = name => {
    actions.updateNameForm2(name);
  };
  const handDominanceHandler = handDominance => {
    actions.updateHandDominanceForm2(handDominance);
  };
  const ageHandler = age => {
    actions.updateAgeForm2(age);
  };
  const genderHandler = gender => {
    actions.updateGenderForm2(gender);
  };
  const addressHandler = address => {
    actions.updateAddressForm2(address);
  };
  const occupationHandler = occupation => {
    actions.updateOccupationForm2(occupation);
  };
  const datePickerHandlerDOO = () => {
    setDooDatePickerVisible(true);
  };
  const datePickerHandlerDOA = () => {
    setDoaDatePickerVisible(true);
  };
  const dateConfirmHandlerDOO = dooDate => {
    actions.updateDateOfOccuranceForm2(dooDate);
    setDooDatePickerVisible(false);
  };
  const dateConfirmHandlerDOA = doaDate => {
    actions.updateDateOfAssessmentForm2(doaDate);
    setDoaDatePickerVisible(false);
  };
  const diagnosisHandler = diagnosis => {
    actions.updateDiagnosisForm2(diagnosis);
  };
  const chiefComplaintHandler = chiefComplaint => {
    actions.updateChiefComplaintForm2(chiefComplaint);
  };
  const historyHandler = history => {
    actions.updateHistoryForm2(history);
  };
  const pastMedicalHandler = pastMedical => {
    actions.updatePastMedicalForm2(pastMedical);
  };
  const investigationHandler = investigation => {
    actions.updateInvestigationForm2(investigation);
  };
  const attitudeofLimbHandler = attitudeofLimb => {
    actions.updateAttitudeofLimbForm2(attitudeofLimb);
  };
  const externalAidsHandler = externalAids => {
    actions.updateExternalAidsForm2(externalAids);
  };
  const gaitHandler = gait => {
    actions.updateGaitForm2(gait);
  };
  const transferAbilityHandler = transferAbility => {
    actions.updateTransferAbilityForm2(transferAbility);
  };
  const bedSoresHandler = bedSores => {
    actions.updateBedSoresForm2(bedSores);
  };
  const deformityHandler = deformity => {
    actions.updateDeformityForm2(deformity);
  };
  const shoulderFlexorLTHandler = shoulderFlexorLT => {
    actions.updateShoulderFlexorLT(shoulderFlexorLT);
  };
  const shoulderExtensorLTHandler = shoulderExtensorLT => {
    actions.updateShoulderExtensorLT(shoulderExtensorLT);
  };
  const shoulderAbductorLTHandler = shoulderAbductorLT => {
    actions.updateShoulderAbductorLT(shoulderAbductorLT);
  };
  const shoulderAdductorLTHandler = shoulderAdductorLT => {
    actions.updateShoulderAdductorLT(shoulderAdductorLT);
  };
  const shoulderExtRotLTHandler = shoulderExtRotLT => {
    actions.updateShoulderExtRotLT(shoulderExtRotLT);
  };
  const shoulderIntRotLTHandler = shoulderIntRotLT => {
    actions.updateShoulderIntRotLT(shoulderIntRotLT);
  };
  const shoulderFlexorRTHandler = shoulderFlexorRT => {
    actions.updateShoulderFlexorRT(shoulderFlexorRT);
  };
  const shoulderExtensorRTHandler = shoulderExtensorRT => {
    actions.updateShoulderExtensorRT(shoulderExtensorRT);
  };
  const shoulderAbductorRTHandler = shoulderAbductorRT => {
    actions.updateShoulderAbductorRT(shoulderAbductorRT);
  };
  const shoulderAdductorRTHandler = shoulderAdductorRT => {
    actions.updateShoulderAdductorRT(shoulderAdductorRT);
  };
  const shoulderExtRotRTHandler = shoulderExtRotRT => {
    actions.updateShoulderExtRotRT(shoulderExtRotRT);
  };
  const shoulderIntRotRTHandler = shoulderIntRotRT => {
    actions.updateShoulderIntRotRT(shoulderIntRotRT);
  };
  const elbowFlexorLTHandler = elbowFlexorLT => {
    actions.updateElbowFlexorLT(elbowFlexorLT);
  };
  const elbowExtensorLTHandler = elbowExtensorLT => {
    actions.updateElbowExtensorLT(elbowExtensorLT);
  };
  const elbowFlexorRTHandler = elbowFlexorRT => {
    actions.updateElbowFlexorRT(elbowFlexorRT);
  };
  const elbowExtensorRTHandler = elbowExtensorRT => {
    actions.updateElbowExtensorRT(elbowExtensorRT);
  };
  const wristFlexorLTHandler = wristFlexorLT => {
    actions.updateWristFlexorLT(wristFlexorLT);
  };
  const wristExtensorLTHandler = wristExtensorLT => {
    actions.updateWristExtensorLT(wristExtensorLT);
  };
  const wristFlexorRTHandler = wristFlexorRT => {
    actions.updateWristFlexorRT(wristFlexorRT);
  };
  const wristExtensorRTHandler = wristExtensorRT => {
    actions.updateWristExtensorRT(wristExtensorRT);
  };
  const hipFlexorLTHandler = hipFlexorLT => {
    actions.updateHipFlexorLT(hipFlexorLT);
  };
  const hipExtensorLTHandler = hipExtensorLT => {
    actions.updateHipExtensorLT(hipExtensorLT);
  };
  const hipAbductorLTHandler = hipAbductorLT => {
    actions.updateHipAbductorLT(hipAbductorLT);
  };
  const hipAdductorLTHandler = hipAdductorLT => {
    actions.updateHipAdductorLT(hipAdductorLT);
  };
  const hipExtRotLTHandler = hipExtRotLT => {
    actions.updateHipExtRotLT(hipExtRotLT);
  };
  const hipIntRotLTHandler = hipIntRotLT => {
    actions.updateHipIntRotLT(hipIntRotLT);
  };
  const hipFlexorRTHandler = hipFlexorRT => {
    actions.updateHipFlexorRT(hipFlexorRT);
  };
  const hipExtensorRTHandler = hipExtensorRT => {
    actions.updateHipExtensorRT(hipExtensorRT);
  };
  const hipAbductorRTHandler = hipAbductorRT => {
    actions.updateHipAbductorRT(hipAbductorRT);
  };
  const hipAdductorRTHandler = hipAdductorRT => {
    actions.updateHipAdductorRT(hipAdductorRT);
  };
  const hipExtRotRTHandler = hipExtRotRT => {
    actions.updateHipExtRotRT(hipExtRotRT);
  };
  const hipIntRotRTHandler = hipIntRotRT => {
    actions.updateHipIntRotRT(hipIntRotRT);
  };
  const kneeFlexorLTHandler = kneeFlexorLT => {
    actions.updateKneeFlexorLT(kneeFlexorLT);
  };
  const kneeExtensorLTHandler = kneeExtensorLT => {
    actions.updateKneeExtensorLT(kneeExtensorLT);
  };
  const kneeFlexorRTHandler = kneeFlexorRT => {
    actions.updateKneeFlexorRT(kneeFlexorRT);
  };
  const kneeExtensorRTHandler = kneeExtensorRT => {
    actions.updateKneeExtensorRT(kneeExtensorRT);
  };
  const plantarFlexorLTHandler = plantarFlexorLT => {
    actions.updatePlantarFlexorLT(plantarFlexorLT);
  };
  const dorsiflexorLTHandler = dorsiflexorLT => {
    actions.updateDorsiFlexorLT(dorsiflexorLT);
  };
  const plantarFlexorRTHandler = plantarFlexorRT => {
    actions.updatePlantarFlexorRT(plantarFlexorRT);
  };
  const dorsiflexorRTHandler = dorsiflexorRT => {
    actions.updateDorsiFlexorRT(dorsiflexorRT);
  };
  const shoulderLTHandler = shoulderLT => {
    actions.updateShoulderLT(shoulderLT);
  };
  const shoulderRTHandler = shoulderRT => {
    actions.updateShoulderRT(shoulderRT);
  };
  const elbowLTHandler = elbowLT => {
    actions.updateElbowLT(elbowLT);
  };
  const elbowRTHandler = elbowRT => {
    actions.updateElbowRT(elbowRT);
  };
  const wristLTHandler = wristLT => {
    actions.updateWristLT(wristLT);
  };
  const wristRTHandler = wristRT => {
    actions.updateWristRT(wristRT);
  };
  const hipLTHandler = hipLT => {
    actions.updateHipLT(hipLT);
  };
  const hipRTHandler = hipRT => {
    actions.updateHipRT(hipRT);
  };
  const kneeLTHandler = kneeLT => {
    actions.updateKneeLT(kneeLT);
  };
  const kneeRTHandler = kneeRT => {
    actions.updateKneeRT(kneeRT);
  };
  const ankleLTHandler = ankleLT => {
    actions.updateAnkleLT(ankleLT);
  };
  const ankleRTHandler = ankleRT => {
    actions.updateAnkleRT(ankleRT);
  };
  const bowelBladderHandler = bowelBladder => {
    actions.updateBowelBladderForm2(bowelBladder);
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
            Neurological Evaluation Form
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={gender}
              onChangeText={genderHandler}
              keyboardType="ascii-capable"
              placeholder="Gender"
              placeholderTextColor="#FFFFFF"
              style={styles.age}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={handDominance}
              onChangeText={handDominanceHandler}
              keyboardType="ascii-capable"
              placeholder="Hand Dominance"
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
                onChange={(event, selectedDateDOA) =>
                  dateConfirmHandlerDOA(selectedDateDOA || dateOfAssessment)
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
            Tone
          </Text>
          <View style={styles.normalContainerPicker}>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Flexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderFlexorLT}
                multiline={true}
                onChangeText={shoulderFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={shoulderFlexorRT}
                onChangeText={shoulderFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Extensor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderExtensorLT}
                onChangeText={shoulderExtensorLTHandler}
                keyboardType="ascii-capable"
                multiline={true}
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={shoulderExtensorRT}
                onChangeText={shoulderExtensorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Abductor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderAbductorLT}
                onChangeText={shoulderAbductorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={shoulderAbductorRT}
                onChangeText={shoulderAbductorRTHandler}
                keyboardType="ascii-capable"
                multiline={true}
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Adductor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderAdductorLT}
                onChangeText={shoulderAdductorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={shoulderAdductorRT}
                onChangeText={shoulderAdductorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Ext Rot
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderExtRotLT}
                onChangeText={shoulderExtRotLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={shoulderExtRotRT}
                onChangeText={shoulderExtRotRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder Int Rot
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderIntRotLT}
                onChangeText={shoulderIntRotLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={shoulderIntRotRT}
                onChangeText={shoulderIntRotRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Elbow Flexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={elbowFlexorLT}
                onChangeText={elbowFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={elbowFlexorRT}
                onChangeText={elbowFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Elbow Extensor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={elbowExtensorLT}
                onChangeText={elbowExtensorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={elbowExtensorRT}
                onChangeText={elbowExtensorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Wrist Flexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={wristFlexorLT}
                onChangeText={wristFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={wristFlexorRT}
                onChangeText={wristFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Wrist Extensor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={wristExtensorLT}
                onChangeText={wristExtensorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={wristExtensorRT}
                onChangeText={wristExtensorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Flexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipFlexorLT}
                onChangeText={hipFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipFlexorRT}
                onChangeText={hipFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Extensor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipExtensorLT}
                onChangeText={hipExtensorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipExtensorRT}
                onChangeText={hipExtensorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Abductor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipAbductorLT}
                onChangeText={hipAbductorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipAbductorRT}
                onChangeText={hipAbductorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Adductor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipAdductorLT}
                onChangeText={hipAdductorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipAdductorRT}
                onChangeText={hipAdductorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Ext Rot
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipExtRotLT}
                onChangeText={hipExtRotLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipExtRotRT}
                onChangeText={hipExtRotRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip Int Rot
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipIntRotLT}
                onChangeText={hipIntRotLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={hipIntRotRT}
                onChangeText={hipIntRotRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Knee Flexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={kneeFlexorLT}
                onChangeText={kneeFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={kneeFlexorRT}
                onChangeText={kneeFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Knee Extensor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={kneeExtensorLT}
                onChangeText={kneeExtensorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={kneeExtensorRT}
                onChangeText={kneeExtensorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Plantar FLexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={plantarFlexorLT}
                onChangeText={plantarFlexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={plantarFlexorRT}
                onChangeText={plantarFlexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('6%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Dorsi FLexor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={dorsiflexorLT}
                onChangeText={dorsiflexorLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                value={dorsiflexorRT}
                onChangeText={dorsiflexorRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                multiline={true}
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#07235e',
              fontSize: wp('4%'),
              marginHorizontal: wp('5%'),
              marginVertical: wp('1.5%'),
            }}>
            VCG
          </Text>
          <View style={styles.normalContainerPicker}>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Shoulder
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={shoulderLT}
                multiline={true}
                onChangeText={shoulderLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={shoulderRT}
                onChangeText={shoulderRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Elbow
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={elbowLT}
                multiline={true}
                onChangeText={elbowLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={elbowRT}
                onChangeText={elbowRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Wrist
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={wristLT}
                multiline={true}
                onChangeText={wristLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={wristRT}
                onChangeText={wristRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Hip
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={hipLT}
                multiline={true}
                onChangeText={hipLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={hipRT}
                onChangeText={hipRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Knee
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={kneeLT}
                multiline={true}
                onChangeText={kneeLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={kneeRT}
                onChangeText={kneeRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              Ankle
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={ankleLT}
                multiline={true}
                onChangeText={ankleLTHandler}
                keyboardType="ascii-capable"
                placeholder="LT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
              <TextInput
                multiline={true}
                value={ankleRT}
                onChangeText={ankleRTHandler}
                keyboardType="ascii-capable"
                placeholder="RT"
                placeholderTextColor="#d6d6d6"
                style={{
                  color: 'white',
                  width: wp('10%'),
                  fontSize: wp('3%'),
                  marginHorizontal: wp('7%'),
                  marginVertical: wp('2%'),
                }}
              />
            </View>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              value={bowelBladder}
              onChangeText={bowelBladderHandler}
              keyboardType="ascii-capable"
              placeholder="Bowel/Bladder"
              placeholderTextColor="#FFFFFF"
              style={styles.firstName}
            />
          </View>
          <Generateform2 />
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
  inputRTLT: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('18%'),
    fontSize: wp('3%'),
  },
  inputRTRT: {
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTLT: {
    flexDirection: 'column',
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: wp('20%'),
    fontSize: wp('3%'),
  },
  inputLTRT: {
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
});

export default Form2;
