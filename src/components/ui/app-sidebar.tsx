import * as React from "react"
import {
  AudioWaveform,
  BadgePercent,
  BaggageClaim,
  BookOpen,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  Command,
  FileText,
  FileX,
  Frame,
  GalleryVerticalEnd,
  Handshake,
  Map,
  MapPin,
  Newspaper,
  PieChart,
  Receipt,
  ReceiptCent,
  ReceiptText,
  Settings2,
  SquareTerminal,
  UserPlus
} from "lucide-react"
import { NavLinks } from "@/components/nav-main"
import { NavComercial } from "@/components/nav-project"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Skeleton } from "./skeleton"
import { MenuData } from "@/models/menu-item"

const API_URL = 'https://localhost:7288'
// This is sample data.
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [menuData, setMenuData] = React.useState<MenuData | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchMenuData = async () => {
      try {
          const response = await fetch(`${API_URL}/itemMenu`, {
            headers: {
              'X-API-KEY': 'f8f8133b-4c59-4ae2-9c1b-8e1b73aa8664',
              'Content-Type': 'application/json'
            }
          })
          if (!response.ok) {
            throw new Error('Failed to fetch menu items')
          }
          const data = await response.json()
          setMenuData(data)
          return data
      } catch (error) {
        console.error('Error fetching menu items:', error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }

    fetchMenuData()
  }, [])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* Add header content if needed */}</SidebarHeader>
      <SidebarContent>
        {isLoading ? (
          // Mostrar skeletons enquanto carrega
          Array.from({ length: 25 }).map((_, index) => <Skeleton key={index} className="h-6 w-full mb-2" />)
        ) : menuData ? (
          Object.entries(menuData).map(([category, items]) => (
            <NavLinks key={category} category={category} items={items} />
          ))
        ) : (
          <div>Failed to load menu data</div>
        )}
      </SidebarContent>
      <SidebarFooter>{/* Add footer content if needed */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
