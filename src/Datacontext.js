import {createContext} from 'react';


const initialdata = [
    {
        todo:'first',
        id:0
    },
]

export const Globalstore = createContext(initialdata);

