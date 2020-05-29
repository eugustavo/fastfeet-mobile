import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  Date,
  CardActions,
  ButtonActions,
  ButtonText,
} from './styles';

const DeliveriesDetails = ({ route }) => {
  const order = route.params.data;
  const teste = () => {
    console.tron.log(order);
  };

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
            {' '}
            {order.recipient.street}, {order.recipient.street_number},{' '}
            {order.recipient.city} - {order.recipient.state},{' '}
            {order.recipient.zipcode}{' '}
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
            <Date>
              <CardLabel> Data de retirada </CardLabel>
              <CardInfo> {startDateFormatted} </CardInfo>
            </Date>

            <Date>
              <CardLabel> Data de entrega </CardLabel>
              <CardInfo> {endDateFormatted} </CardInfo>
            </Date>
          </CardDate>
        </CardDetails>
      </CardStatus>

      <CardActions>
        <ButtonActions onPress={teste}>
          <Icon name="cancel" color="#E74040" size={24} />
          <ButtonText> Informar Problema </ButtonText>
        </ButtonActions>

        <ButtonActions onPress={() => {}}>
          <Icon name="information-outline" color="#E7BA40" size={24} />
          <ButtonText> Visualizar Problemas </ButtonText>
        </ButtonActions>

        <ButtonActions onPress={() => {}}>
          <Icon name="check-circle-outline" color="#7159c1" size={24} />
          <ButtonText> Confirmar Entrega </ButtonText>
        </ButtonActions>
      </CardActions>
    </HeaderBackgroundColor>
  );
};

export default DeliveriesDetails;
