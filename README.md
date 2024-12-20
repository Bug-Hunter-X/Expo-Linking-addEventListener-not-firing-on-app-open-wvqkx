# Expo Linking.addEventListener Not Firing on App Open

This repository demonstrates a bug where `Linking.addEventListener` in Expo doesn't trigger when the app is already open and a deep link is tapped.  The solution provides a workaround using `Linking.getInitialURL` to handle the initial deep link, and continues to listen for subsequent links using `Linking.addEventListener`.