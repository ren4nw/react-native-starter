import { useEffect, useState } from "react";
import * as Font from 'expo-font';

export default function useApp() {
    
    const [ready,setReady] = useState(false);

    useEffect(() => {
        const getFont = async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Feather: require('native-base/Fonts/Feather.ttf'),
                MontserratThin: require('../../../assets/fonts/Montserrat-Thin.ttf'),
                MontserratRegular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
            });
    
            setReady(true);
        }

        getFont();
    }, []);
    
    return {
        ready,
        setReady,
    }
}