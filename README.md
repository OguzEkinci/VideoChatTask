# VideoChat App

This is a VideoChat application built using React Native and WebRTC, allowing users to create and join video chat rooms. The application uses Firebase Firestore for data storage and state management with Redux. **Please note, this application can only be used by devices on the same Wi-Fi network.**

## Features

- Create and join video chat rooms
- Real-time video and audio streaming using WebRTC
- Manage camera and microphone permissions
- Display and manage remote participants' streams

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/videochat-app.git
    cd videochat-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Link native dependencies:**

    ```sh
    npx react-native link
    ```

4. **Set up Firebase:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Add an Android/iOS app to your Firebase project
    - Follow the instructions to download `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS)
    - Place the files in their respective locations:
        - `android/app/google-services.json`
        - `ios/YourProjectName/GoogleService-Info.plist`

5. **Run the application:**

    ```sh
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

## Usage

- **Create a Room:**
    - Enter a display name
    - Tap "Create room"
    - Share the room ID with other participants

- **Join a Room:**
    - Enter a room ID
    - Tap "Join"
    - Start video chatting with other participants

## Code Overview

### HomeScreen Component

- **States:**
    - `roomId`: Stores the room ID.
    - `localStream`: Stores the local media stream.
    - `userName`: Stores the user's display name.
    - `screen`: Manages the current screen state.
    - `remoteMedias`, `remoteStreams`, `peerConnections`: Manage the state of remote media, streams, and peer connections.
    - `totalParticipants`: Tracks the total number of participants in the room.

- **Functions:**
    - `createRoom()`: Creates a new room and initializes peer connections.
    - `joinRoom()`: Joins an existing room.
    - `checkRoomExist()`: Checks if the room exists before joining.
    - `openMediaDevices()`: Opens the media devices (camera and microphone).
    - `toggleMicrophone()`, `toggleCamera()`: Toggles the state of the microphone and camera.
    - `hangUp()`: Ends the call and cleans up streams and connections.
    - `listenPeerConnections()`, `registerPeerConnection()`: Handle peer connection setup and management.

### Store Configuration

- **Redux Store:**
    - Configured with `persistReducer` to persist the Redux state.
    - Middleware includes default middleware with serialization and thunk disabled.

### App Component

- **Provider Setup:**
    - Configures the Redux store and persists the state using `PersistGate`.
    - Uses `SafeAreaProvider` to handle safe area insets.

## Dependencies

- `react-native`
- `react-native-webrtc`
- `@react-native-firebase/firestore`
- `redux`
- `@reduxjs/toolkit`
- `redux-persist`
- `react-redux`

## License

This project is licensed under the MIT License.
