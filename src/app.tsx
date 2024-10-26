import { ScrollToTop } from '@/components/scroll-to-top'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/faqs'
import HomePage from '@/routes/home'
import Terms from '@/routes/terms'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="/terms" element={<Terms />} />

          {/* <Route path="support" element={<SupportPage />} /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
