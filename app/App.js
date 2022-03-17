import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppBar } from './components/appBar/AppBar';
import MainScreen from './MainScreen';
import { persistor, store } from './store/store';

const App = () => {

    return (
        <Provider store={store}>
                <AppBar />
                <MainScreen />
        </Provider>
    )
}

export default App;