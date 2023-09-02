import React from 'react'
import { User } from './Form'

const StudiesInfo:React.FC<{formData:User,setformData:React.Dispatch<React.SetStateAction<User>>}> = ({formData,setformData}) => {
  return (
    <div className='studies'>
      
        <label htmlFor="highschool">Highschool</label>
        <input type="text"  id="highschool"  value={formData.highschool} onChange={(event)=>setformData({...formData,highschool:event.target.value})}/>
        <label htmlFor="university">University</label>
        <input type="text" id="universiy" value={formData.university} onChange={(event)=>setformData({...formData,university:event.target.value})}/>
        <label htmlFor="language">Foreign language you master the best</label>
        <input type="text"  id ="language" value={formData.foreignLanguage} onChange={(event)=>setformData({...formData,foreignLanguage:event.target.value})}/>
    
    </div>
  )
}

export default StudiesInfo

