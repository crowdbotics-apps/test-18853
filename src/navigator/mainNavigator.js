import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList77569Navigator from '../features/NotificationList77569/navigator';
import Settings77568Navigator from '../features/Settings77568/navigator';
import Settings77560Navigator from '../features/Settings77560/navigator';
import UserProfile77558Navigator from '../features/UserProfile77558/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList77569: { screen: NotificationList77569Navigator },
Settings77568: { screen: Settings77568Navigator },
Settings77560: { screen: Settings77560Navigator },
UserProfile77558: { screen: UserProfile77558Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
