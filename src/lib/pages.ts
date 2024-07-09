import CSTimerPage from '@/app/[page]/_components/CSTimer'
import IndeedPage from '@/app/[page]/_components/Indeed'

type Page = {
  Component: React.FC
  original: string
  backgroundClassName?: string
}

export const pages: Record<string, Page> = {
  indeed: {
    Component: IndeedPage,
    original:
      'https://www.indeed.com/notifications?from=gnav-util-notifcenter&gnavTK=1i1splnqtlfij801&tk=1i1splnqqgoqk801&hl=en',
  },
  cstimer: {
    Component: CSTimerPage,
    original: 'https://cstimer.net/',
    backgroundClassName: 'bg-black',
  },
}

export const pageKeys = Object.keys(pages)
