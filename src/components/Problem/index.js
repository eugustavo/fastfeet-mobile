import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import ProblemModal from '~/components/ProblemModal';
import { Container, Description, Date } from './styles';

const Problem = ({ data }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const dateFormatted = useMemo(
    () => format(parseISO(data.created_at), 'dd/MM/yyyy'),
    [data.created_at]
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Container onPress={toggleModal}>
        <Description>{data.description}</Description>
        <Date>{dateFormatted}</Date>
      </Container>

      {isModalVisible && (
        <ProblemModal
          descriptionProblem={data.description}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

Problem.propTypes = {
  data: PropTypes.shape({
    created_at: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Problem;
