import Link from 'next/link'

import { Main, Title } from '@/components/ui'
import { pages, pageKeys } from '@/lib/pages'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Page({ params }: { params: { page: string } }) {
  const currentPage = pageKeys.find(page => page === params.page)
  const PageComponent = currentPage ? pages[currentPage]?.Component : undefined
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
                  href={String(pages[pageKey]?.original) ?? ''}
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
    <>
      <PageComponent />
      <footer className='sticky bottom-0 flex justify-end p-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-cobalt text-cb-white'>
          <Link href='/' className='text-cb-yellow hover:text-cb-yellow/75'>
            <HomeIcon className='h-6 w-6' />
          </Link>
        </div>
      </footer>
    </>
  )
}
