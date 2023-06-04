/* eslint-disable prettier/prettier */
const initialState = {
  name: '',
  handDominance: '',
  age: '',
  gender: '',
  address: '',
  occupation: '',
  dateOfOccurance: new Date(),
  dateOfAssessment: new Date(),
  diagnosis: '',
  chiefComplaint: '',
  history: '',
  pastMedical: '',
  investigation: '',
  attitudeofLimb: '',
  externalAids: '',
  gait: '',
  transferAbility: '',
  bedSores: '',
  deformity: '',
  shoulderFlexorLT: '',
  shoulderFlexorRT: '',
  shoulderExtensorLT: '',
  shoulderExtensorRT: '',
  shoulderAbductorLT: '',
  shoulderAbductorRT: '',
  shoulderAdductorLT: '',
  shoulderAdductorRT: '',
  shoulderExtRotLT: '',
  shoulderExtRotRT: '',
  shoulderIntRotLT: '',
  shoulderIntRotRT: '',
  elbowFlexorLT: '',
  elbowFlexorRT: '',
  elbowExtensorLT: '',
  elbowExtensorRT: '',
  wristFlexorLT: '',
  wristFlexorRT: '',
  wristExtensorLT: '',
  wristExtensorRT: '',
  hipFlexorLT: '',
  hipFlexorRT: '',
  hipExtensorLT: '',
  hipExtensorRT: '',
  hipAbductorLT: '',
  hipAbductorRT: '',
  hipAdductorLT: '',
  hipAdductorRT: '',
  hipExtRotLT: '',
  hipExtRotRT: '',
  hipIntRotLT: '',
  hipIntRotRT: '',
  kneeFlexorLT: '',
  kneeFlexorRT: '',
  kneeExtensorLT: '',
  kneeExtensorRT: '',
  plantarFlexorLT: '',
  plantarFlexorRT: '',
  dorsiflexorLT: '',
  dorsiflexorRT: '',
  shoulderLT: '',
  shoulderRT: '',
  elbowLT: '',
  elbowRT: '',
  wristLT: '',
  wristRT: '',
  hipLT: '',
  hipRT: '',
  kneeLT: '',
  kneeRT: '',
  ankleLT: '',
  ankleRT: '',
  bowelBladder: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateNameForm2':
      return {
        ...state,
        name: action.payload,
      };
    case 'updateHandDominanceForm2':
      return {
        ...state,
        handDominance: action.payload,
      };
    case 'updateAgeForm2':
      return {
        ...state,
        age: action.payload,
      };
    case 'updateGenderForm2':
      return {
        ...state,
        gender: action.payload,
      };
    case 'updateAddressForm2':
      return {
        ...state,
        address: action.payload,
      };
    case 'updateOccupationForm2':
      return {
        ...state,
        occupation: action.payload,
      };
    case 'updateDateOfOccuranceForm2':
      return {
        ...state,
        dateOfOccurance: action.payload,
      };
    case 'updateDateOfAssessmentForm2':
      return {
        ...state,
        dateOfAssessment: action.payload,
      };
    case 'updateDiagnosisForm2':
      return {
        ...state,
        diagnosis: action.payload,
      };
    case 'updateChiefComplaintForm2':
      return {
        ...state,
        chiefComplaint: action.payload,
      };
    case 'updateHistoryForm2':
      return {
        ...state,
        history: action.payload,
      };
    case 'updatePastMedicalForm2':
      return {
        ...state,
        pastMedical: action.payload,
      };
    case 'updateInvestigationForm2':
      return {
        ...state,
        investigation: action.payload,
      };
    case 'updateAttitudeofLimbForm2':
      return {
        ...state,
        attitudeofLimb: action.payload,
      };
    case 'updateExternalAidsForm2':
      return {
        ...state,
        externalAids: action.payload,
      };
    case 'updateGaitForm2':
      return {
        ...state,
        gait: action.payload,
      };
    case 'updateTransferAbilityForm2':
      return {
        ...state,
        transferAbility: action.payload,
      };
    case 'updateBedSoresForm2':
      return {
        ...state,
        bedSores: action.payload,
      };
    case 'updateDeformityForm2':
      return {
        ...state,
        deformity: action.payload,
      };
    case 'updateShoulderFlexorLT':
      return {
        ...state,
        shoulderFlexorLT: action.payload,
      };
    case 'updateShoulderFlexorRT':
      return {
        ...state,
        shoulderFlexorRT: action.payload,
      };
    case 'updateShoulderExtensorLT':
      return {
        ...state,
        shoulderExtensorLT: action.payload,
      };
    case 'updateShoulderExtensorRT':
      return {
        ...state,
        shoulderExtensorRT: action.payload,
      };
    case 'updateShoulderAbductorLT':
      return {
        ...state,
        shoulderAbductorLT: action.payload,
      };
    case 'updateShoulderAbductorRT':
      return {
        ...state,
        shoulderAbductorRT: action.payload,
      };
    case 'updateShoulderAdductorLT':
      return {
        ...state,
        shoulderAdductorLT: action.payload,
      };
    case 'updateShoulderAdductorRT':
      return {
        ...state,
        shoulderAdductorRT: action.payload,
      };
    case 'updateShoulderExtRotLT':
      return {
        ...state,
        shoulderExtRotLT: action.payload,
      };
    case 'updateShoulderExtRotRT':
      return {
        ...state,
        shoulderExtRotRT: action.payload,
      };
    case 'updateShoulderIntRotLT':
      return {
        ...state,
        shoulderIntRotLT: action.payload,
      };
    case 'updateShoulderIntRotRT':
      return {
        ...state,
        shoulderIntRotRT: action.payload,
      };
    case 'updateElbowFlexorLT':
      return {
        ...state,
        elbowFlexorLT: action.payload,
      };
    case 'updateElbowFlexorRT':
      return {
        ...state,
        elbowFlexorRT: action.payload,
      };
    case 'updateElbowExtensorLT':
      return {
        ...state,
        elbowExtensorLT: action.payload,
      };
    case 'updateElbowExtensorRT':
      return {
        ...state,
        elbowExtensorRT: action.payload,
      };
    case 'updateWristFlexorLT':
      return {
        ...state,
        wristFlexorLT: action.payload,
      };
    case 'updateWristFlexorRT':
      return {
        ...state,
        wristFlexorRT: action.payload,
      };
    case 'updateWristExtensorLT':
      return {
        ...state,
        wristExtensorLT: action.payload,
      };
    case 'updateWristExtensorRT':
      return {
        ...state,
        wristExtensorRT: action.payload,
      };
    case 'updateHipFlexorLT':
      return {
        ...state,
        hipFlexorLT: action.payload,
      };
    case 'updateHipFlexorRT':
      return {
        ...state,
        hipFlexorRT: action.payload,
      };
    case 'updateHipExtensorLT':
      return {
        ...state,
        hipExtensorLT: action.payload,
      };
    case 'updateHipExtensorRT':
      return {
        ...state,
        hipExtensorRT: action.payload,
      };
    case 'updateHipAbductorLT':
      return {
        ...state,
        hipAbductorLT: action.payload,
      };
    case 'updateHipAbductorRT':
      return {
        ...state,
        hipAbductorRT: action.payload,
      };
    case 'updateHipAdductorLT':
      return {
        ...state,
        hipAdductorLT: action.payload,
      };
    case 'updateHipAdductorRT':
      return {
        ...state,
        hipAdductorRT: action.payload,
      };
    case 'updateHipExtRotLT':
      return {
        ...state,
        hipExtRotLT: action.payload,
      };
    case 'updateHipExtRotRT':
      return {
        ...state,
        hipExtRotRT: action.payload,
      };
    case 'updateHipIntRotLT':
      return {
        ...state,
        hipIntRotLT: action.payload,
      };
    case 'updateHipIntRotRT':
      return {
        ...state,
        hipIntRotRT: action.payload,
      };
    case 'updateKneeFlexorLT':
      return {
        ...state,
        kneeFlexorLT: action.payload,
      };
    case 'updateKneeFlexorRT':
      return {
        ...state,
        kneeFlexorRT: action.payload,
      };
    case 'updateKneeExtensorLT':
      return {
        ...state,
        kneeExtensorLT: action.payload,
      };
    case 'updateKneeExtensorRT':
      return {
        ...state,
        kneeExtensorRT: action.payload,
      };
    case 'updatePlantarFlexorLT':
      return {
        ...state,
        plantarFlexorLT: action.payload,
      };
    case 'updatePlantarFlexorRT':
      return {
        ...state,
        plantarFlexorRT: action.payload,
      };
    case 'updateDorsiFlexorLT':
      return {
        ...state,
        dorsiflexorLT: action.payload,
      };
    case 'updateDorsiFlexorRT':
      return {
        ...state,
        dorsiflexorRT: action.payload,
      };
    case 'updateShoulderLT':
      return {
        ...state,
        shoulderLT: action.payload,
      };
    case 'updateShoulderRT':
      return {
        ...state,
        shoulderRT: action.payload,
      };
    case 'updateElbowLT':
      return {
        ...state,
        elbowLT: action.payload,
      };
    case 'updateElbowRT':
      return {
        ...state,
        elbowRT: action.payload,
      };
    case 'updateWristLT':
      return {
        ...state,
        wristLT: action.payload,
      };
    case 'updateWristRT':
      return {
        ...state,
        wristRT: action.payload,
      };
    case 'updateHipLT':
      return {
        ...state,
        hipLT: action.payload,
      };
    case 'updateHipRT':
      return {
        ...state,
        hipRT: action.payload,
      };
    case 'updateKneeLT':
      return {
        ...state,
        kneeLT: action.payload,
      };
    case 'updateKneeRT':
      return {
        ...state,
        kneeRT: action.payload,
      };
    case 'updateAnkleLT':
      return {
        ...state,
        ankleLT: action.payload,
      };
    case 'updateAnkleRT':
      return {
        ...state,
        ankleRT: action.payload,
      };
    case 'updateBowelBladderForm2':
      return {
        ...state,
        bowelBladder: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
