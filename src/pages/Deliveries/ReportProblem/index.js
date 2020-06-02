import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import api from '~/services/api';
import HeaderBackgroundColor from '~/components/HeaderBackgroundColor';

import {
  CardDescriptionProblem,
  DescriptionProblem,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const ReportProblem = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post(`delivery/${id}/problems`, {
        delivery_id: id,
        description,
      });
      setDescription('');

      if (response.status === 200) {
        Alert.alert(
          'Problema reportado',
          'O problema informado foi reportado com sucesso!'
        );
      } else {
        Alert.alert(
          'Erro',
          'Erro ao reportar problema! Tente novamente mais tarde.'
        );
      }
    } catch (err) {
      console.tron.log(err);
      Alert.alert(
        'Erro',
        'Erro ao reportar problema! Tente novamente mais tarde.'
      );
    }
    navigation.goBack();
  };

  return (
    <HeaderBackgroundColor>
      <CardDescriptionProblem>
        <DescriptionProblem
          multiline
          autoCorrect={false}
          placeholder="Inclua aqui o problema que ocorreu na entrega"
          placeholderTextColor="grey"
          value={description}
          onChangeText={setDescription}
        />
      </CardDescriptionProblem>
      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText> Enviar </SubmitButtonText>
      </SubmitButton>
    </HeaderBackgroundColor>
  );
};

ReportProblem.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ReportProblem;
