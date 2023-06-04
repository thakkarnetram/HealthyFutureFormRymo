/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
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
import Generateform1 from '../../GenerateHtml/Generateform1';

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
  const bicepLT = useSelector(state => state.form1.bicepLT);
  const bicepRT = useSelector(state => state.form1.bicepRT);
  const tricepsLT = useSelector(state => state.form1.tricepsLT);
  const tricepsRT = useSelector(state => state.form1.tricepsRT);
  const brachioradialisLT = useSelector(state => state.form1.brachioradialisLT);
  const brachioradialisRT = useSelector(state => state.form1.brachioradialisRT);
  const kneeLT = useSelector(state => state.form1.kneeLT);
  const kneeRT = useSelector(state => state.form1.kneeRT);
  const ankleLT = useSelector(state => state.form1.ankleLT);
  const ankleRT = useSelector(state => state.form1.ankleRT);
  const bowelBladder = useSelector(state => state.form1.bowelBladder);
  const balance = useSelector(state => state.form1.balance);
  const sitting = useSelector(state => state.form1.sitting);
  const standing = useSelector(state => state.form1.standing);
  const scoringSystem = useSelector(state => state.form1.scoringSystem);
  const asiaScale = useSelector(state => state.form1.asiaScale);
  const longTermGoal = useSelector(state => state.form1.longTermGoal);
  const shortTermGoal = useSelector(state => state.form1.shortTermGoal);
  const remarks = useSelector(state => state.form1.remarks);
  const therapistName = useSelector(state => state.form1.therapistName);
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
  const bicepLTHandler = bicepLT => {
    actions.updateBicepLT(bicepLT);
  };
  const bicepRTHandler = bicepRT => {
    actions.updateBicepRT(bicepRT);
  };
  const tricepsLTHandler = tricepsLT => {
    actions.updateTricepsLT(tricepsLT);
  };
  const tricepsRTHandler = tricepsRT => {
    actions.updateTricepsRT(tricepsRT);
  };
  const brachioradialisLTHandler = brachioradialisLT => {
    actions.updateBrachioradialisLT(brachioradialisLT);
  };
  const brachioradialisRTHandler = brachioradialisRT => {
    actions.updateBrachioradialisRT(brachioradialisRT);
  };
  const kneeLTHandler = kneeLT => {
    actions.updateKneeLTForm1(kneeLT);
  };
  const kneeRTHandler = kneeRT => {
    actions.updateKneeRTForm1(kneeRT);
  };
  const ankleLTHandler = ankleLT => {
    actions.updateAnkleLTForm1(ankleLT);
  };
  const ankleRTHandler = ankleRT => {
    actions.updateAnkleRTForm1(ankleRT);
  };
  const bowelBladderHandler = bowelBladder => {
    actions.updateBowelBladderForm1(bowelBladder);
  };
  const balanceHandler = balance => {
    actions.updateBalance(balance);
  };
  const sittingHandler = sitting => {
    actions.updateSitting(sitting);
  };
  const standingHandler = standing => {
    actions.updateStanding(standing);
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
          <View style={styles.normalContainerPicker}>
            <Text
              style={{
                marginVertical: wp('2%'),
                marginHorizontal: wp('6%'),
                color: 'white',
                fontSize: wp('3%'),
              }}>
              1.Bicep
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={bicepLT}
                multiline={true}
                onChangeText={bicepLTHandler}
                keyboardType="ascii-capable"
                placeholder="Left"
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
                value={bicepRT}
                onChangeText={bicepRTHandler}
                keyboardType="ascii-capable"
                placeholder="Right"
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
              2. Triceps
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={tricepsLT}
                onChangeText={tricepsLTHandler}
                keyboardType="ascii-capable"
                multiline={true}
                placeholder="Left"
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
                value={tricepsRT}
                onChangeText={tricepsRTHandler}
                keyboardType="ascii-capable"
                placeholder="Right"
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
              3. Brachioradialis
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={brachioradialisLT}
                onChangeText={brachioradialisLTHandler}
                keyboardType="ascii-capable"
                placeholder="Left"
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
                value={brachioradialisRT}
                onChangeText={brachioradialisRTHandler}
                keyboardType="ascii-capable"
                multiline={true}
                placeholder="Right"
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
              4. Knee
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={kneeLT}
                onChangeText={kneeLTHandler}
                keyboardType="ascii-capable"
                placeholder="Left"
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
                value={kneeRT}
                onChangeText={kneeRTHandler}
                keyboardType="ascii-capable"
                placeholder="Right"
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
              5. Ankle
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={ankleLT}
                onChangeText={ankleLTHandler}
                keyboardType="ascii-capable"
                placeholder="Left"
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
                value={ankleRT}
                onChangeText={ankleRTHandler}
                keyboardType="ascii-capable"
                placeholder="Right"
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
          <View style={styles.inputTextContainer}>
            <TextInput
              value={bowelBladder}
              onChangeText={bowelBladderHandler}
              keyboardType="ascii-capable"
              placeholder="Bowel / Bladder "
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
              value={balance}
              onChangeText={balanceHandler}
              keyboardType="ascii-capable"
              placeholder="Balance  "
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
              value={sitting}
              onChangeText={sittingHandler}
              keyboardType="ascii-capable"
              placeholder="Sitting "
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
              value={standing}
              onChangeText={standingHandler}
              keyboardType="ascii-capable"
              placeholder="Standing "
              placeholderTextColor="#FFFFFF"
              style={{
                marginVertical: wp('1%'),
                color: 'white',
                fontSize: wp('3.5%'),
                marginHorizontal: wp('1.5%'),
              }}
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

export default Form1;
