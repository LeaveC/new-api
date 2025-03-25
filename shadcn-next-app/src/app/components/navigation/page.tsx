"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "按钮",
    href: "/components/buttons",
    description:
      "按钮组件用于触发操作或事件，例如提交表单、打开对话框或执行删除操作。",
  },
  {
    title: "卡片",
    href: "/components/cards",
    description:
      "卡片是一个容器组件，用于将相关信息分组显示，支持各种内容类型。",
  },
  {
    title: "表单",
    href: "/components/forms",
    description:
      "表单组件用于收集用户信息，包含验证和提交功能。",
  },
  {
    title: "反馈",
    href: "/components/feedback",
    description:
      "反馈组件用于向用户提供操作结果的反馈，如警告、通知和加载状态。",
  },
]

export default function NavigationPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          导航组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的各种导航组件，包括导航菜单、面包屑和分页器等。
        </p>
      </div>

      <div className="space-y-16 max-w-4xl mx-auto">
        {/* 导航菜单 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">导航菜单</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>开始使用</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Shadcn UI
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              美观、现代化、可定制的React组件库
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/components/buttons"
                          >
                            <div className="text-sm font-medium leading-none">按钮</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              按钮组件用于触发操作或事件
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/components/forms"
                          >
                            <div className="text-sm font-medium leading-none">表单</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              表单组件用于收集用户信息
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/components/cards"
                          >
                            <div className="text-sm font-medium leading-none">卡片</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              卡片是一个容器组件，用于将相关信息分组显示
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>组件</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <li key={component.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href={component.href}
                            >
                              <div className="text-sm font-medium leading-none">{component.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      文档
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* 面包屑 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">面包屑</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <div className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">组件</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>导航</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">产品</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products/electronics">电子产品</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>智能手机</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        {/* 分页器 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">分页器</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <div className="space-y-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink href="#" isActive={i === 1}>
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* 菜单栏 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">菜单栏</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>文件</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    新建 <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    打开 <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    保存 <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>另存为</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>退出</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>编辑</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    撤销 <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    剪切 <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    复制 <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    粘贴 <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    全选 <MenubarShortcut>⌘A</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>视图</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>缩放</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>外观</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarRadioGroup value="light">
                        <MenubarRadioItem value="light">亮色主题</MenubarRadioItem>
                        <MenubarRadioItem value="dark">暗色主题</MenubarRadioItem>
                        <MenubarRadioItem value="system">系统默认</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>全屏</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* 标签页 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">标签页</h2>
          <div className="space-y-4">
            <Tabs defaultValue="account" className="w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">账户</TabsTrigger>
                <TabsTrigger value="password">密码</TabsTrigger>
                <TabsTrigger value="settings">设置</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">账户设置</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  管理您的账户信息，包括您的电子邮件和配置文件详细信息。
                </p>
              </TabsContent>
              <TabsContent value="password" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">更改密码</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  更新您的密码以保护您的账户安全。
                </p>
              </TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">应用设置</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  管理您的应用设置和首选项。
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  )
} 