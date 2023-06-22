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
  vcgComs: '',
  toneComs: '',
  patientImageClicked: '',
  patientImagePicked: '',
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
    case 'updateVcgComs':
      return {
        ...state,
        vcgComs: action.payload,
      };
    case 'updateToneComs':
      return {
        ...state,
        toneComs: action.payload,
      };
    case 'updateClickedImage1F2':
      return {
        ...state,
        clickedImage1: action.payload,
      };
    case 'updateClickedImage2F2':
      return {
        ...state,
        clickedImage2: action.payload,
      };
    case 'updateClickedImage3F2':
      return {
        ...state,
        clickedImage3: action.payload,
      };
    case 'updateClickedImage4F2':
      return {
        ...state,
        clickedImage4: action.payload,
      };
    case 'updateClickedImage5F2':
      return {
        ...state,
        clickedImage5: action.payload,
      };
    case 'updatePickedImage1F2':
      return {
        ...state,
        pickedImage1: action.payload,
      };
    case 'updatePickedImage2F2':
      return {
        ...state,
        pickedImage2: action.payload,
      };
    case 'updatePickedImage3F2':
      return {
        ...state,
        pickedImage3: action.payload,
      };
    case 'updatePickedImage4F2':
      return {
        ...state,
        pickedImage4: action.payload,
      };
    case 'updatePickedImage5F2':
      return {
        ...state,
        pickedImage5: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
