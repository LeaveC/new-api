"use client"

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"

// 示例数据
const invoices = [
  {
    id: "INV001",
    paymentStatus: "已支付",
    totalAmount: "¥2,500.00",
    paymentMethod: "支付宝",
  },
  {
    id: "INV002",
    paymentStatus: "待付",
    totalAmount: "¥3,800.00",
    paymentMethod: "银行转账",
  },
  {
    id: "INV003",
    paymentStatus: "已支付",
    totalAmount: "¥1,200.00",
    paymentMethod: "微信支付",
  },
  {
    id: "INV004",
    paymentStatus: "已支付",
    totalAmount: "¥4,600.00",
    paymentMethod: "支付宝",
  },
  {
    id: "INV005",
    paymentStatus: "已取消",
    totalAmount: "¥980.00",
    paymentMethod: "银行卡",
  },
]

const statusColorMap: Record<string, string> = {
  '已支付': 'bg-green-500',
  '待付': 'bg-yellow-500',
  '已取消': 'bg-red-500',
}

const users = [
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员",
    status: "在线",
    lastActive: "刚刚",
    avatarInitial: "张",
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com",
    role: "编辑",
    status: "离线",
    lastActive: "3小时前",
    avatarInitial: "李",
  },
  {
    id: 3,
    name: "王五",
    email: "wangwu@example.com",
    role: "用户",
    status: "在线",
    lastActive: "10分钟前",
    avatarInitial: "王",
  },
]

export default function DataDisplayPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          数据展示组件
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的各种数据展示组件，包括表格、卡片和徽章等。
        </p>
      </div>

      <div className="space-y-16">
        {/* 表格组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">表格</h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableCaption>近期发票列表</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">发票号</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>支付方式</TableHead>
                  <TableHead className="text-right">金额</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${statusColorMap[invoice.paymentStatus] || 'bg-gray-500'}`}></div>
                        {invoice.paymentStatus}
                      </div>
                    </TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>总计</TableCell>
                  <TableCell className="text-right">¥13,080.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>

        {/* 卡片组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">卡片</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>总销售额</CardTitle>
                <CardDescription>本月销售额与上月比较</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">¥45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+20.1%</span> 较上月
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">查看详情</Button>
                <Button size="sm">生成报告</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>新增订单</CardTitle>
                <CardDescription>今日新增订单数</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+28</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">-4.5%</span> 较昨日
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">订单详情</Button>
                <Button size="sm">查看全部</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>活跃用户</CardTitle>
                <CardDescription>当前在线用户数</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,329</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+5.7%</span> 较上周同期
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">用户分析</Button>
                <Button size="sm">实时数据</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* 选项卡组件 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">选项卡</h2>
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="users">用户列表</TabsTrigger>
              <TabsTrigger value="overview">数据概览</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="mt-6">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>用户</TableHead>
                      <TableHead>角色</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>最后活动</TableHead>
                      <TableHead className="text-right">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{user.avatarInitial}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium leading-none">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="font-normal">
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            className={user.status === "在线" ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100" : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            编辑
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      总收入
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">¥452,389</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% 较上月
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      新增用户
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2,350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% 较上月
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">销售量</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% 较上月
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      活跃用户
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 较昨日
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
} 