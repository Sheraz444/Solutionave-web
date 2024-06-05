import React from 'react'

const TeamCard = ({ BgImg }) => {
  return (
    <>
      <div style={{
        backgroundImage: `url(${BgImg})`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '300px',
        height: '400px',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginLeft: '15px'
      }}>
      </div>
    </>
  )
}

export default TeamCard