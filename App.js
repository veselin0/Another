import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import ScuareScreen from './screens/SquareScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: ScuareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
