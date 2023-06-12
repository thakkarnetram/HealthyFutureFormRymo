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
  bicepLT: '',
  bicepRT: '',
  tricepsLT: '',
  tricepsRT: '',
  brachioradialisLT: '',
  brachioradialisRT: '',
  kneeLT: '',
  kneeRT: '',
  ankleLT: '',
  ankleRT: '',
  bowelBladder: '',
  balance: '',
  sitting: '',
  standing: '',
  scoringSystem: '',
  asiaScale: '',
  longTermGoal: '',
  shortTermGoal: '',
  remarks: '',
  therapistName: '',
  clickedImage1: '',
  clickedImage2: '',
  clickedImage3: '',
  clickedImage4: '',
  clickedImage5: '',
  pickedImage1: '',
  pickedImage2: '',
  pickedImage3: '',
  pickedImage4: '',
  pickedImage5: '',
  patientImageClicked: '',
  patientImagePicked: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateNameForm1':
      return {
        ...state,
        name: action.payload,
      };
    case 'updateHandDominanceForm1':
      return {
        ...state,
        handDominance: action.payload,
      };
    case 'updateAgeForm1':
      return {
        ...state,
        age: action.payload,
      };
    case 'updatePatientImageClicked1':
      return {
        ...state,
        patientImageClicked: action.payload,
      };
    case 'updatePatientImagePicked1':
      return {
        ...state,
        patientImagePicked: action.payload,
      };
    case 'updatePatientImageClicked2':
      return {
        ...state,
        patientImageClicked: action.payload,
      };
    case 'updatePatientImagePicked2':
      return {
        ...state,
        patientImagePicked: action.payload,
      };
    case 'updateClickedImage1F1':
      return {
        ...state,
        clickedImage1: action.payload,
      };
    case 'updateClickedImage2F1':
      return {
        ...state,
        clickedImage2: action.payload,
      };
    case 'updateClickedImage3F1':
      return {
        ...state,
        clickedImage3: action.payload,
      };
    case 'updateClickedImage4F1':
      return {
        ...state,
        clickedImage4: action.payload,
      };
    case 'updateClickedImage5F1':
      return {
        ...state,
        clickedImage5: action.payload,
      };
    case 'updatePickedImage1F1':
      return {
        ...state,
        pickedImage1: action.payload,
      };
    case 'updatePickedImage2F1':
      return {
        ...state,
        pickedImage2: action.payload,
      };
    case 'updatePickedImage3F1':
      return {
        ...state,
        pickedImage3: action.payload,
      };
    case 'updatePickedImage4F1':
      return {
        ...state,
        pickedImage4: action.payload,
      };
    case 'updatePickedImage5F1':
      return {
        ...state,
        pickedImage5: action.payload,
      };
    case 'updateGenderForm1':
      return {
        ...state,
        gender: action.payload,
      };
    case 'updateAddressForm1':
      return {
        ...state,
        address: action.payload,
      };
    case 'updateOccupationForm1':
      return {
        ...state,
        occupation: action.payload,
      };
    case 'updateDateofOccuranceForm1':
      return {
        ...state,
        dateOfOccurance: action.payload,
      };
    case 'updateDateofAssessmentForm1':
      return {
        ...state,
        dateOfAssessment: action.payload,
      };
    case 'updateDiagnosisForm1':
      return {
        ...state,
        diagnosis: action.payload,
      };
    case 'updateChiefComplaintForm1':
      return {
        ...state,
        chiefComplaint: action.payload,
      };
    case 'updateHistoryForm1':
      return {
        ...state,
        history: action.payload,
      };
    case 'updatePastMedicalForm1':
      return {
        ...state,
        pastMedical: action.payload,
      };
    case 'updateInvestigationForm1':
      return {
        ...state,
        investigation: action.payload,
      };
    case 'updateAttitudeofLimbForm1':
      return {
        ...state,
        attitudeofLimb: action.payload,
      };
    case 'updateExternalAidsForm1':
      return {
        ...state,
        externalAids: action.payload,
      };
    case 'updateGaitForm1':
      return {
        ...state,
        gait: action.payload,
      };
    case 'updateTransferAbilityForm1':
      return {
        ...state,
        transferAbility: action.payload,
      };
    case 'updateBedSoresForm1':
      return {
        ...state,
        bedSores: action.payload,
      };
    case 'updateDeformityForm1':
      return {
        ...state,
        deformity: action.payload,
      };
    case 'updateBicepLT':
      return {
        ...state,
        bicepLT: action.payload,
      };
    case 'updateBicepRT':
      return {
        ...state,
        bicepRT: action.payload,
      };
    case 'updateTricepsLT':
      return {
        ...state,
        tricepsLT: action.payload,
      };
    case 'updateTricepsRT':
      return {
        ...state,
        tricepsRT: action.payload,
      };
    case 'updateBrachioradialisLT':
      return {
        ...state,
        brachioradialisLT: action.payload,
      };
    case 'updateBrachioradialisRT':
      return {
        ...state,
        brachioradialisRT: action.payload,
      };
    case 'updateKneeLTForm1':
      return {
        ...state,
        kneeLT: action.payload,
      };
    case 'updateKneeRTForm1':
      return {
        ...state,
        kneeRT: action.payload,
      };
    case 'updateAnkleLTForm1':
      return {
        ...state,
        ankleLT: action.payload,
      };
    case 'updateAnkleRTForm1':
      return {
        ...state,
        ankleRT: action.payload,
      };
    case 'updateBowelBladderForm1':
      return {
        ...state,
        bowelBladder: action.payload,
      };
    case 'updateBalance':
      return {
        ...state,
        balance: action.payload,
      };
    case 'updateSitting':
      return {
        ...state,
        sitting: action.payload,
      };
    case 'updateStanding':
      return {
        ...state,
        standing: action.payload,
      };
    case 'updateScoringSystem':
      return {
        ...state,
        scoringSystem: action.payload,
      };
    case 'updateAsiaScale':
      return {
        ...state,
        asiaScale: action.payload,
      };
    case 'updateLongTermGoal':
      return {
        ...state,
        longTermGoal: action.payload,
      };
    case 'updateShortTermGoal':
      return {
        ...state,
        shortTermGoal: action.payload,
      };
    case 'updateRemarks':
      return {
        ...state,
        remarks: action.payload,
      };
    case 'updateTherapistNameForm1':
      return {
        ...state,
        therapistName: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
