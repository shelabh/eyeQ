import React from 'react'
// import Logout from './Logout'

const Appbar = ({name}:{name:string}) => {
  return (
    <div className="flex justify-between items-center mx-3 mt-2 shadow-sm p-3">
    <h1 className="text-2xl font-bold">eyeQ</h1>
    <div className="flex items-center space-x-2">
      <span>Welcome, {name && (name?.split("")[0]?.toUpperCase()+name?.split("")?.slice(1)?.join(""))}</span>
      {/* <Logout/> */}
    </div>
  </div>
  )
}

export default Appbar
