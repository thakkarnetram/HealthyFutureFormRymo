/* eslint-disable prettier/prettier */
// login creators
export const UPDATE_OTP_CODE = 'UPDATE_OTP_CODE';
export const SET_OTP = 'SET_OTP';
export const GET_OTP = 'GET_OTP';
export const VERIFY_OTP = 'VERIFY_OTP';
// root urls
const root = 'http://3.25.162.121:8090';
const context = '/cb';
export const GET_OTP_URL = root + context + '/get-otp';
export const VERIFY_OTP_URL = root + context + '/verify-otp';
// functions
export const getOTP = () => {
  return async dispatch => {
    try {
      const res = await fetch(GET_OTP_URL, {
        method: 'GET',
      });
      if (res.ok) {
        const json = await res.text();
        dispatch({
          type: GET_OTP,
          payload: json,
        });
      } else {
        console.log('Unable to fetch');
      }
    } catch (error) {
      console.log('Failed to connect to server');
    }
  };
};

//    Spinal Cord Evaluation Form Creators
export const updateNameForm1 = name => {
  return dispatch => {
    dispatch({
      type: 'updateNameForm1',
      payload: name,
    });
  };
};

export const updateFormData1 = formData => {
  return dispatch => {
    dispatch({
      type: 'updateFormData1',
      payload: formData,
    });
  };
};

export const updateSaveFormData1 = saveFormData => {
  return dispatch => {
    dispatch({
      type: 'updateSaveFormData1',
      payload: saveFormData,
    });
  };
};

export const updateHandDominanceForm1 = handDominance => {
  return dispatch => {
    dispatch({
      type: 'updateHandDominanceForm1',
      payload: handDominance,
    });
  };
};

export const updateAgeForm1 = age => {
  return dispatch => {
    dispatch({
      type: 'updateAgeForm1',
      payload: age,
    });
  };
};

export const updateGenderForm1 = gender => {
  return dispatch => {
    dispatch({
      type: 'updateGenderForm1',
      payload: gender,
    });
  };
};

export const updateAddressForm1 = address => {
  return dispatch => {
    dispatch({
      type: 'updateAddressForm1',
      payload: address,
    });
  };
};

export const updateOccupationForm1 = occupation => {
  return dispatch => {
    dispatch({
      type: 'updateOccupationForm1',
      payload: occupation,
    });
  };
};

export const updateDateofOccuranceForm1 = dateofOccurance => {
  return dispatch => {
    dispatch({
      type: 'updateDateofOccuranceForm1',
      payload: dateofOccurance,
    });
  };
};

export const updateDateofAssessmentForm1 = dateofAssessment => {
  return dispatch => {
    dispatch({
      type: 'updateDateofAssessmentForm1',
      payload: dateofAssessment,
    });
  };
};

export const updateDiagnosisForm1 = diagnosis => {
  return dispatch => {
    dispatch({
      type: 'updateDiagnosisForm1',
      payload: diagnosis,
    });
  };
};

export const updateChiefComplaintForm1 = chiefComplaint => {
  return dispatch => {
    dispatch({
      type: 'updateChiefComplaintForm1',
      payload: chiefComplaint,
    });
  };
};

export const updateHistoryForm1 = history => {
  return dispatch => {
    dispatch({
      type: 'updateHistoryForm1',
      payload: history,
    });
  };
};

export const updatePastMedicalForm1 = pastMedical => {
  return dispatch => {
    dispatch({
      type: 'updatePastMedicalForm1',
      payload: pastMedical,
    });
  };
};

export const updateInvestigationForm1 = investigation => {
  return dispatch => {
    dispatch({
      type: 'updateInvestigationForm1',
      payload: investigation,
    });
  };
};

export const updateAttitudeofLimbForm1 = attitudeofLimb => {
  return dispatch => {
    dispatch({
      type: 'updateAttitudeofLimbForm1',
      payload: attitudeofLimb,
    });
  };
};

export const updateExternalAidsForm1 = externalAids => {
  return dispatch => {
    dispatch({
      type: 'updateExternalAidsForm1',
      payload: externalAids,
    });
  };
};

export const updateGaitForm1 = gait => {
  return dispatch => {
    dispatch({
      type: 'updateGaitForm1',
      payload: gait,
    });
  };
};

export const updateTransferAbilityForm1 = transferAbility => {
  return dispatch => {
    dispatch({
      type: 'updateTransferAbilityForm1',
      payload: transferAbility,
    });
  };
};

export const updateBedSoresForm1 = bedSores => {
  return dispatch => {
    dispatch({
      type: 'updateBedSoresForm1',
      payload: bedSores,
    });
  };
};

export const updateDeformityForm1 = deformity => {
  return dispatch => {
    dispatch({
      type: 'updateDeformityForm1',
      payload: deformity,
    });
  };
};

export const updateReflexComs = reflexComs => {
  return dispatch => {
    dispatch({
      type: 'updateReflexComs',
      payload: reflexComs,
    });
  };
};

export const updateScoringSystem = scoringSystem => {
  return dispatch => {
    dispatch({
      type: 'updateScoringSystem',
      payload: scoringSystem,
    });
  };
};

export const updateAsiaScale = asiaScale => {
  return dispatch => {
    dispatch({
      type: 'updateAsiaScale',
      payload: asiaScale,
    });
  };
};

export const updateLongTermGoal = longTermGoal => {
  return dispatch => {
    dispatch({
      type: 'updateLongTermGoal',
      payload: longTermGoal,
    });
  };
};

export const updateShortTermGoal = shortTermGoal => {
  return dispatch => {
    dispatch({
      type: 'updateShortTermGoal',
      payload: shortTermGoal,
    });
  };
};

export const updateRemarks = remarks => {
  return dispatch => {
    dispatch({
      type: 'updateRemarks',
      payload: remarks,
    });
  };
};

export const updateTherapistNameForm1 = therapistName => {
  return dispatch => {
    dispatch({
      type: 'updateTherapistNameForm1',
      payload: therapistName,
    });
  };
};

// Neurological Evaluation Form Creators

export const updateNameForm2 = name => {
  return dispatch => {
    dispatch({
      type: 'updateNameForm2',
      payload: name,
    });
  };
};

export const updateHandDominanceForm2 = handDominance => {
  return dispatch => {
    dispatch({
      type: 'updateHandDominanceForm2',
      payload: handDominance,
    });
  };
};

export const updateAgeForm2 = age => {
  return dispatch => {
    dispatch({
      type: 'updateAgeForm2',
      payload: age,
    });
  };
};

export const updateGenderForm2 = gender => {
  return dispatch => {
    dispatch({
      type: 'updateGenderForm2',
      payload: gender,
    });
  };
};

export const updateDateOfOccuranceForm2 = dateOfOccurance => {
  return dispatch => {
    dispatch({
      type: 'updateDateOfOccuranceForm2',
      payload: dateOfOccurance,
    });
  };
};

export const updateDateOfAssessmentForm2 = dateofAssessment => {
  return dispatch => {
    dispatch({
      type: 'updateDateOfAssessmentForm2',
      payload: dateofAssessment,
    });
  };
};

export const updateAddressForm2 = address => {
  return dispatch => {
    dispatch({
      type: 'updateAddressForm2',
      payload: address,
    });
  };
};

export const updateOccupationForm2 = occupation => {
  return dispatch => {
    dispatch({
      type: 'updateOccupationForm2',
      payload: occupation,
    });
  };
};

export const updateDiagnosisForm2 = diagnosis => {
  return dispatch => {
    dispatch({
      type: 'updateDiagnosisForm2',
      payload: diagnosis,
    });
  };
};

export const updateChiefComplaintForm2 = chiefComplaint => {
  return dispatch => {
    dispatch({
      type: 'updateChiefComplaintForm2',
      payload: chiefComplaint,
    });
  };
};

export const updateHistoryForm2 = history => {
  return dispatch => {
    dispatch({
      type: 'updateHistoryForm2',
      payload: history,
    });
  };
};

export const updatePastMedicalForm2 = pastMedical => {
  return dispatch => {
    dispatch({
      type: 'updatePastMedicalForm2',
      payload: pastMedical,
    });
  };
};

export const updateInvestigationForm2 = investigation => {
  return dispatch => {
    dispatch({
      type: 'updateInvestigationForm2',
      payload: investigation,
    });
  };
};

export const updateAttitudeofLimbForm2 = attitudeofLimb => {
  return dispatch => {
    dispatch({
      type: 'updateAttitudeofLimbForm2',
      payload: attitudeofLimb,
    });
  };
};

export const updateExternalAidsForm2 = externalAids => {
  return dispatch => {
    dispatch({
      type: 'updateExternalAidsForm2',
      payload: externalAids,
    });
  };
};

export const updateGaitForm2 = gait => {
  return dispatch => {
    dispatch({
      type: 'updateGaitForm2',
      payload: gait,
    });
  };
};

export const updateTransferAbilityForm2 = transferAbility => {
  return dispatch => {
    dispatch({
      type: 'updateTransferAbilityForm2',
      payload: transferAbility,
    });
  };
};

export const updateBedSoresForm2 = bedSores => {
  return dispatch => {
    dispatch({
      type: 'updateBedSoresForm2',
      payload: bedSores,
    });
  };
};

export const updateDeformityForm2 = deformity => {
  return dispatch => {
    dispatch({
      type: 'updateDeformityForm2',
      payload: deformity,
    });
  };
};

export const updateToneComs = toneComs => {
  return dispatch => {
    dispatch({
      type: 'updateToneComs',
      payload: toneComs,
    });
  };
};

export const updateVcgComs = vcgComs => {
  return dispatch => {
    dispatch({
      type: 'updateVcgComs',
      payload: vcgComs,
    });
  };
};

// Form 3
export const updateNameForm3 = name => {
  return dispatch => {
    dispatch({
      type: 'updateNameForm3',
      payload: name,
    });
  };
};

export const updateAgeForm3 = age => {
  return dispatch => {
    dispatch({
      type: 'updateAgeForm3',
      payload: age,
    });
  };
};

export const updateMale = male => {
  return dispatch => {
    dispatch({
      type: 'updateMale',
      payload: male,
    });
  };
};

export const updateFemale = female => {
  return dispatch => {
    dispatch({
      type: 'updateFemale',
      payload: female,
    });
  };
};

export const updateOccupationForm3 = occupation => {
  return dispatch => {
    dispatch({
      type: 'updateOccupationForm3',
      payload: occupation,
    });
  };
};

export const updateReferredBy = referredBy => {
  return dispatch => {
    dispatch({
      type: 'updateReferredBy',
      payload: referredBy,
    });
  };
};

export const updateChiefComplaintForm3 = chiefComplaint => {
  return dispatch => {
    dispatch({
      type: 'updateChiefComplaintForm3',
      payload: chiefComplaint,
    });
  };
};

export const updatePainSeverity = painSeverity => {
  return dispatch => {
    dispatch({
      type: 'updatePainSeverity',
      payload: painSeverity,
    });
  };
};

export const updatePainSeverityBox = painSeverityBox => {
  return dispatch => {
    dispatch({
      type: 'updatePainSeverityBox',
      payload: painSeverityBox,
    });
  };
};

export const updateHistory = history => {
  return dispatch => {
    dispatch({
      type: 'updateHistory',
      payload: history,
    });
  };
};

export const updatePain = pain => {
  return dispatch => {
    dispatch({
      type: 'updatePain',
      payload: pain,
    });
  };
};

export const updateOnSet = onSet => {
  return dispatch => {
    dispatch({
      type: 'updateOnSet',
      payload: onSet,
    });
  };
};

export const updateType = type => {
  return dispatch => {
    dispatch({
      type: 'updateType',
      payload: type,
    });
  };
};

export const updateAggravatingFactor = aggravatingFactor => {
  return dispatch => {
    dispatch({
      type: 'updateAggravatingFactor',
      payload: aggravatingFactor,
    });
  };
};

export const updateRelievingFactor = relievingFactor => {
  return dispatch => {
    dispatch({
      type: 'updateRelievingFactor',
      payload: relievingFactor,
    });
  };
};

export const updateSwelling1 = swelling1 => {
  return dispatch => {
    dispatch({
      type: 'updateSwelling1',
      payload: swelling1,
    });
  };
};

export const updateDeformity = deformity => {
  return dispatch => {
    dispatch({
      type: 'updateDeformity',
      payload: deformity,
    });
  };
};

export const updateGaitImbalance = gaitImbalance => {
  return dispatch => {
    dispatch({
      type: 'updateGaitImbalance',
      payload: gaitImbalance,
    });
  };
};

export const updateScarWound = scarWound => {
  return dispatch => {
    dispatch({
      type: 'updateScarWound',
      payload: scarWound,
    });
  };
};

export const updateSwelling2 = swelling => {
  return dispatch => {
    dispatch({
      type: 'updateSwelling2',
      payload: swelling,
    });
  };
};

export const updateOedema = oedema => {
  return dispatch => {
    dispatch({
      type: 'updateOedema',
      payload: oedema,
    });
  };
};

export const updateTemperature = temeperature => {
  return dispatch => {
    dispatch({
      type: 'updateTemeperature',
      payload: temeperature,
    });
  };
};

export const updateTenderness = tenderness => {
  return dispatch => {
    dispatch({
      type: 'updateTenderness',
      payload: tenderness,
    });
  };
};

export const updateWasting = wasting => {
  return dispatch => {
    dispatch({
      type: 'updateWasting',
      payload: wasting,
    });
  };
};

export const updateCapsularPattern = capsularPattern => {
  return dispatch => {
    dispatch({
      type: 'updateCapsularPattern',
      payload: capsularPattern,
    });
  };
};

export const updateJointPlay = jointPlay => {
  return dispatch => {
    dispatch({
      type: 'updateJointPlay',
      payload: jointPlay,
    });
  };
};

export const updateLLD = lld => {
  return dispatch => {
    dispatch({
      type: 'updateLLD',
      payload: lld,
    });
  };
};

export const updateRemarks2 = remarks => {
  return dispatch => {
    dispatch({
      type: 'updateRemarks2',
      payload: remarks,
    });
  };
};

export const updateMMT = mmt => {
  return dispatch => {
    dispatch({
      type: 'updateMMT',
      payload: mmt,
    });
  };
};

export const updateROM = rom => {
  return dispatch => {
    dispatch({
      type: 'updateROM',
      payload: rom,
    });
  };
};

export const updateInvestigations = investigations => {
  return dispatch => {
    dispatch({
      type: 'updateInvestigations',
      payload: investigations,
    });
  };
};

export const updateReflexes = reflexes => {
  return dispatch => {
    dispatch({
      type: 'updateReflexes',
      payload: reflexes,
    });
  };
};

export const updateSensoryExamination = sensoryExamination => {
  return dispatch => {
    dispatch({
      type: 'updateSensoryExamination',
      payload: sensoryExamination,
    });
  };
};

export const updateDermatomes = dermatomes => {
  return dispatch => {
    dispatch({
      type: 'updateDermatomes',
      payload: dermatomes,
    });
  };
};

export const updateMyotomes = myotomes => {
  return dispatch => {
    dispatch({
      type: 'updateMyotomes',
      payload: myotomes,
    });
  };
};

export const updateSpecialTest = specialTest => {
  return dispatch => {
    dispatch({
      type: 'updateSpecialTest',
      payload: specialTest,
    });
  };
};

export const updateDiagnosis = diagnosis => {
  return dispatch => {
    dispatch({
      type: 'updateDiagnosis',
      payload: diagnosis,
    });
  };
};

export const updateTreatment = treatment => {
  return dispatch => {
    dispatch({
      type: 'updateTreatment',
      payload: treatment,
    });
  };
};

// form1
export const updateClickedImage1F1 = clickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage1F1',
      payload: clickedImage1,
    });
  };
};

export const updateClickedImage2F1 = clickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage2F1',
      payload: clickedImage2,
    });
  };
};

export const updateClickedImage3F1 = clickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage3F1',
      payload: clickedImage3,
    });
  };
};

export const updateClickedImage4F1 = clickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage4F1',
      payload: clickedImage4,
    });
  };
};

export const updateClickedImage5F1 = clickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage5F1',
      payload: clickedImage5,
    });
  };
};

export const updatePickedImage1F1 = pickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage1F1',
      payload: pickedImage1,
    });
  };
};

export const updatePickedImage2F1 = pickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage2F1',
      payload: pickedImage2,
    });
  };
};

export const updatePickedImage3F1 = pickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage3F1',
      payload: pickedImage3,
    });
  };
};

export const updatePickedImage4F1 = pickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage4F1',
      payload: pickedImage4,
    });
  };
};

export const updatePickedImage5F1 = pickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage5F1',
      payload: pickedImage5,
    });
  };
};

// form2

export const updateClickedImage1F2 = clickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage1F2',
      payload: clickedImage1,
    });
  };
};

export const updateClickedImage2F2 = clickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage2F2',
      payload: clickedImage2,
    });
  };
};

export const updateClickedImage3F2 = clickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage3F2',
      payload: clickedImage3,
    });
  };
};

export const updateClickedImage4F2 = clickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage4F2',
      payload: clickedImage4,
    });
  };
};

export const updateClickedImage5F2 = clickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage5F2',
      payload: clickedImage5,
    });
  };
};

export const updatePickedImage1F2 = pickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage1F2',
      payload: pickedImage1,
    });
  };
};

export const updatePickedImage2F2 = pickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage2F2',
      payload: pickedImage2,
    });
  };
};

export const updatePickedImage3F2 = pickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage3F2',
      payload: pickedImage3,
    });
  };
};

export const updatePickedImage4F2 = pickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage4F2',
      payload: pickedImage4,
    });
  };
};

export const updatePickedImage5F2 = pickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage5F2',
      payload: pickedImage5,
    });
  };
};

// form3
// 5 images handler
export const updateClickedImage1 = clickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage1',
      payload: clickedImage1,
    });
  };
};

export const updateClickedImage2 = clickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage2',
      payload: clickedImage2,
    });
  };
};

export const updateClickedImage3 = clickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage3',
      payload: clickedImage3,
    });
  };
};

export const updateClickedImage4 = clickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage4',
      payload: clickedImage4,
    });
  };
};

export const updateClickedImage5 = clickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updateClickedImage5',
      payload: clickedImage5,
    });
  };
};

export const updatePickedImage1 = pickedImage1 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage1',
      payload: pickedImage1,
    });
  };
};

export const updatePickedImage2 = pickedImage2 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage2',
      payload: pickedImage2,
    });
  };
};

export const updatePickedImage3 = pickedImage3 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage3',
      payload: pickedImage3,
    });
  };
};

export const updatePickedImage4 = pickedImage4 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage4',
      payload: pickedImage4,
    });
  };
};

export const updatePickedImage5 = pickedImage5 => {
  return dispatch => {
    dispatch({
      type: 'updatePickedImage5',
      payload: pickedImage5,
    });
  };
};

export const updatePatientImageClicked1 = patientImageClicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImageClicked1',
      payload: patientImageClicked,
    });
  };
};

export const updatePatientImageClicked2 = patientImageClicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImageClicked2',
      payload: patientImageClicked,
    });
  };
};

export const updatePatientImageClicked3 = patientImageClicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImageClicked3',
      payload: patientImageClicked,
    });
  };
};

export const updatePatientImagePicked1 = patientImagePicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImagePicked1',
      payload: patientImagePicked,
    });
  };
};

export const updatePatientImagePicked2 = patientImagePicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImagePicked2',
      payload: patientImagePicked,
    });
  };
};

export const updatePatientImagePicked3 = patientImagePicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImagePicked3',
      payload: patientImagePicked,
    });
  };
};

// form 4
export const updateNameForm4 = name => {
  return dispatch => {
    dispatch({
      type: 'updateNameForm4',
      payload: name,
    });
  };
};

export const updatePatientImageClicked4 = patientImageClicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImageClicked4',
      payload: patientImageClicked,
    });
  };
};

export const updatePatientImagePicked4 = patientImagePicked => {
  return dispatch => {
    dispatch({
      type: 'updatePatientImagePicked4',
      payload: patientImagePicked,
    });
  };
};

export const updateDate = date => {
  return dispatch => {
    dispatch({
      type: 'updateDate',
      payload: date,
    });
  };
};

export const updateTherapist = therapist => {
  return dispatch => {
    dispatch({
      type: 'updateTherapist',
      payload: therapist,
    });
  };
};

export const updateMainTherapistName = mainTherapistName => {
  return dispatch => {
    dispatch({
      type: 'updateMainTherapistName',
      payload: mainTherapistName,
    });
  };
};

export const updatePresentProgress = presentProgress => {
  return dispatch => {
    dispatch({
      type: 'updatePresentProgress',
      payload: presentProgress,
    });
  };
};

export const updatePresentConcern = presentConcern => {
  return dispatch => {
    dispatch({
      type: 'updatePresentConcern',
      payload: presentConcern,
    });
  };
};

export const updateCommentAndPlan = commentAndPlan => {
  return dispatch => {
    dispatch({
      type: 'updateCommentAndPlan',
      payload: commentAndPlan,
    });
  };
};

export const updatePlanWithPatient = planWithPatient => {
  return dispatch => {
    dispatch({
      type: 'updatePlanWithPatient',
      payload: planWithPatient,
    });
  };
};

export const updateVideoOfProgressTaken = videoOfProgressTaken => {
  return dispatch => {
    dispatch({
      type: 'updateVideoOfProgressTaken',
      payload: videoOfProgressTaken,
    });
  };
};

export const updateTherapistName = therapistName => {
  return dispatch => {
    dispatch({
      type: 'updateTherapistName',
      payload: therapistName,
    });
  };
};
