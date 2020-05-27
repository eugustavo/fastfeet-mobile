import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;

  align-items: center;
  justify-content: center;
`;

export const Infos = styled.View`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;

  align-items: flex-start;
  justify-content: flex-start;
`;

export const TextInfo = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const DeliverymanInfo = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 3px;
`;

export const Logout = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background: #e74040;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
