This solution uses `Linking.getInitialURLAsync` to check for a URL on app launch.  Then, it adds an event listener for subsequent deep links. 
```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    const handleDeepLink = ({ url }) => {
      setDeepLink(url);
    };

    Linking.addEventListener('url', handleDeepLink);
    handleInitialUrl();

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
      {deepLink && <Text>Deep Link: {deepLink}</Text>}
    </View>
  );
}
```