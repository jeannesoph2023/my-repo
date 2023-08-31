import React from 'react'
import { User } from './Form'

const SignUpInfo:React.FC<{formData:User,setformData:React.Dispatch<React.SetStateAction<User>>}> = ({formData,setformData}) => {
  return (
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" placeholder="UserName" id="Username" value ={formData.userName} onChange={(event)=>setformData({...formData,userName:event.target.value})}/>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"  value ={formData.email} onChange={(event)=>setformData({...formData,email:event.target.value})}/>
        <label htmlFor="password">Password</label>
        <input type="password"  id ="password" value={formData.password} onChange={(event)=>setformData({...formData,password:event.target.value})}/>
        <label htmlFor="confirmPassword">Confirm password </label>
        <input type="password"  id="confirmPassword" value={formData.confirmPassword} onChange={(event)=>setformData({...formData,confirmPassword:event.target.value})}/>
      </div>
  )
}

export default SignUpInfo

