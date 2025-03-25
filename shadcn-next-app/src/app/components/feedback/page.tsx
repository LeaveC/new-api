"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle, CheckCircle } from "lucide-react"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function FeedbackPage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          反馈组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的各种反馈组件，包括警告、进度和加载状态等。
        </p>
      </div>

      <div className="space-y-16 max-w-3xl mx-auto">
        {/* 警告组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">警告组件</h2>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>提示</AlertTitle>
              <AlertDescription>
                这是一条提示信息，用于展示普通的提示内容。
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>错误</AlertTitle>
              <AlertDescription>
                提交表单时发生错误，请检查您的输入并重试。
              </AlertDescription>
            </Alert>
            
            <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-50 border-green-200 dark:border-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>成功</AlertTitle>
              <AlertDescription>
                您的数据已成功保存。
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* 进度组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">进度组件</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-base font-medium">上传进度</h3>
              <Progress value={progress} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{progress}%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-medium">下载进度</h3>
              <Progress value={87} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>87%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-medium">任务完成度</h3>
              <Progress value={33} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2/6 完成</span>
                <span>33%</span>
              </div>
            </div>
          </div>
        </section>

        {/* 吐司通知 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">吐司通知</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  toast.success("操作已成功完成", {
                    description: "您的更改已保存。",
                  })
                }}
              >
                显示成功通知
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  toast.error("错误发生", {
                    description: "操作未能完成，请重试。",
                  })
                }}
              >
                显示错误通知
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  toast("待办事项已创建", {
                    description: "您的待办事项已成功创建。",
                    action: {
                      label: "查看",
                      onClick: () => console.log("查看待办事项"),
                    },
                  })
                }}
              >
                带操作的通知
              </Button>
            </div>
            <Toaster />
          </div>
        </section>

        {/* 骨架加载 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">骨架加载</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
            
            <div className="flex items-center space-x-4">
              <Skeleton className="h-20 w-28 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
            </div>
          </div>
        </section>

        {/* 手风琴组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">手风琴组件</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>什么是Shadcn UI？</AccordionTrigger>
              <AccordionContent>
                Shadcn UI 是一个基于 Radix UI 和 Tailwind CSS 构建的组件库。它提供了可定制、可复用的组件，支持黑暗模式和可访问性。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shadcn UI 是免费的吗？</AccordionTrigger>
              <AccordionContent>
                是的，Shadcn UI 是完全免费和开源的。您可以在任何个人或商业项目中使用它，无需付费或归属。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>如何安装 Shadcn UI？</AccordionTrigger>
              <AccordionContent>
                您可以使用 npm 或 yarn 安装 shadcn-ui CLI 工具，然后通过命令行添加您需要的组件到您的项目中。例如：npx shadcn-ui@latest add button
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 分隔符 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">分隔符</h2>
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-sm font-medium">水平分隔符</h3>
              <Separator className="my-4" />
            </div>
            
            <div className="flex space-x-4 py-4">
              <div>文本</div>
              <Separator orientation="vertical" className="h-auto" />
              <div>文本</div>
              <Separator orientation="vertical" className="h-auto" />
              <div>文本</div>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-sm font-medium">带文本的分隔符</h4>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-2 text-xs text-muted-foreground">
                    分隔文本
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 