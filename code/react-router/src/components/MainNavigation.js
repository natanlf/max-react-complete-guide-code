import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

/* NavLink = When you have a current route it is possible to place a class
  end = Without the end prop, this link is always active because every URL matches /.
*/
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active: undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({isActive}) => isActive ? classes.active: undefined}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
