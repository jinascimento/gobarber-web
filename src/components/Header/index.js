import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPurple from '../../assets/logo_purple.svg';
import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications/index';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Jhony</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Jhony" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
