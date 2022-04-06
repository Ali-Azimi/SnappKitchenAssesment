import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>نام</th>
        <th>ایمیل</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button"
              >
                ویرایش
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button"
              >
                حذف
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>کاربری موجود نیست!</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
