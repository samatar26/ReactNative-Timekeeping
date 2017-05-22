### TimeManagement
This is a mobile app which allows freelancers to record the time they spend working on different client's projects with minimal effort. It also provides them with a general overview of the total amount of time they have spent working on different projects.

### Tech Stack
- React-Native
- React-Router
- Realm


### Learnings on React-Native

### AppRegistry

The AppRegistry just tells React Native which component is the root one for the whole application.

### View
The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.

### Platform
When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for iOS and Android.

### TextInput
A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

```js
returnKeyType?: enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')

```
