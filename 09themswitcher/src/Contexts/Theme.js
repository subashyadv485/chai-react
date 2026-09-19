import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},    // we can also give here variable or their method, we can also pass sate or anyother things 
    lightTheme: () => {},
})
// It is not nessary to make other class for provider we can also export .provider here  , it is syntex that many programmer use for easily access
export const ThemeProvider = ThemeContext.Provider
// that much not only we can make here Custom hook, Akasr log bana te hai for easy syntex
export default function useTheme(){
    return useContext(ThemeContext)
}