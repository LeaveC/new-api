"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "用户名至少需要2个字符",
  }).max(50),
  email: z.string().email({
    message: "请输入有效的邮箱地址",
  }),
  bio: z.string().max(160).min(4),
  notifications: z.boolean().default(false),
  accountType: z.enum(["personal", "company", "government"], {
    required_error: "请选择账户类型",
  }),
  favoriteColor: z.string({
    required_error: "请选择您喜欢的颜色",
  }),
})

export default function FormsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      notifications: false,
      accountType: undefined,
      favoriteColor: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 这里可以处理表单提交，比如向API发送数据
    console.log(values)
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          表单组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的表单组件的各种用法和样式。表单组件支持验证、自定义样式和各种表单元素。
        </p>
      </div>

      <div className="space-y-12 max-w-2xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-6">注册表单</h2>
          
          <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>用户名</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入用户名" {...field} />
                      </FormControl>
                      <FormDescription>
                        这将是您的公开显示名称。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>电子邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入电子邮箱" type="email" {...field} />
                      </FormControl>
                      <FormDescription>
                        我们将不会分享您的邮箱地址。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>个人简介</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="介绍一下您自己" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        您可以写下您的兴趣爱好和技能。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>账户类型</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="personal" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              个人账户
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="company" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              公司账户
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="government" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              政府机构
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="favoriteColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>喜欢的颜色</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择一个颜色" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="red">红色</SelectItem>
                          <SelectItem value="green">绿色</SelectItem>
                          <SelectItem value="blue">蓝色</SelectItem>
                          <SelectItem value="purple">紫色</SelectItem>
                          <SelectItem value="orange">橙色</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        这将影响您的界面风格。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="notifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          接收邮件通知
                        </FormLabel>
                        <FormDescription>
                          您将收到我们的产品更新和活动信息。
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit">提交</Button>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </div>
  )
} 