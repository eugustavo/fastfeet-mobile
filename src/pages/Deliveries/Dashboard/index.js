import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';

import { signOut } from '~/store/module/auth/actions';

import {
  Container,
  Header,
  Infos,
  DeliverymanInfo,
  Welcome,
  DeliverymanName,
  Logout,
} from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.user.profile);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Header>
        <Infos>
          {deliveryman.avatar ? (
            <UserAvatar
              size={68}
              borderRadius={34}
              name={deliveryman.name}
              src={deliveryman.avatar.url}
            />
          ) : (
            <UserAvatar
              size={68}
              name={deliveryman.name}
              borderRadius={34}
              bgColors={['#ccdcff']}
            />
          )}

          <DeliverymanInfo>
            <Welcome> Bem vindo de volta, </Welcome>
            <DeliverymanName> {deliveryman.name} </DeliverymanName>
          </DeliverymanInfo>
        </Infos>

        <Logout onPress={handleLogout}>
          <Icon name="input" color="#E74040" size={26} />
        </Logout>
      </Header>
    </Container>
  );
};

export default Dashboard;
