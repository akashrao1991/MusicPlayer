import React from 'react';
import { Provider } from 'react-redux';
import { AppBar } from './components/appBar/AppBar';
import MainScreen from './MainScreen';
import { store } from './store/store';

const App = () => {

    return (
        <Provider store={store}>
            <AppBar />
            <MainScreen />
        </Provider>
    )
}

export default App;