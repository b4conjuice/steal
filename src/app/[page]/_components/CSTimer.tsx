import {
  AdjustmentsVerticalIcon,
  ArrowUpTrayIcon,
  Cog8ToothIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'

const topItems = [
  {
    key: 'settings',
    Icon: Cog8ToothIcon,
  },
  {
    key: 'import-export',
    Icon: ArrowUpTrayIcon,
  },
  {
    key: 'scramble',
    Icon: CubeIcon,
  },
]
const bottomItems = [
  {
    key: 'solves',
    Icon: ListBulletIcon,
  },
  {
    key: 'donate',
    Icon: CurrencyDollarIcon,
  },
  {
    key: 'adjustments',
    Icon: AdjustmentsVerticalIcon,
  },
]

const scramble = `F2 D R2 F' D L' F U R2 L2 F2 U R2 B2 U' D' R2 U' F'`

export default function CSTimerPage() {
  return (
    <div className='flex flex-grow bg-black text-white'>
      <aside className='w-1/4'>
        <ul className='flex justify-between p-4'>
          {topItems.map(item => (
            <item.Icon key={item.key} className='h-8 w-8' />
          ))}
        </ul>
        <h1 className='bg-[#3b5494] p-4 text-center text-3xl'>csTimer</h1>
        <ul className='flex justify-between p-4'>
          {bottomItems.map(item => (
            <item.Icon key={item.key} className='h-8 w-8' />
          ))}
        </ul>
      </aside>
      <main className='flex-grow'>
        <div className='bg-[#3b5494]'>{scramble}</div>
        <div>20.20 (+1.42)</div>
        <div>
          <div>ao12: 18.35</div>
          <div>ao1000: -</div>
        </div>
      </main>
    </div>
  )
}
