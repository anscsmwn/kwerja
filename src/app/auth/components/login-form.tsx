'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginForm = ({ className, ...props }: LoginFormProps) => {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Hello there, welcome back!
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          Please enter your details below to login to your account.
        </p>
      </div>
      <form className="space-y-2">
        <div className="grid gap-2 text-left">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value })
            }}
            value={form.email}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value })
            }}
            value={form.password}
          />
        </div>
        <div className="grid gap-4">
          <Button
            onClick={() => {}}
            type="button"
            disabled={!form.email || !form.password}
          >
            Login
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <Button
            onClick={() => {
              router.push('/auth/register')
            }}
            type="button"
            variant="outline"
          >
            Create account
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
