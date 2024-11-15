import logo from '../assets/images/logo-anfit.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
        <button onClick={() => { navigate('/'); }} type="button" className="logo"><img src={logo} alt="anfit"/></button>
    </header>
  );
}

export default Header;
