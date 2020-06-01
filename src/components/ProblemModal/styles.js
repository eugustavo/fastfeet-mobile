import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 6px;

  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
  text-align: left;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 5px;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background: #7159c1;

  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const ToggleButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
