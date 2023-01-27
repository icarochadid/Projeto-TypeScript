import {ThemeProvider} from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import { defaultTheme } from './components/styles/themes/defult'
import { GlobalStyle } from './components/styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './Context/CyclesContext'


export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
        <Router/>
        </CyclesContextProvider>
      </BrowserRouter>
    <GlobalStyle/>
    </ThemeProvider>
  )
}
