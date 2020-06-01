/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';
import HeaderBackgroundColor from '~/components/HeaderBackgroundColor';

import {
  CardRecipient,
  CardHeader,
  Title,
  CardDetails,
  CardLabel,
  CardInfo,
  CardStatus,
  CardDate,
  DateView,
  CardActions,
  ButtonActions,
  ButtonText,
} from './styles';

const DeliveriesDetails = ({ route }) => {
  const order = route.params.data;
  const navigation = useNavigation();

  const statusOrder = useMemo(
    () =>
      order.canceled_at
        ? 'Cancelado'
        : order.end_date
        ? 'Entregue'
        : order.start_date
        ? 'Retirado'
        : 'Pendente',
    [order.canceled_at, order.end_date, order.start_date]
  );

  const startDateFormatted = useMemo(
    () =>
      order.start_date
        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
        : '--/--/--',
    [order.start_date]
  );

  const endDateFormatted = useMemo(
    () =>
      order.end_date
        ? format(parseISO(order.end_date), 'dd/MM/yyyy')
        : '--/--/--',
    [order.end_date]
  );

  const handleReportProblem = () => {
    navigation.navigate('ReportProblem', { id: order.id });
  };

  const handleViewProblem = () => {
    navigation.navigate('ViewProblems', { id: order.id });
  };

  const handleConfirmDelivery = () => {
    navigation.navigate('ConfirmDelivery', { id: order.id });
  };

  const handleWithdraw = async () => {
    console.tron.log(`/order/${order.id}/status`);
    console.tron.log(new Date());
    try {
      const response = await api.put(`/order/${order.id}/status`, {
        start_date: new Date(),
      });

      console.tron.log(response);
      if (response.status === 200) {
        Alert.alert(
          'Encomenda retirada',
          'A encomenda foi retirada com sucesso!'
        );
      } else {
        Alert.alert(
          'Erro',
          'Não foi possível retirar a encomenda! Tente novamente mais tarde'
        );
      }
    } catch (err) {
      console.tron.log(err);
      Alert.alert(
        'Erro',
        'Não foi possível retirar a encomenda! Tente novamente mais tarde'
      );
    }
    navigation.goBack();
  };

  return (
    <HeaderBackgroundColor>
      <CardRecipient>
        <CardHeader>
          <Icon name="truck" size={22} color="#7159c1" />
          <Title> Informações da entrega </Title>
        </CardHeader>
        <CardDetails>
          <CardLabel> Destinatário </CardLabel>
          <CardInfo> {order.recipient.name} </CardInfo>

          <CardLabel> Endereço de entrega </CardLabel>
          <CardInfo>
            {order.recipient.street}, {order.recipient.street_number},
            {order.recipient.city} - {order.recipient.state},
            {order.recipient.zipcode}
          </CardInfo>

          <CardLabel> Produto </CardLabel>
          <CardInfo> {order.product} </CardInfo>
        </CardDetails>
      </CardRecipient>

      <CardStatus>
        <CardHeader>
          <Icon name="calendar" size={22} color="#7159c1" />
          <Title> Situação da entrega </Title>
        </CardHeader>

        <CardDetails>
          <CardLabel> Status </CardLabel>
          <CardInfo> {statusOrder} </CardInfo>

          <CardDate>
            <DateView>
              <CardLabel> Data de retirada </CardLabel>
              <CardInfo> {startDateFormatted} </CardInfo>
            </DateView>

            <DateView>
              <CardLabel> Data de entrega </CardLabel>
              <CardInfo> {endDateFormatted} </CardInfo>
            </DateView>
          </CardDate>
        </CardDetails>
      </CardStatus>

      <CardActions>
        {statusOrder === 'Pendente' ? (
          <ButtonActions onPress={handleWithdraw}>
            <Icon name="cube-send" size={24} color="#7159c1" />
            <ButtonText>Retirar Encomenda</ButtonText>
          </ButtonActions>
        ) : (
          <>
            <ButtonActions onPress={handleReportProblem}>
              <Icon name="cancel" color="#E74040" size={24} />
              <ButtonText> Informar Problema </ButtonText>
            </ButtonActions>

            <ButtonActions onPress={handleViewProblem}>
              <Icon name="information-outline" color="#E7BA40" size={24} />
              <ButtonText> Visualizar Problemas </ButtonText>
            </ButtonActions>

            <ButtonActions
              onPress={handleConfirmDelivery}
              disabled={statusOrder === 'Entregue'}
            >
              <Icon name="check-circle-outline" color="#7159c1" size={24} />
              <ButtonText> Confirmar Entrega </ButtonText>
            </ButtonActions>
          </>
        )}
      </CardActions>
    </HeaderBackgroundColor>
  );
};

export default DeliveriesDetails;
