"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SelectionPage() {
  const [checkedItems, setCheckedItems] = React.useState({
    notifications: true,
    newsletter: false,
    offers: true
  })
  
  const [switchItems, setSwitchItems] = React.useState({
    airplane: false,
    bluetooth: true,
    wifi: true
  })
  
  const [radioValue, setRadioValue] = React.useState("comfortable")
  const [dropdownRadioValue, setDropdownRadioValue] = React.useState("asc")

  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          选择器组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的各种选择器组件，包括复选框、单选按钮、开关和下拉菜单等。
        </p>
      </div>

      <div className="space-y-16 max-w-3xl mx-auto">
        {/* 复选框 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">复选框</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="notifications" 
                  checked={checkedItems.notifications}
                  onCheckedChange={(checked: boolean | 'indeterminate') => 
                    setCheckedItems({...checkedItems, notifications: checked as boolean})
                  }
                />
                <Label htmlFor="notifications">启用通知</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter" 
                  checked={checkedItems.newsletter}
                  onCheckedChange={(checked: boolean | 'indeterminate') => 
                    setCheckedItems({...checkedItems, newsletter: checked as boolean})
                  }
                />
                <Label htmlFor="newsletter">订阅新闻通讯</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="offers" 
                  checked={checkedItems.offers}
                  onCheckedChange={(checked: boolean | 'indeterminate') => 
                    setCheckedItems({...checkedItems, offers: checked as boolean})
                  }
                />
                <Label htmlFor="offers">接收促销和折扣信息</Label>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  已选择: {Object.entries(checkedItems)
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
                    .join(', ')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 单选按钮 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">单选按钮</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium mb-3">选择密度设置</h3>
                <RadioGroup 
                  value={radioValue} 
                  onValueChange={setRadioValue}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="comfortable" />
                    <Label htmlFor="comfortable">舒适</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="compact" />
                    <Label htmlFor="compact">紧凑</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="condensed" id="condensed" />
                    <Label htmlFor="condensed">超紧凑</Label>
                  </div>
                </RadioGroup>
                <p className="text-sm text-muted-foreground mt-2">
                  当前选择: {radioValue}
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-base font-medium mb-3">选择主题颜色</h3>
                <RadioGroup className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="default" id="default" className="peer sr-only" />
                    <Label
                      htmlFor="default"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                      <span className="mt-2">默认</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="red" id="red" className="peer sr-only" />
                    <Label
                      htmlFor="red"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="w-4 h-4 rounded-full bg-red-500"></span>
                      <span className="mt-2">红色</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="green" id="green" className="peer sr-only" />
                    <Label
                      htmlFor="green"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <span className="w-4 h-4 rounded-full bg-green-500"></span>
                      <span className="mt-2">绿色</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </section>

        {/* 开关组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">开关组件</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="airplane">飞行模式</Label>
                  <p className="text-sm text-muted-foreground">
                    禁用所有无线连接
                  </p>
                </div>
                <Switch 
                  id="airplane" 
                  checked={switchItems.airplane}
                  onCheckedChange={(checked) => 
                    setSwitchItems({...switchItems, airplane: checked})
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="bluetooth">蓝牙</Label>
                  <p className="text-sm text-muted-foreground">
                    允许蓝牙设备连接
                  </p>
                </div>
                <Switch 
                  id="bluetooth" 
                  checked={switchItems.bluetooth}
                  onCheckedChange={(checked) => 
                    setSwitchItems({...switchItems, bluetooth: checked})
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="wifi">WiFi</Label>
                  <p className="text-sm text-muted-foreground">
                    连接到无线网络
                  </p>
                </div>
                <Switch 
                  id="wifi" 
                  checked={switchItems.wifi}
                  onCheckedChange={(checked) => 
                    setSwitchItems({...switchItems, wifi: checked})
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* 选择框和下拉菜单 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">选择框和下拉菜单</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
              <h3 className="text-base font-medium mb-4">选择框</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">语言</Label>
                  <Select>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="选择一种语言" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>亚洲</SelectLabel>
                        <SelectItem value="zh-CN">简体中文</SelectItem>
                        <SelectItem value="zh-TW">繁体中文</SelectItem>
                        <SelectItem value="ja">日语</SelectItem>
                        <SelectItem value="ko">韩语</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>欧美</SelectLabel>
                        <SelectItem value="en">英语</SelectItem>
                        <SelectItem value="fr">法语</SelectItem>
                        <SelectItem value="de">德语</SelectItem>
                        <SelectItem value="es">西班牙语</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">时区</Label>
                  <Select>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="选择您的时区" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">UTC-8 (太平洋时间)</SelectItem>
                      <SelectItem value="utc-5">UTC-5 (东部时间)</SelectItem>
                      <SelectItem value="utc+0">UTC+0 (格林威治时间)</SelectItem>
                      <SelectItem value="utc+1">UTC+1 (中欧时间)</SelectItem>
                      <SelectItem value="utc+8">UTC+8 (北京时间)</SelectItem>
                      <SelectItem value="utc+9">UTC+9 (东京时间)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
              <h3 className="text-base font-medium mb-4">下拉菜单</h3>
              <div className="flex justify-start">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">打开菜单</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        个人资料
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        账单
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        设置
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        键盘快捷键
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>团队</DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>邀请用户</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>邮件</DropdownMenuItem>
                            <DropdownMenuItem>消息</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>复制链接</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={dropdownRadioValue} onValueChange={setDropdownRadioValue}>
                      <DropdownMenuLabel>排序方式</DropdownMenuLabel>
                      <DropdownMenuRadioItem value="asc">升序</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="desc">降序</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      登出
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 