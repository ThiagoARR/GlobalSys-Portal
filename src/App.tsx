import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/layout'
import { Home } from './pages/Home'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </SidebarProvider>
  )
}

export default App

