import { RegisterFormData } from '@/types/types'
import { create } from 'zustand'

interface RegisterFormState {
  step: number
  form: RegisterFormData
  setForm: (form: RegisterFormData) => void
  nextStep: () => void
  prevStep: () => void
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
  setForm: (form: RegisterFormData) => set({ form }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
}))

export default useRegisterStore
