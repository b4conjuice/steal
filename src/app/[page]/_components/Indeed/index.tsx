import {
  Bars3Icon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Main } from '@/components/ui'
import Logo from './Logo'

const notifications = [
  {
    icon: {
      backgroundColorClassName: 'bg-blue-500',
      Component: () => <p />,
    },
    title:
      'Almost done--Atlantis IT Group is waiting on your skills test results',
    description: '',
    date: '',
  },
  {
    icon: {
      backgroundColorClassName: 'bg-blue-500',
      Component: () => <p />,
    },
    title: 'Almost done--InLumon is waiting on your skills test results',
    description: '',
    date: '',
  },
  {
    icon: {
      backgroundColorClassName: 'bg-blue-500',
      Component: () => <p />,
    },
    title:
      'Almost done--IT Resources Innovations, LCC is waiting on your skills test results',
    description: '',
    date: '',
  },
  {
    icon: {
      backgroundColorClassName: 'bg-green-500',
      Component: () => <p />,
    },
    title: "Haven't heard back?",
    description: '',
    date: '',
  },
]

export default function IndeedPage() {
  return (
    <>
      <header className='flex border-gray-200 p-4 text-sm md:border-b'>
        <div className='flex grow space-x-4'>
          <div>
            <Link href='/indeed'>
              <Logo />
            </Link>
          </div>
          <ul className='hidden space-x-4 md:flex'>
            <li>
              <Link href='/indeed'>Home</Link>
            </li>
            <li>Company Reviews</li>
            <li>Find salaries</li>
          </ul>
        </div>
        <div className='flex divide-gray-200 md:divide-x'>
          <ul className='flex space-x-4 pe-4'>
            <li>
              <ChatBubbleBottomCenterTextIcon className='h-5 w-5' />
            </li>
            <li>
              <BellIcon className='h-5 w-5' />
            </li>
            <li className='hidden md:block'>
              <UserIcon className='h-5 w-5' />
            </li>
            <li className='block md:hidden'>
              <Bars3Icon className='h-5 w-5' />
            </li>
          </ul>
          <div className='hidden ps-4 md:block'>Employers / Post Job</div>
        </div>
      </header>
      <Main className='container mx-auto flex max-w-screen-sm flex-col space-y-4 px-4 pt-8 md:px-0'>
        <h1 className='text-3xl font-semibold'>Notifications</h1>
        <ul className='space-y-4'>
          {[
            ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
            // ...notifications,
          ].map(notification => (
            <li key={notification.title}>
              <h2>{notification.title}</h2>
              <p>{notification.description}</p>
            </li>
          ))}
        </ul>
      </Main>
    </>
  )
}
