import GuestHeader from "./GuestHeader"
import UserHeader from "./UserHeader"

function Header() {
  const user = localStorage.getItem("user")

  return (
    <>
      {user ? <UserHeader /> : <GuestHeader />}
    </>
  )
}

export default Header