import Image from 'next/image'
import { CardWithForm } from './components/card-with-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardWithForm />
    </main>
  )
}
