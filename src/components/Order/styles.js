import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 180px;
  width: 340px;

  border-radius: 4px;
  margin-bottom: 50px;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 15px;
  margin-bottom: 10px;
`;

export const OrderTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7159c1;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  height: 65px;
  margin-top: 20px;
  background: #f8f9fd;
`;

export const DateDetails = styled.View`
  align-items: flex-start;
`;

export const TitleDetail = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #999;
`;

export const Date = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const CityDetails = styled.View`
  align-items: flex-start;
`;

export const City = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const ViewOrderDetails = styled.TouchableOpacity``;

export const ViewOrderDetailsText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
`;
