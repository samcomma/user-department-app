import React from 'react'
import DepartmentRow from './DepartmentRow'


// DUMB COMPONENT
const Departments = ({ departments, selectDepartment })=> {
  return (
    <div>
      <h2>Departments:</h2>
      <ul>
        {
          departments.map(department => <DepartmentRow key={ department.id } department={ department } selectDepartment={ selectDepartment }/>)
        }
      </ul>
    </div>
  )
}


export default Departments