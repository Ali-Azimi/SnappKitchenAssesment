import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.email) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>نام</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>ایمیل</label>
			<input type="email" name="email" value={user.email} onChange={handleInputChange} />
			<button className='accent-button'>افزودن کاربر جدید</button>
		</form>
	)
}

export default AddUserForm
