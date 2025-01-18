export interface MenuItem {
  NAME: string
  ICON: keyof typeof import('lucide-react') | null
  PATH: string | null
  SUBITEMS: MenuItem[]
}

