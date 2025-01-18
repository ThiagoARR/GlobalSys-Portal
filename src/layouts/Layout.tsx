import { Outlet } from 'react-router-dom'
import { AppSidebar } from '../components/ui/app-sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function Layout() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <SidebarTrigger />
      <main className="flex-1 overflow-y-auto p-4 w-full">
        <Outlet />
      </main>
    </div>
  )
}

