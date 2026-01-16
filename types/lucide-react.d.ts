declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    absoluteStrokeWidth?: boolean
  }

  export type Icon = FC<IconProps>

  export const Sparkles: Icon
  export const Users: Icon
  export const ArrowRight: Icon
  export const Mail: Icon
  export const X: Icon
  export const Network: Icon
  
  // Add other icons as needed
  export const ChevronDown: Icon
  export const ChevronUp: Icon
  export const ChevronLeft: Icon
  export const ChevronRight: Icon
  export const Menu: Icon
  export const Search: Icon
  export const Home: Icon
  export const Settings: Icon
  export const User: Icon
  export const LogOut: Icon
  export const Plus: Icon
  export const Minus: Icon
  export const Edit: Icon
  export const Trash: Icon
  export const Check: Icon
  export const AlertCircle: Icon
  export const Info: Icon
  export const HelpCircle: Icon
  export const ExternalLink: Icon
  export const Download: Icon
  export const Upload: Icon
  export const File: Icon
  export const Folder: Icon
  export const Image: Icon
  export const Calendar: Icon
  export const Clock: Icon
  export const Bell: Icon
  export const Heart: Icon
  export const Star: Icon
  export const Share: Icon
  export const Copy: Icon
  export const Eye: Icon
  export const EyeOff: Icon
  export const Lock: Icon
  export const Unlock: Icon
  export const RefreshCw: Icon
  export const Loader: Icon
  export const MoreVertical: Icon
  export const MoreHorizontal: Icon
}
