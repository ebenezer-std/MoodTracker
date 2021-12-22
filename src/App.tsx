import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />

      </NavigationContainer>
    
  )
}



const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: 'teal',
      flex: 1

    }

  }
)
