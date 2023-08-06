// import 'react-native-gesture-handler';
// import React, {useEffect} from 'react';

// import SplashScreen from 'react-native-splash-screen';

// import {Navigator} from './src/navigation/navigator';

// export const App = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   return <Navigator />;
// };

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {Navigator} from './src/navigation/navigator';

export const App = () => {

useEffect( () => {
  if(Platform.OS === 'android') 
  setTimeout(()=>SplashScreen.hide(),1500);
}, []);

return <Navigator />;
};

