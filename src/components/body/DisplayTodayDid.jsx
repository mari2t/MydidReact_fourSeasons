import React from 'react'

export const DisplayTodayDid = ({value,deleteDid}) => {
  const handleOnClickDelete = (e) => {
    deleteDid(e.target.id)
  }
  return (
    <div className='didText' key={value.id} id={value.id} onClick={handleOnClickDelete}>{value.value}</div>
  )
}
