/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';

import {
  Container,
  Header,
  OrderTitle,
  Details,
  DateDetails,
  TitleDetail,
  Date,
  CityDetails,
  City,
  ViewOrderDetails,
  ViewOrderDetailsText,
  StepIndicatorPosition,
} from './styles';

const Order = ({ data, onDetails }) => {
  const [orderStatus, setOrderStatus] = useState(0);

  useEffect(() => {
    if (!data.end_date && data.start_date) {
      setOrderStatus(1);
    }
    if (data.end_date) {
      setOrderStatus(2);
    }
  }, [data.end_date, data.start_date]);

  const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];
  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 10,
    stepStrokeCurrentColor: '#7159c1',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#7159c1',
    stepStrokeUnFinishedColor: '#7159c1',
    separatorFinishedColor: '#7159c1',
    separatorUnFinishedColor: '#7159c1',
    stepIndicatorFinishedColor: '#7159c1',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#7159c1',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#7159c1',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#7159c1',
    labelColor: '#7159c1',
    labelSize: 13,
    currentStepLabelColor: '#7159c1',
  };

  const formattedDate = useMemo(
    () => format(parseISO(data.updatedAt), 'dd/MM/yyyy'),
    [data.updatedAt]
  );

  return (
    <Container>
      <Header>
        <Icon
          name={
            orderStatus === 0
              ? 'truck'
              : orderStatus === 1
              ? 'truck-fast'
              : 'truck-check'
          }
          size={26}
          color="#7159c1"
        />
        <OrderTitle> {data.product} </OrderTitle>
      </Header>

      <StepIndicatorPosition>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={orderStatus}
          labels={labels}
          stepCount={3}
        />
      </StepIndicatorPosition>

      <Details>
        <DateDetails>
          <TitleDetail> Data </TitleDetail>
          <Date> {formattedDate} </Date>
        </DateDetails>

        <CityDetails>
          <TitleDetail> Cidade </TitleDetail>
          <City> {data.recipient.city} </City>
        </CityDetails>

        <ViewOrderDetails onPress={onDetails}>
          <ViewOrderDetailsText>Ver detalhes</ViewOrderDetailsText>
        </ViewOrderDetails>
      </Details>
    </Container>
  );
};

Order.propTypes = {
  onDetails: PropTypes.func.isRequired,
  data: PropTypes.shape({
    product: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    updatedAt: PropTypes.string,
    recipient: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
};

export default Order;
