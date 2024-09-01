import { useState } from 'react'
import pageRoute from "./router/Router";
import './App.css'
import { useRoutes } from 'react-router-dom'

function App() {
  let route = useRoutes([...pageRoute]);
  return route;

}

export default App
