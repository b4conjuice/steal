import IndeedPage from '@/app/[page]/_components/Indeed'

export const pages: Record<string, Record<string, React.FC | string>> = {
  indeed: {
    Component: IndeedPage,
    original:
      'https://www.indeed.com/notifications?from=gnav-util-notifcenter&gnavTK=1i1splnqtlfij801&tk=1i1splnqqgoqk801&hl=en',
  },
}

export const pageKeys = Object.keys(pages)
