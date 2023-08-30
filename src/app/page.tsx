import SampleForm from '@/component/form';

import { sleep } from '@/utils/sleep';

export default async function Home() {
  await sleep();
  
  return (
    <main className="w-screen h-screen bg-white p-4">
      <SampleForm />
    </main> 
  )
}
