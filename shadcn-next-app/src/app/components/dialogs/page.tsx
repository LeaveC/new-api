"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function DialogsPage() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          对话框组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的各种对话框组件，包括标准对话框、警告对话框和抽屉组件。
        </p>
      </div>

      <div className="space-y-16 max-w-3xl mx-auto">
        {/* 基础对话框 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">基础对话框</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium mb-2">标准对话框</h3>
              <p className="text-sm text-muted-foreground mb-4">
                点击按钮打开一个带有表单的标准对话框。
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">打开对话框</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>编辑个人资料</DialogTitle>
                    <DialogDescription>
                      在此处修改您的个人资料信息。完成后点击保存。
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        姓名
                      </Label>
                      <Input
                        id="name"
                        defaultValue="李明"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        用户名
                      </Label>
                      <Input
                        id="username"
                        defaultValue="liming123"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">保存更改</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-medium mb-2">警告对话框</h3>
              <p className="text-sm text-muted-foreground mb-4">
                用于确认危险操作的警告对话框。
              </p>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">删除账户</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>您确定要删除您的账户吗？</AlertDialogTitle>
                    <AlertDialogDescription>
                      此操作无法撤销。这将永久删除您的账户以及所有相关数据。
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>取消</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground">删除</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </section>
        
        {/* 抽屉组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">抽屉组件</h2>
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-medium mb-2">底部弹出抽屉</h3>
            <p className="text-sm text-muted-foreground mb-4">
              从屏幕底部弹出的抽屉组件，适合在移动设备上使用。
            </p>
            
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">打开抽屉</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>创建新账户</DrawerTitle>
                    <DrawerDescription>请填写以下信息以创建您的账户。</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">电子邮箱</Label>
                        <Input id="email" placeholder="请输入您的电子邮箱" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">密码</Label>
                        <Input id="password" type="password" placeholder="设置一个安全的密码" />
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>注册账户</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">取消</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </section>
      </div>
    </div>
  )
} 