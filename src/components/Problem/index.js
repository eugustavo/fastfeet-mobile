import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

import { Container, Description, Date } from './styles';

const Problem = ({ data }) => {
  const dateFormatted = useMemo(
    () => format(parseISO(data.created_at), 'dd/MM/yyyy'),
    [data.created_at]
  );

  return (
    <Container>
      <Description>{data.description}</Description>
      <Date>{dateFormatted}</Date>
    </Container>
  );
};

export default Problem;
