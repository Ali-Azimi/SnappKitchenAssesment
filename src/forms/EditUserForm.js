import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>نام</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>ایمیل</label>
      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      <button className='secondary-button'>ویرایش کاربر</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        انصراف
      </button>
    </form>
  )
}

export default EditUserForm
