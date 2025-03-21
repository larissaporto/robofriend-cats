import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardList from './CardList'
import 'tachyons'
import { robots } from './assets/robots'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <CardList robots={robots} />
    </>
  </StrictMode>,
)
