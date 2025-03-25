import SiteLayout from "@/components/layout/site-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon, MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ShowcasePage() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
            组件大杂烩
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            展示各种shadcn UI组件的组合使用，创建丰富的用户界面和交互体验。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 仪表盘卡片区域 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">仪表盘</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
                  搜索
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none hover:opacity-90 transition-opacity">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  新建
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">总收入</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">¥142,384</div>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <span className="mr-1">↑</span> 18.2% 较上月
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">活跃用户</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,543</div>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <span className="mr-1">↑</span> 7.4% 较上月
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/30 dark:to-green-950/30 border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">转化率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.8%</div>
                  <p className="text-xs text-red-600 mt-1 flex items-center">
                    <span className="mr-1">↓</span> 3.1% 较上月
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>最近交易</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={transaction.avatar} alt={transaction.name} />
                          <AvatarFallback>{transaction.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{transaction.name}</div>
                          <div className="text-sm text-muted-foreground">{transaction.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={transaction.status === '成功' ? 'text-green-600' : transaction.status === '处理中' ? 'text-yellow-600' : 'text-red-600'}>
                          {transaction.amount}
                        </div>
                        <Badge variant={transaction.status === '成功' ? 'default' : transaction.status === '处理中' ? 'outline' : 'destructive'}>
                          {transaction.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>操作</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>查看详情</DropdownMenuItem>
                            <DropdownMenuItem>发送邮件</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">标记问题</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 侧边栏区域 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>登录</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱</Label>
                    <Input id="email" type="email" placeholder="输入您的邮箱" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">密码</Label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">忘记密码?</a>
                    </div>
                    <Input id="password" type="password" placeholder="输入您的密码" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm">记住我</label>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity">
                      登录
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    <span className="text-gray-500">还没有账号?</span>
                    <a href="#" className="text-blue-600 hover:underline ml-1">立即注册</a>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>常见问题</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>如何创建新账户?</AccordionTrigger>
                    <AccordionContent>
                      点击页面右上角的"注册"按钮，填写您的个人信息，然后点击"创建账户"即可完成注册流程。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>如何修改我的密码?</AccordionTrigger>
                    <AccordionContent>
                      登录后，进入个人设置页面，点击"安全"选项卡，然后选择"修改密码"即可更新您的密码。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>如何获取技术支持?</AccordionTrigger>
                    <AccordionContent>
                      您可以通过在线聊天、发送邮件至support@example.com或拨打我们的客服热线获取技术支持。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>产品发布</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4 bg-blue-50 border-blue-200 dark:bg-blue-950/50 dark:border-blue-800">
                  <AlertTitle className="text-blue-800 dark:text-blue-300">新功能上线!</AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-400">
                    我们刚刚更新了数据分析模块，体验更快更强大的报表功能。
                  </AlertDescription>
                </Alert>

                <div className="relative pl-6 pb-6">
                  <div className="absolute left-0 top-1 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]"></div>
                  <div className="mb-2">
                    <div className="font-medium">数据可视化升级</div>
                    <div className="text-sm text-muted-foreground">2024年6月15日</div>
                  </div>
                  <p className="text-sm">全新的图表组件和可自定义的仪表盘布局，让数据分析更加直观和高效。</p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gray-400 -translate-x-[3px]"></div>
                  <div className="mb-2">
                    <div className="font-medium">移动端应用发布</div>
                    <div className="text-sm text-muted-foreground">2024年5月28日</div>
                  </div>
                  <p className="text-sm">我们的iOS和Android应用现已上线，随时随地管理您的业务。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">样式预览</h2>
          
          <Tabs defaultValue="forms">
            <TabsList className="mb-4">
              <TabsTrigger value="forms">表单控件</TabsTrigger>
              <TabsTrigger value="dialogs">对话框</TabsTrigger>
              <TabsTrigger value="buttons">按钮样式</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>输入控件</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" placeholder="输入您的姓名" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email-2">邮箱</Label>
                      <Input id="email-2" type="email" placeholder="输入您的邮箱" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">国家</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="选择国家" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cn">中国</SelectItem>
                          <SelectItem value="us">美国</SelectItem>
                          <SelectItem value="uk">英国</SelectItem>
                          <SelectItem value="ca">加拿大</SelectItem>
                          <SelectItem value="au">澳大利亚</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>复选框与单选按钮</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-3 font-medium">通讯方式</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="email-marketing" />
                            <label htmlFor="email-marketing" className="text-sm">电子邮件</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="sms-marketing" />
                            <label htmlFor="sms-marketing" className="text-sm">短信</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="push-marketing" />
                            <label htmlFor="push-marketing" className="text-sm">应用推送</label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <div className="mb-3 font-medium">偏好语言</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="chinese" checked />
                            <label htmlFor="chinese" className="text-sm">中文</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="english" />
                            <label htmlFor="english" className="text-sm">英文</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>徽章与标签</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 font-medium">状态徽章</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-500 hover:bg-green-600">在线</Badge>
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">等待中</Badge>
                          <Badge variant="destructive">错误</Badge>
                          <Badge variant="secondary">次要</Badge>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <div className="mb-2 font-medium">分类标签</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">技术</Badge>
                          <Badge className="rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200 border-none">设计</Badge>
                          <Badge className="rounded-full bg-pink-100 text-pink-800 hover:bg-pink-200 border-none">营销</Badge>
                          <Badge className="rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">客户</Badge>
                          <Badge className="rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none">销售</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="dialogs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>对话框</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium mb-2">基本对话框</div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>打开对话框</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>确认操作</DialogTitle>
                            <DialogDescription>
                              您确定要执行此操作吗？此操作无法撤销。
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="mt-4">
                            <Button variant="outline">取消</Button>
                            <Button>确认</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-medium mb-2">表单对话框</div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">编辑个人资料</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>编辑个人资料</DialogTitle>
                            <DialogDescription>
                              在这里修改您的个人信息，完成后点击保存。
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="name-dialog">姓名</Label>
                              <Input id="name-dialog" defaultValue="王小明" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="username">用户名</Label>
                              <Input id="username" defaultValue="xiaoming" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">取消</Button>
                            <Button>保存更改</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>下拉菜单</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium mb-2">基本下拉菜单</div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">打开菜单</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>个人资料</DropdownMenuItem>
                          <DropdownMenuItem>账单设置</DropdownMenuItem>
                          <DropdownMenuItem>团队</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">注销</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-medium mb-2">用户菜单示例</div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="/avatars/01.png" alt="用户头像" />
                            <AvatarFallback>WX</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">王小明</div>
                            <div className="text-sm text-muted-foreground">wxm@example.com</div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>查看资料</DropdownMenuItem>
                            <DropdownMenuItem>修改信息</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">删除账户</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="buttons">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>按钮变体</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <Button>默认按钮</Button>
                      <Button variant="secondary">次要按钮</Button>
                      <Button variant="destructive">危险按钮</Button>
                      <Button variant="outline">轮廓按钮</Button>
                      <Button variant="ghost">幽灵按钮</Button>
                      <Button variant="link">链接按钮</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>渐变按钮</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:opacity-90 transition-opacity border-none">
                        紫粉蓝渐变
                      </Button>
                      <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:opacity-90 transition-opacity border-none">
                        绿松石渐变
                      </Button>
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-opacity border-none">
                        橙红渐变
                      </Button>
                      <Button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:opacity-90 transition-opacity border-none">
                        天蓝靛蓝渐变
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>按钮尺寸</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="lg">大按钮</Button>
                      <Button>默认尺寸</Button>
                      <Button size="sm">小按钮</Button>
                      <Button size="icon">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SiteLayout>
  );
}

// 模拟数据
const transactions = [
  {
    name: "李明",
    email: "liming@example.com",
    amount: "+¥1,999.00",
    status: "成功",
    avatar: "/avatars/01.png",
  },
  {
    name: "张伟",
    email: "zhangwei@example.com",
    amount: "+¥39.00",
    status: "处理中",
    avatar: "/avatars/02.png",
  },
  {
    name: "刘芳",
    email: "liufang@example.com",
    amount: "-¥299.00",
    status: "失败",
    avatar: "/avatars/03.png",
  },
  {
    name: "王丽",
    email: "wangli@example.com",
    amount: "+¥599.00",
    status: "成功",
    avatar: "/avatars/04.png",
  },
]; 