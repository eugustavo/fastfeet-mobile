import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from './Dashboard';
import DeliveriesDetails from './DeliveriesDetails';
import ViewProblems from './ViewProblems';
import ReportProblem from './ReportProblem';
import ConfirmDelivery from './ConfirmDelivery';

const Stack = createStackNavigator();

const Deliveries = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="DeliveriesDetails"
        component={DeliveriesDetails}
        options={{
          title: 'Detalhes da encomenda',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ViewProblems"
        component={ViewProblems}
        options={{
          title: 'Visualizar problemas',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DeliveriesDetails')}
            >
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          title: 'Informar problema',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DeliveriesDetails')}
            >
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DeliveriesDetails')}
            >
              <Icon name="chevron-left" size={26} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Deliveries;
