/* eslint-disable prettier/prettier */
const initialState = {
  name: '',
  handDominance: '',
  age: '',
  gender: '',
  address: '',
  occupation: '',
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
  balanceSitting: '',
  standing: '',
  scoringSystem: '',
  asiaScale: '',
  longTermGoal: '',
  shortTermGoal: '',
  remarks: '',
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
    default:
      return state;
  }
};

export default reducer;
