import React from 'react'
import { User } from './Form'

const ReviewInfo:React.FC<{formData:User,setformData:React.Dispatch<React.SetStateAction<User>>}> = ({formData,setformData}) => {
  return (
        <div className='reviewinfo'>
        <div>Username: {formData.userName}</div>
        <div>Email: {formData.email}</div>
        <div> Firstname: {formData.firstName}</div>
        <div>Lastname: {formData.lastName}</div>
        <div>Nationality: {formData.nationality}</div>
        <div> Age: {formData.age}</div>
        <div>Current job: {formData.currentjob}</div>
        <div> University: {formData.university}</div>
        <div> Highschool: {formData.highschool}</div>
        <div>Foreign language you master the best: {formData.foreignLanguage}</div>
      </div>
  )
}

export default ReviewInfo



