import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryMojis from './components/StoryMojis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoryMojis />
  </StrictMode>,
)
