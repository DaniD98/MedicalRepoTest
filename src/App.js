import React from 'react'; // react libary must be imported
import './style.css'; // controls format of page

const treatId = '100';
const treatCourseId = '67678';
const type = 'Treatment';
const category = 'Heart';
const name = 'Heart Treatment';
const startDate = '12/12/2021';

//Create a React component “Product” to display the following properties. Name, id, datePurchased,price

function MedicalTreatment(props) {
  return (
    <div>
      {props.treatId} {props.treatCourseId} {props.type} {props.category}{' '}
      {props.name}
      {props.startDate}
    </div>
  );
}

//As part of App.js create one instance of the MedicalTreatment component to display a treatment record. Use arbitrary data of your choice.

export default function App() {
  return (
    <div>
      <h1>Medical Treatment</h1>
      <p>
        {treatId} {treatCourseId} {type} {category} {name} {startDate}{' '}
      </p>
    </div>
  );
}
