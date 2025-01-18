'use client'

import { useState, useEffect } from 'react'
import MenuItem from '@/components/ui/menu-item'
import { MenuItem as MenuItemType } from '@/models/menu-item'
import { fetchMenuItems } from '@/services/api'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuSkeleton
} from "@/components/ui/sidebar"
import { ModeToggle } from './mode-toggle'

export function AppSidebar() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadMenuItems() {
      try {
        const items = await fetchMenuItems()
        setMenuItems(items)
        setIsLoading(false)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to load menu items. Please try again later.')
        } else {
          setError('An unexpected error occurred. Please try again later.')
        }
        setIsLoading(false)
      }
    }

    loadMenuItems()
  }, [])

  if (isLoading) {
    return (
      <Sidebar className="w-64 border-r ">
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-4 py-2">My App</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="px-2 py-2">
            {menuItems.map(() => (
              <SidebarMenuSkeleton />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
    )
  }

  if (error) {
    return (
      <Sidebar className="w-64 border-r">
        <div className="p-4 text-red-500">Error: {error}</div>
      </Sidebar>
    )
  }

  return (
    <Sidebar className="w-64 border-r ">
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-4 py-2">My App</h2>
      </SidebarHeader>
      <SidebarContent className="[&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
    overflow-hidden
    hover:overflow-y-auto
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <SidebarGroup>
          <SidebarMenu className="px-1 py-2">
            {menuItems.map((item) => (
              <MenuItem key={item.NAME} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

