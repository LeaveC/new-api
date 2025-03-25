"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from "@/components/icons"

const components = [
  {
    title: "按钮",
    href: "/components/buttons",
    description: "各种样式的按钮组件，包含不同的状态、尺寸和变体。",
  },
  {
    title: "表单",
    href: "/components/forms",
    description: "包含各种输入控件的表单元素集合，支持验证和状态管理。",
  },
  {
    title: "对话框",
    href: "/components/dialogs",
    description: "模态对话框、抽屉和弹出窗口组件，用于展示内容和收集用户输入。",
  },
  {
    title: "数据展示",
    href: "/components/data-display",
    description: "各种数据展示组件，包括表格、卡片和进度指示器。",
  },
  {
    title: "导航",
    href: "/components/navigation",
    description: "导航组件，包括菜单、标签页和分页组件。",
  },
  {
    title: "反馈",
    href: "/components/feedback",
    description: "提供用户反馈的组件，包括警告、通知和加载状态。",
  },
  {
    title: "选择器",
    href: "/components/selection",
    description: "选择控件，包括复选框、单选按钮和选择器组件。",
  },
  {
    title: "Radix",
    href: "/radix",
    description: "原生Radix UI组件示例，了解shadcn/ui的基础组件。",
  },
]

export default function HomePage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Shadcn UI 组件展示</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-[700px]">
          基于Tailwind CSS和Radix UI构建的精美组件库，提供可访问性和可自定义性。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Card key={component.href} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{component.title}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={component.href} className="w-full">
                <Button className="w-full gap-1">
                  浏览组件
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 