import { StyleSheet } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './Screens/FavoritesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#000000' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CategoriesScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000', // لون خلفية شريط العنوان
          },
          headerTintColor: '#fff', // لون النص في شريط العنوان
          contentStyle: {
            backgroundColor: '#000000', // لون خلفية المحتوى
          },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MealsOverView" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );

};

const styles = StyleSheet.create({
  container: {}
});
