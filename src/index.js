import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

const root = document.getElementById('root')

import Department from './Department'
import Departments from './Departments'


// SMART COMPONENT
class App extends Component {

  constructor() {
    super()
    this.state = {
      departments: [],
      department: {}
    }
    this.selectDepartment = this.selectDepartment.bind(this)
  }

  async componentDidMount(){
    const response = await axios.get('/api/departments')
    this.setState( {departments: response.data })
  }

  async selectDepartment(id){
    if(id === -1) {
      this.setState({ department: {} })
      return
    }
    const response = await axios.get(`/api/departments/${id}`)
    this.setState( {department: response.data })
  }

  render(){
    const { selectDepartment } = this
    const { departments, department } = this.state
    return (
      department.id ? (<Department department={ department } selectDepartment={ selectDepartment }/>) : 
      (<Departments departments={ departments } selectDepartment={ selectDepartment }/>)
    )
  }
}

render(<App />, root)