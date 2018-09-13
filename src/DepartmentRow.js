import React from 'react'


// DUMB COMPONENT
const DepartmentRow = ({ department, selectDepartment })=> {
  const { name, id } = department
  return (
    <li onClick={()=> selectDepartment(id)}>
      { department.name }
    </li>
  )
}

export default DepartmentRow