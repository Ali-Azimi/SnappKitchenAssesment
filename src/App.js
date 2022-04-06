import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'ثنا سمین', email: 'sana@samin.ir' },
		{ id: 2, name: 'امید روحانی', email: 'omid.r@yahoo.com' },
		{ id: 3, name: 'سارا عباسی', email: 'sara@gmail.com' },
	]

	const initialFormState = { id: null, name: '', email: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<header>
				<img 
					src='https://media-exp1.licdn.com/dms/image/C4D0BAQF4pp3xY3y3tQ/company-logo_200_200/0/1640185849253?e=2147483647&v=beta&t=su0r3plrOCC7Tpk3dTpwAHkmFm6aMzOdAachZ6lgoKo' 
					alt="گروه اسنپ" 
					id='logo'
					width={110}/>
			</header>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>ویرایش کاربر</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>افزودن کاربر</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>مشاهده کاربران</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
