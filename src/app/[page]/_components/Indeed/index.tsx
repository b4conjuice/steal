import {
  Bars3Icon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  AcademicCapIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Main } from '@/components/ui'
import Logo from './Logo'

const ChatNotificationIcon = () => (
  <div>
    <div className='rounded bg-blue-500 p-1'>
      <ChatBubbleBottomCenterTextIcon className='h-5 w-5 text-white' />
    </div>
  </div>
)
const HatNotificationIcon = () => (
  <div>
    <div className='rounded bg-green-500 p-1'>
      <AcademicCapIcon className='h-5 w-5 text-white' />
    </div>
  </div>
)

const notifications = [
  {
    type: 'test',
    Icon: ChatNotificationIcon,
    title:
      'Almost done--Atlantis IT Group is waiting on your skills test results',
    description:
      'This skills test will take about 7 minutes to complete. Finishing the test will increase your chances of getting an interview by 80%',
    ago: '5d',
  },
  {
    type: 'message',
    Icon: HatNotificationIcon,
    title: "Haven't heard back?",
    description:
      'You are more likely to hear back on your application if you follow up with a message.',
    ago: '6d',
    listing: {
      role: 'Principal Software Engineer',
      company: 'rqconsultancy',
      location: 'Remote',
    },
  },
  {
    type: 'message',
    Icon: HatNotificationIcon,
    title: "Haven't heard back?",
    description:
      'You are more likely to hear back on your application if you follow up with a message.',
    ago: '1w',
    listing: {
      role: 'UiPath Developer',
      company: 'Genpact',
      location: 'Remote',
    },
  },
  {
    type: 'message',
    Icon: HatNotificationIcon,
    title: "Haven't heard back?",
    description:
      'You are more likely to hear back on your application if you follow up with a message.',
    ago: '1w',
    listing: {
      role: 'Software Engineer (Full Stack)',
      company: 'Dogwood Logic Inc.',
      location: 'Remote',
    },
  },
  {
    type: 'message',
    Icon: HatNotificationIcon,
    title: "Haven't heard back?",
    description:
      'You are more likely to hear back on your application if you follow up with a message.',
    ago: '1w',
    listing: {
      role: 'Front End Web Developer',
      company: 'First Arriving',
      location: 'Remote',
    },
  },
  {
    type: 'message',
    Icon: HatNotificationIcon,
    title: "Haven't heard back?",
    description:
      'You are more likely to hear back on your application if you follow up with a message.',
    ago: '1w',
    listing: {
      role: 'Senior Software Developer',
      company: 'Brooksource',
      location: 'Remote',
    },
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
              <a
                href='#'
                className='flex space-x-3 rounded p-2 transition hover:bg-gray-200'
              >
                <notification.Icon />
                {notification.type === 'test' ? (
                  <div>
                    <h2 className='font-bold'>{notification.title}</h2>
                    <p>{notification.description}</p>
                  </div>
                ) : (
                  <div className='space-y-2'>
                    <p>
                      <span className='font-bold'>{notification.title}</span>{' '}
                      <span>{notification.description}</span>
                    </p>
                    <div className='rounded-lg border border-gray-200 p-4'>
                      <h3 className='font-bold'>
                        {notification.listing?.role}
                      </h3>
                      <p>{notification.listing?.company}</p>
                      <p>{notification.listing?.location}</p>
                    </div>
                  </div>
                )}
                <div>
                  <div>{notification.ago}</div>
                  <EllipsisHorizontalIcon className='h-6 w-6' />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Main>
    </>
  )
}
