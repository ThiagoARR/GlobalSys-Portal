import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Home, Settings, Users } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const menuItems = [
  { 
    label: 'Inicio', 
    icon: Home, 
    to: '/' 
  },
  { 
    label: 'Cadastros', 
    icon: Users, 
    to: '/users',
    submenu: [
      { label: 'All Users', to: '/users' },
      { label: 'Add User', to: '/users/add' },
    ]
  },
  { 
    label: 'Comercial', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Operação', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Financeiro', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Faturamento', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Gerencial', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Relatórios', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
  { 
    label: 'Serviços', 
    icon: Settings, 
    to: '/settings',
    submenu: [
      { label: 'General', to: '/settings/general' },
      { label: 'Security', to: '/settings/security' },
    ]
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-4 py-2">My App</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

function MenuItem({ item }: { item: typeof menuItems[number] }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.submenu) {
    return (
      <Collapsible defaultOpen className="group/collapsible" open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <item.icon className="h-4 w-4 mr-2" />
              {item.label}
              {isOpen ? (
                <ChevronDown className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronRight className="h-4 w-4 ml-auto" />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 py-2">
          {item.submenu.map((subItem) => (
            <SidebarMenuItem key={subItem.label}>
              <SidebarMenuButton asChild>
                <Link to={subItem.to}>{subItem.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link to={item.to}>
          <item.icon className="h-4 w-4 mr-2" />
          {item.label}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

