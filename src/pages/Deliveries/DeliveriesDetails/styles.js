import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CardRecipient = styled.View`
  width: 90%;

  background: #fff;
  padding: 15px;
  border-radius: 6px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7159c1;
`;

export const CardDetails = styled.View``;

export const CardLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
`;

export const CardInfo = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const CardStatus = styled.View`
  width: 90%;

  background: #fff;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
`;

export const CardDate = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateView = styled.View``;

export const CardActions = styled.View`
  width: 90%;
  height: 90;

  flex-direction: row;
  justify-content: space-around;

  background: #ebedf7;
  border-radius: 6px;
  margin-top: 15px;
`;

export const ButtonActions = styled(RectButton)`
  width: 100px;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #999;
  text-align: center;
`;
