import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeliverymanInfo = styled.View`
  margin-left: 6px;
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: #666;
  margin-left: 4px;
`;

export const DeliverymanName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  max-width: 200px;
`;

export const Logout = styled.TouchableOpacity``;

export const TitleAndActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #444;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PendingButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const PendingButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.atived ? '#7159c1' : '#999')};
  border-bottom-color: ${(props) => (props.atived ? '#7159c1' : '#fff')};
  border-bottom-width: ${(props) => (props.atived ? '2' : '0')};
`;

export const DeliveredButton = styled.TouchableOpacity``;

export const DeliveredButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.atived ? '#7159c1' : '#999')};
  border-bottom-color: ${(props) => (props.atived ? '#7159c1' : '#fff')};
  border-bottom-width: ${(props) => (props.atived ? '2' : '0')};
`;

export const OrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
