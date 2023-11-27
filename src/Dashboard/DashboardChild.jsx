import React from 'react'

const DashboardChild = (props) => {
  return (
    <div>
        <ul>
            <li>{props?.elements?.mail}</li>
            <li>{props?.elements?.fname}</li>
            <li>{props?.elements?.lname}</li>
            <li>{props?.elements?.age}</li>
        </ul>
    </div>
  )
}

export default DashboardChild