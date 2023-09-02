import React from 'react'
import { User } from './Form'

const PersonalInfo:React.FC<{formData:User,setformData:React.Dispatch<React.SetStateAction<User>>}> = ({formData,setformData}) => {
  return (
    <div className='personalinfo'>
       <label htmlFor="firstName">Firstname</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={(event)=>setformData({...formData,firstName:event.target.value})}/>
        <label htmlFor="lastName">Lastname</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={(event)=>setformData({...formData,lastName:event.target.value})}/>
        <label htmlFor="nationality">Nationality</label >
        <input type="text" id="nationality" value={formData.nationality} onChange={(event)=>setformData({...formData,nationality:event.target.value})}/>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" value={formData.age} onChange={(event)=>setformData({...formData,age:event.target.value})}/>
        <label htmlFor="job">Current job </label>
        <input type="text" id ="job" value={formData.currentjob} onChange={(event)=>setformData({...formData,currentjob:event.target.value})}/>
    </div>
  )
}

export default PersonalInfo
