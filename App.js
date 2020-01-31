import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Desc from './src/ProductDesc';
const AppStack = createStackNavigator({ 
  Desc : { screen: Desc},
},{
  initialRouteName: 'Desc',
  headerMode: 'none',
}
);
export default createAppContainer(AppStack);
