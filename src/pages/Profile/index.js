import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';

import { signOut } from '~/store/module/auth/actions';

import {
  Container,
  Infos,
  TextInfo,
  DeliverymanInfo,
  Logout,
  LogoutText,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.user.profile);
  console.tron.log(deliveryman);

  const dateFormatted = useMemo(
    () => format(parseISO(deliveryman.created_at), 'dd/MM/yyyy'),
    [deliveryman.created_at]
  );

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      {deliveryman.avatar ? (
        <UserAvatar
          size={140}
          borderRadius={70}
          name={deliveryman.name}
          src={deliveryman.avatar.url}
        />
      ) : (
        <UserAvatar
          size={140}
          borderRadius={70}
          name={deliveryman.name}
          bgColors={['#ccdcff']}
        />
      )}

      <Infos>
        <TextInfo> Nome completo </TextInfo>
        <DeliverymanInfo>{deliveryman.name}</DeliverymanInfo>

        <TextInfo> Email </TextInfo>
        <DeliverymanInfo>{deliveryman.email}</DeliverymanInfo>

        <TextInfo> Data de Cadastro </TextInfo>
        <DeliverymanInfo>{dateFormatted}</DeliverymanInfo>
      </Infos>

      <Logout onPress={handleLogout}>
        <LogoutText> Logout </LogoutText>
      </Logout>
    </Container>
  );
};

export default Profile;
