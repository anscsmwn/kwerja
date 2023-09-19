import { RegisterFormData } from '@/types/types'
import { create } from 'zustand'

interface RegisterFormState {
  step: number
  form: RegisterFormData
  setForm: (form: RegisterFormData) => void
  nextStep: () => void
  prevStep: () => void
  passwordRequirements: {
    metAllRequirements: boolean
    length: boolean
    uppercase: boolean
    lowercase: boolean
    number: boolean
  }
  setPassword: (password: string) => void
}

const useRegisterStore = create<RegisterFormState>()((set) => ({
  step: 1,
  form: {
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
    address: '',
    phone: '',
  },
  passwordRequirements: {
    metAllRequirements: false,
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
  },
  setPassword: (password: string) =>
    set((state) => ({
      form: {
        ...state.form,
        password,
      },
      passwordRequirements: {
        metAllRequirements:
          password.length >= 8 &&
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[0-9]/.test(password),
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
      },
    })),
  setForm: (form: RegisterFormData) => set({ form }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}))

export default useRegisterStore
