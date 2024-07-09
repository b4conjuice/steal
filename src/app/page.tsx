import Link from 'next/link'

import { Main, Title } from '@/components/ui'
import { pageKeys, pages } from '@/lib/pages'

export default function Home() {
  return (
    <Main className='flex flex-col bg-cb-dark-blue p-4 text-cb-white'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Title>steal</Title>
        <ul className='space-y-4'>
          {pageKeys.map(pageKey => (
            <li key={pageKey}>
              <Link
                href={`/${pageKey}`}
                className='text-cb-pink hover:text-cb-pink/75'
              >
                {pageKey}
              </Link>{' '}
              -{' '}
              <a
                href={pages[pageKey]?.original}
                target='_blank'
                className='text-cb-mint hover:text-cb-mint/75'
              >
                original
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  )
}
