import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { SortBy, type User } from './type.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const usersInitial = useRef([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting !== SortBy.NONE ? SortBy.NONE : SortBy.COUNTRY
    setSorting(newSortingValue)
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setUsers(filteredUsers)
  }

  const handleSort = (sortBy: SortBy) => {
    setSorting(sortBy)
  }

  const handleReset = () => {
    setUsers(usersInitial.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (response) => await response.json())
      .then((response) => {
        setUsers(response.results)
        usersInitial.current = response.results
      })
      .catch((error) => console.error(error))
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    switch (sorting) {
      case SortBy.NONE:
        return filteredUsers
      case SortBy.COUNTRY:
        return users.toSorted((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      case SortBy.NAME:
        return users.toSorted((a, b) =>
          a.name.first.localeCompare(b.name.first)
        )
      case SortBy.LAST:
        return users.toSorted((a, b) => a.name.last.localeCompare(b.name.last))
      default:
        return filteredUsers
    }
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>Ordenar por país</button>
        <button onClick={handleReset}>Resetear tabla</button>
        <input
          type="text"
          placeholder="Filtrar por país"
          onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        <UsersList
          sortUsers={handleSort}
          deleteUser={handleDelete}
          showColors={showColors}
          users={sortedUsers}
        />
      </main>
    </>
  )
}

export default App
