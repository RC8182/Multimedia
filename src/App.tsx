import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import NavBar from "./components/NavBar/NavBar"
import Home from "./page/Home/Home"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import VladAndNikiPage from "./page/VladAndNiki/VladAndNikiPage"
import LeoPage from "./page/Leo/LeoPage"








export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="vlad/*" element={<VladAndNikiPage />} />
        <Route path="leo/*" element={<LeoPage />} />
      </Routes>
    </BrowserRouter>


   </ChakraProvider>
)
