import React from 'react';
import { StyleProvider, Text, getTheme } from 'native-base';
import useApp from './hooks/App';
import Home from "./screens/Home";
import theme from './variables';

export default function App() {
    
    const { ready } = useApp();

    if (!ready) {
        return <Text>Loading...</Text>;
    }

    return (
        <StyleProvider style={getTheme(theme)}>
            <Home />
        </StyleProvider>
    );
}