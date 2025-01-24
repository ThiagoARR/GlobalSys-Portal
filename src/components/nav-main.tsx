import { ChevronRight } from "lucide-react"
import { DynamicIcon } from 'lucide-react/dynamic';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Import all icons
import { Link } from "react-router"

interface MenuItem {
  TITLE: string
  URL: string | "#"
  ICON?: string
  IS_ACTIVE?: boolean
  ITEMS?: MenuItem[]
}

interface NavLinksProps {
  category: string
  items: MenuItem[]
}

export function NavLinks({ category, items }: NavLinksProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{category}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.TITLE}>
            {item.ITEMS && item.ITEMS.length > 0 ? (
              <Collapsible asChild defaultOpen={false} className="group/collapsible">
                <div>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.TITLE}>
                      {item.ICON && <DynamicIcon name={item.ICON} /> }
                      <span>{item.TITLE}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.ITEMS.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.TITLE}>
                          <SidebarMenuSubButton asChild>
                            <Link to={subItem.URL}>
                              <span>{subItem.TITLE}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ) : (
              <SidebarMenuButton asChild tooltip={item.TITLE}>
                <Link to={item.URL}>
                  {item.ICON && <DynamicIcon name={item.ICON}/>}
                  <span>{item.TITLE}</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

