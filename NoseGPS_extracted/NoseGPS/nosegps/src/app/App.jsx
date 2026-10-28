import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { SignupPage } from '../pages/signup'
import { SiteFooter } from '../widgets/site-footer'
import { SiteHeader } from '../widgets/site-header'
import { ScrollManager } from './providers/ScrollManager'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <ScrollManager />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App
