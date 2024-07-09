import Link from 'next/link'
import classNames from 'classnames'
import { HomeIcon } from '@heroicons/react/24/solid'

import { Main, Title } from '@/components/ui'
import { pages, pageKeys } from '@/lib/pages'

export default function Page({ params }: { params: { page: string } }) {
  const currentPageKey = pageKeys.find(page => page === params.page)
  const currentPage = currentPageKey ? pages[currentPageKey] : undefined
  const PageComponent = currentPage?.Component
  if (!PageComponent) {
    return (
      <Main className='flex flex-col bg-cb-dark-blue p-4 text-cb-white'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Link href='/' className='hover:text-cb-pink'>
            <Title>steal</Title>
          </Link>
          <p>that page does not exist. try one of the pages below</p>
          <ul className='flex space-x-4'>
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
                  className='text-cb-orange hover:text-cb-orange/75'
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
  return (
    <div
      className={classNames(
        'flex flex-grow flex-col',
        currentPage?.backgroundClassName
      )}
    >
      <PageComponent />
      <footer className='sticky bottom-0 flex justify-end p-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-cobalt text-cb-white'>
          <Link href='/' className='text-cb-yellow hover:text-cb-yellow/75'>
            <HomeIcon className='h-6 w-6' />
          </Link>
        </div>
      </footer>
    </div>
  )
}
