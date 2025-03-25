"use client"

import * as React from "react"
import { 
  AlertTriangle, 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Command, 
  CreditCard, 
  File, 
  FileText, 
  HelpCircle, 
  Image, 
  Laptop, 
  Loader2, 
  Moon, 
  MoreVertical, 
  Pizza, 
  Plus, 
  Settings, 
  SunMedium, 
  Trash, 
  Twitter, 
  User, 
  X, 
  type LucideIcon,
  type LucideProps
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  settings: Settings,
  user: User,
  creditCard: CreditCard,
  add: Plus,
  warning: AlertTriangle,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  arrowRight: ArrowRight,
  file: File,
  fileText: FileText,
  image: Image,
  more: MoreVertical,
  
  // 可以根据需要添加更多图标
}

// 为了方便使用，创建一个统一的图标组件
export function Icon({
  name,
  className,
  ...props
}: {
  name: keyof typeof Icons
  className?: string
} & LucideProps) {
  const IconComponent = Icons[name]
  return <IconComponent className={className} {...props} />
} 