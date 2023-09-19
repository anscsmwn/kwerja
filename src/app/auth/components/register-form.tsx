'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useRegisterStore from '@/store/useRegisterStore'

const RegisterForm = ({ className, ...props }: any) => {
  const { step, nextStep, prevStep } = useRegisterStore()
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <p className="text-sm text-muted-foreground text-center">
        Please enter your details below to create your account.
      </p>
      <div>
        <form className="space-y-2">
          <div className="grid gap-2 text-left">
            <div className="grid gap-2">
              <StepOne />
              <StepTwo />
            </div>
          </div>
          <div className="grid gap-4">
            <Button
              onClick={() => {
                if (step !== 2) {
                  nextStep()
                }
              }}
              type="button"
            >
              {step === 2 ? 'Register' : 'Next'}
            </Button>
            <Button
              onClick={() => {
                prevStep()
              }}
              type="button"
              variant="outline"
              className={cn({ hidden: step === 1 })}
            >
              Previous
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
const StepOne = () => {
  const { form, setForm, step } = useRegisterStore()
  return (
    <>
      {step === 1 && (
        <>
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            type="text"
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, full_name: e.target.value })
            }}
            value={form.full_name}
          />
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            type="text"
            autoCapitalize="none"
            autoComplete="address"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, address: e.target.value })
            }}
            value={form.address}
          />
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="text"
            autoCapitalize="none"
            autoComplete="phone"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value })
            }}
            value={form.phone}
          />
        </>
      )}
    </>
  )
}
const StepTwo = () => {
  const { form, setForm, step } = useRegisterStore()
  return (
    <>
      {step === 2 && (
        <>
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
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input
            id="confirm_password"
            type="password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={false}
            onChange={(e) => {
              setForm({ ...form, confirm_password: e.target.value })
            }}
            value={form.confirm_password}
          />
        </>
      )}
    </>
  )
}
