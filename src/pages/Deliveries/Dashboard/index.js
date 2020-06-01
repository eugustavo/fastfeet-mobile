/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';

import api from '~/services/api';
import { signOut } from '~/store/module/auth/actions';
import Order from '~/components/Order';

import {
  Container,
  Header,
  Infos,
  DeliverymanInfo,
  Welcome,
  DeliverymanName,
  Logout,
  TitleAndActions,
  Title,
  Actions,
  PendingButton,
  PendingButtonText,
  DeliveredButton,
  DeliveredButtonText,
  OrderList,
} from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deliveryman = useSelector((state) => state.user.profile);

  const [pendingStatus, setPendingStatus] = useState(true);
  const [deliveredStatus, setDeliveredStatus] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    pendingOrders();
  }, []);

  const pendingOrders = useCallback(async () => {
    setLoading(true);
    const response = await api.get(`deliveryman/${deliveryman.id}/deliveries`);

    setOrders(response.data);
    setLoading(false);
    setRefreshing(false);
  }, [deliveryman.id]);

  const deliveredOrders = async () => {
    setLoading(true);
    const response = await api.get(`/deliveryman/${deliveryman.id}/handed`);

    setOrders(response.data);
    setLoading(false);
    setRefreshing(false);
  };

  const handlePending = () => {
    if (!pendingStatus) {
      setPendingStatus(true);
      setDeliveredStatus(false);
    }
    pendingOrders();
  };
  const handleDelivered = () => {
    if (!deliveredStatus) {
      setDeliveredStatus(true);
      setPendingStatus(false);
    }
    deliveredOrders();
  };

  const handleDetails = (order) => {
    navigation.navigate('DeliveriesDetails', { data: order });
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  const refreshList = () => {
    setRefreshing(true);
    if (pendingStatus) {
      pendingOrders();
    } else {
      deliveredOrders();
    }
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

      <TitleAndActions>
        <Title> Entregas </Title>

        <Actions>
          <PendingButton onPress={handlePending}>
            <PendingButtonText atived={pendingStatus}>
              Pendentes
            </PendingButtonText>
          </PendingButton>

          <DeliveredButton onPress={handleDelivered}>
            <DeliveredButtonText atived={deliveredStatus}>
              Entregues
            </DeliveredButtonText>
          </DeliveredButton>
        </Actions>
      </TitleAndActions>

      {loading ? (
        <ActivityIndicator size={42} color="#7159c1" />
      ) : (
        <OrderList
          data={orders}
          keyExtractor={(item) => String(item.id)}
          onRefresh={refreshList}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <Order onDetails={() => handleDetails(item)} data={item} />
          )}
        />
      )}
    </Container>
  );
};

export default Dashboard;
