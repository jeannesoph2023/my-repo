import React from 'react'
import { User } from './Form'

const ReviewInfo:React.FC<{formData:User,setformData:React.Dispatch<React.SetStateAction<User>>}> = ({formData,setformData}) => {
  return (
        <div>
        Username: {formData.userName}
        Email: {formData.email}
        Firstname: {formData.firstName}
        Lastname: {formData.lastName}
        Nationality: {formData.nationality}
        Age: {formData.age}
        Current job: {formData.currentjob}
        University: {formData.university}
        Highschool: {formData.highschool}
        Foreign language you master the best: {formData.foreignLanguage}
      </div>
  )
}

export default ReviewInfo



