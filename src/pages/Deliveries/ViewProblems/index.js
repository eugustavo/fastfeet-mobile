import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import HeaderBackgroundColor from '~/components/HeaderBackgroundColor';
import Problem from '~/components/Problem';

import { Container, ProblemsList } from './styles';

const ViewProblems = ({ route }) => {
  const { id } = route.params;
  const [problems, setProblems] = useState('');

  useEffect(() => {
    const loadProblems = async () => {
      const response = await api.get(`deliveryproblem/${id}`);

      setProblems(response.data);
    };
    loadProblems();
  }, [id]);

  return (
    <HeaderBackgroundColor>
      <Container>
        <ProblemsList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Problem data={item} />}
        />
      </Container>
    </HeaderBackgroundColor>
  );
};

ViewProblems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ViewProblems;
