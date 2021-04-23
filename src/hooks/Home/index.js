import { useState } from "react";

export default function useHome() {

    const [title,setTitle] = useState();

    const handleClickButton = () => {
        setTitle('click');
    }

    return {
        handleClickButton,
        title,
        setTitle,
    };
}