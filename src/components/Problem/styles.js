import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
  position: relative;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #999;
  max-width: 70%;
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #c1c1c1;
`;
