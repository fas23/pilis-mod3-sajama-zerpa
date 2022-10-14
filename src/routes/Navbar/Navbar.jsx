import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('currentUser');
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container '>
          <Link className='navbar-brand' to='/'>
            LCards
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                {currentUser ? (
                  <Link className='nav-link' to='/location/create'>
                    Crear Locación
                  </Link>
                ) : (
                  <Link className='nav-link disabled'>Crear Locación</Link>
                )}
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='locación'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Buscar
              </button>
            </form>

            {currentUser ? (
              <button
                type='button'
                className='btn btn-outline-danger m-2'
                onClick={handleSignOut}
              >
                Cerrar Sesion
              </button>
            ) : (
              <Link className='btn btn-outline-primary m-2' to='/login'>
                Iniciar Sesion
              </Link>
            )}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
