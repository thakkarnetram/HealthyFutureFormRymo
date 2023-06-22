/* eslint-disable prettier/prettier */
const initialState = {
  name: '',
  age: '',
  male: '',
  female: '',
  occupation: '',
  referredBy: '',
  chiefComplaint: '',
  painSeverity: '',
  painSeverityBox: '',
  history: '',
  pain: '',
  onSet: '',
  type: '',
  aggravatingFactor: '',
  relievingFactor: '',
  swelling1: '',
  deformity: '',
  gaitImbalance: '',
  scarWound: '',
  swelling2: '',
  oedema: '',
  temperature: '',
  tenderness: '',
  wasting: '',
  capsularPattern: '',
  jointPlay: '',
  lld: '',
  investigations: '',
  specialTest: '',
  diagnosis: '',
  treatment: '',
  remarks: '',
  mmt: '',
  rom: '',
  reflexes: '',
  sensoryExamination: '',
  dermatomes: '',
  myotomes: '',
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
    case 'updateNameForm3':
      return {
        ...state,
        name: action.payload,
      };
    case 'updatePatientImageClicked3':
      return {
        ...state,
        patientImageClicked: action.payload,
      };
    case 'updatePatientImagePicked3':
      return {
        ...state,
        patientImagePicked: action.payload,
      };
    case 'updateAgeForm3':
      return {
        ...state,
        age: action.payload,
      };
    case 'updateMale':
      return {
        ...state,
        male: action.payload,
        female: '',
      };
    case 'updateFemale':
      return {
        ...state,
        female: action.payload,
        male: '',
      };
    case 'updateOccupationForm3':
      return {
        ...state,
        occupation: action.payload,
      };
    case 'updateReferredBy':
      return {
        ...state,
        referredBy: action.payload,
      };
    case 'updateChiefComplaintForm3':
      return {
        ...state,
        chiefComplaint: action.payload,
      };
    case 'updatePainSeverity':
      return {
        ...state,
        painSeverity: action.payload,
      };
    case 'updatePainSeverityBox':
      return {
        ...state,
        painSeverityBox: action.payload,
      };
    case 'updateHistory':
      return {
        ...state,
        history: action.payload,
      };
    case 'updatePain':
      return {
        ...state,
        pain: action.payload,
      };
    case 'updateOnSet':
      return {
        ...state,
        onSet: action.payload,
      };
    case 'updateType':
      return {
        ...state,
        type: action.payload,
      };
    case 'updateAggravatingFactor':
      return {
        ...state,
        aggravatingFactor: action.payload,
      };
    case 'updateRelievingFactor':
      return {
        ...state,
        relievingFactor: action.payload,
      };
    case 'updateSwelling1':
      return {
        ...state,
        swelling1: action.payload,
      };
    case 'updateDeformity':
      return {
        ...state,
        deformity: action.payload,
      };
    case 'updateGaitImbalance':
      return {
        ...state,
        gaitImbalance: action.payload,
      };
    case 'updateScarWound':
      return {
        ...state,
        scarWound: action.payload,
      };
    case 'updateSwelling2':
      return {
        ...state,
        swelling2: action.payload,
      };
    case 'updateOedema':
      return {
        ...state,
        oedema: action.payload,
      };
    case 'updateTemperature':
      return {
        ...state,
        temperature: action.payload,
      };
    case 'updateTenderness':
      return {
        ...state,
        tenderness: action.payload,
      };
    case 'updateWasting':
      return {
        ...state,
        wasting: action.payload,
      };
    case 'updateCapsularPattern':
      return {
        ...state,
        capsularPattern: action.payload,
      };
    case 'updateJointPlay':
      return {
        ...state,
        jointPlay: action.payload,
      };
    case 'updateLLD':
      return {
        ...state,
        lld: action.payload,
      };
    case 'updateInvestigations':
      return {
        ...state,
        investigations: action.payload,
      };
    case 'updateSpecialTest':
      return {
        ...state,
        specialTest: action.payload,
      };
    case 'updateDiagnosis':
      return {
        ...state,
        diagnosis: action.payload,
      };
    case 'updateTreatment':
      return {
        ...state,
        treatment: action.payload,
      };
    case 'updateRemarks2':
      return {
        ...state,
        remarks: action.payload,
      };
    case 'updateMMT':
      return {
        ...state,
        mmt: action.payload,
      };
    case 'updateROM':
      return {
        ...state,
        rom: action.payload,
      };
    case 'updateReflexes':
      return {
        ...state,
        reflexes: action.payload,
      };
    case 'updateSensoryExamination':
      return {
        ...state,
        sensoryExamination: action.payload,
      };
    case 'updateDermatomes':
      return {
        ...state,
        dermatomes: action.payload,
      };
    case 'updateMyotomes':
      return {
        ...state,
        myotomes: action.payload,
      };
    case 'updateClickedImage1':
      return {
        ...state,
        clickedImage1: action.payload,
      };
    case 'updateClickedImage2':
      return {
        ...state,
        clickedImage2: action.payload,
      };
    case 'updateClickedImage3':
      return {
        ...state,
        clickedImage3: action.payload,
      };
    case 'updateClickedImage4':
      return {
        ...state,
        clickedImage4: action.payload,
      };
    case 'updateClickedImage5':
      return {
        ...state,
        clickedImage5: action.payload,
      };
    case 'updatePickedImage1':
      return {
        ...state,
        pickedImage1: action.payload,
      };
    case 'updatePickedImage2':
      return {
        ...state,
        pickedImage2: action.payload,
      };
    case 'updatePickedImage3':
      return {
        ...state,
        pickedImage3: action.payload,
      };
    case 'updatePickedImage4':
      return {
        ...state,
        pickedImage4: action.payload,
      };
    case 'updatePickedImage5':
      return {
        ...state,
        pickedImage5: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
