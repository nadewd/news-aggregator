import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/" className='articles'>Search Articles</Link>
      &nbsp; | &nbsp;
      <Link to="/saved-articles" className='articles'>Saved Articles</Link>
      &nbsp;&nbsp;
      <span>Hey, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut} className='LogOut'>Log Out</Link>
    </nav>
  );
}