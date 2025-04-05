import { SortBy, type User } from '../type.d'

interface Props {
  sortUsers: (sortBy: SortBy) => void
  deleteUser: (uuid: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList({ sortUsers, deleteUser, showColors, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <th>Foto</th>
        <th onClick={() => sortUsers(SortBy.NAME)}>Nombre</th>
        <th onClick={() => sortUsers(SortBy.LAST)}>Apellido</th>
        <th onClick={() => sortUsers(SortBy.COUNTRY)}>País</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const color = index % 2 === 0 ? '#333' : '#555'
          const paintRow = showColors ? color : 'transparent'
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: paintRow }}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.login.uuid)}>
                  Borrar
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
