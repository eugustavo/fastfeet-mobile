import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 90px;
  width: 90%;
  position: absolute;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
