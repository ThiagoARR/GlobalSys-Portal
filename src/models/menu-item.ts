import { LucideIcon } from "lucide-react"

export interface MenuItem {
  TITLE: string
  URL: string
  ICON?: string
  IS_ACTIVE?: boolean
  ITEMS?: MenuItem[]
}

export interface MenuData {
  [key: string]: MenuItem[]
}
