/* eslint-disable prettier/prettier */
const initialState = {
  name: '',
  date: '',
  patientImageClicked: '',
  patientImagePicked: '',
  therapist: '',
  mainTherapistName: '',
  presentProgress: '',
  presentConcern: '',
  commentAndPlan: '',
  planWithPatient: '',
  videoOfProgressTaken: '',
  therapistName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateNameForm4':
      return {...state, name: action.payload};
    case 'updateDate':
      return {...state, date: action.payload};
    case 'updatePatientImageClicked4':
      return {...state, patientImageClicked: action.payload};
    case 'updatePatientImagePicked4':
      return {...state, patientImagePicked: action.payload};
    case 'updateTherapist':
      return {...state, therapist: action.payload};
    case 'updateMainTherapistName':
      return {...state, mainTherapistName: action.payload};
    case 'updatePresentProgress':
      return {...state, presentProgress: action.payload};
    case 'updatePresentConcern':
      return {...state, presentConcern: action.payload};
    case 'updateCommentAndPlan':
      return {...state, commentAndPlan: action.payload};
    case 'updatePlanWithPatient':
      return {...state, planWithPatient: action.payload};
    case 'updateVideoOfProgressTaken':
      return {...state, videoOfProgressTaken: action.payload};
    case 'updateTherapistName':
      return {...state, therapistName: action.payload};
    default:
      return state;
  }
};

export default reducer;
