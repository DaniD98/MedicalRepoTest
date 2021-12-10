import React from 'react'; // imports react library
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const medicalTreatmentListJ  = props.json;
  const medicaltreatmentlist = JSON.parse(medicalTreatmentListJ);
  const ListMedicalTreatmentList = medicaltreatmentlist.map((medicalTreatment)=>
  <li>
    <MedicalTreatment treatId={medicalTreatment.treatId} treatCourseId= {medicalTreatment.treatCourseId} type={medicalTreatment.type} category={medicalTreatment.category} name={medicalTreatment.name} startDate={medicalTreatment.startDate} />
  </li>);
  return(
    <ul>
        {ListMedicalTreatmentList}
    </ul>
  );
}




<MedicalTreatment treatId = "120" treatCourseId = "59675" type = "Chemotherapy" category = "Cancer Treatment" name = "Matthew Jones" startDate = '02/06/2021'/>

<MedicalTreatment treatId = "650" treatCourseId = "67621" type = "Dialysis" category = "Kidney Failure " name = "Lisa Brown" startDate = '12/01/2021'/>

<MedicalTreatment treatId = "490" treatCourseId = "19875" type = "Insulin" category = "Diabetes " name = "Chin Lu Ming" startDate = '27/07/2021'/>

<MedicalTreatment treatId = "230" treatCourseId = "22675" type = "Psychotherapy" category = "Mental Illness" name = "Cheftu Okunkwa" startDate = '17/11/2021'/>

<MedicalTreatment treatId = "300" treatCourseId = "36521" type = "Physiotherapy" category = "Spine" name = "Ryan Kip" startDate = '120/04/2021'/>





export default MedicalTreatmentList;//exports file  MedicalTreatmentPanel to be used by other programs using import statement