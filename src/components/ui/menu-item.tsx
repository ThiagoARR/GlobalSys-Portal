import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { MenuItem as MenuItemType } from '@/models/menu-item'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

function MenuItem({ item, depth = 0 }: { item: MenuItemType; depth?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const IconComponent = item.ICON ? (Icons[item.ICON as keyof typeof Icons] as React.ElementType) : null

  const hasSubItems = item.SUBITEMS && item.SUBITEMS.length > 0

  const renderContent = () => (
    <SidebarMenuButton 
      className={cn(
        "w-full flex items-center relative",
        depth === 0 ? "px-2" : "pl-[28px] pr-2",
      )}
    >
      {depth > 0 && (
        <div 
          className="absolute left-4 h-full w-px bg-border -top-full"
          aria-hidden="true"
        />
      )}
      {depth > 0 && (
        <div 
          className="absolute left-4 top-1/2 h-px w-3 bg-border"
          aria-hidden="true"
        />
      )}
      {IconComponent && (
        <IconComponent 
          className={cn(
            "h-4 w-4 mr-2 flex-shrink-0",
            depth > 0 && "opacity-75 scale-90"
          )} 
          aria-hidden="true" 
        />
      )}
      {!IconComponent && depth > 0 && (
        <div
          className={`h-2 w-2 rounded-full border border-foreground/50 mr-2 flex-shrink-0 ${
            depth === 1 ? 'bg-blue-600' : 'bg-red-600'
          }`}
        />
      )}
      <span className={cn(
        "flex-1 truncate text-sm",
        depth === 0 && "font-medium"
      )}>
        {item.NAME}
      </span>
      {hasSubItems && (
        <span className="ml-auto flex-shrink-0">
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </span>
      )}
    </SidebarMenuButton>
  )

  if (hasSubItems) {
    return (
      <Collapsible 
        defaultOpen={depth === 0} 
        className={cn(
          "w-full relative",
          depth > 0 && "ml-2"
        )} 
        open={isOpen} 
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuItem className="w-full">
            {item.PATH ? (
              <NavLink 
                to={item.PATH}
                className={({ isActive }) => cn(
                  "w-full block",
                  isActive && "bg-accent text-accent-foreground"
                )}
              >
                {renderContent()}
              </NavLink>
            ) : (
              renderContent()
            )}
          </SidebarMenuItem>
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full relative">
          {depth > 0 && (
            <div 
              className="absolute left-4 h-full w-px bg-border" 
              aria-hidden="true"
            />
          )}
          {item.SUBITEMS.map((subItem) => (
            <MenuItem 
              key={subItem.NAME} 
              item={subItem} 
              depth={depth + 1} 
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <SidebarMenuItem className={cn(
      "w-full relative",
      depth > 0 && "ml-2"
    )}>
      {item.PATH ? (
        <NavLink 
          to={item.PATH}
          className={({ isActive }) => cn(
            "w-full block",
            isActive && "bg-accent text-accent-foreground"
          )}
        >
          {renderContent()}
        </NavLink>
      ) : (
        renderContent()
      )}
    </SidebarMenuItem>
  )
}

export default MenuItem