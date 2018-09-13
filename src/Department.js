import React from 'react'

// DUMB COMPONENT
const Department = ({ department, selectDepartment })=> {
  return (
    <div>
      <h2>{ department.name }</h2>
      <ul>
        {
          department.users.map(user => <li key={ user.id }>{ user.name }</li>)
        }
      </ul>
      <a href='#' onClick={()=> selectDepartment(-1)}>Back</a>
    </div>
  )
}


export default Department