import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'CircularStd-Black': require('../assets/fonts/CircularStd-Black.otf'),
          'CircularStd-Bold': require('../assets/fonts/CircularStd-Bold.otf'),
          'CircularStd-Medium': require('../assets/fonts/CircularStd-Medium.otf'),
          'CircularStd-Book': require('../assets/fonts/CircularStd-Book.otf'),
          'CircularStd-Light': require('../assets/fonts/CircularStd-Light.otf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
