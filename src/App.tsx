import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import { Routes, Route,  } from "react-router-dom";

import Home from './pages/Home'
import Details from "./pages/Details"

export const App = () => (
  <ChakraProvider theme={theme}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
  </ChakraProvider>
)
