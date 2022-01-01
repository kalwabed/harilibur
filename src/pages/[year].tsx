import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import AllHolidays from '@components/all-holidays'
import Navigation from '@components/navigation'

import { APIResult, getHolidays } from 'src/utils/fetcher'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { year: String(new Date().getFullYear() + 1) } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = params?.year

  const data = await getHolidays(`?year=${year}`)

  return { props: { data } }
}

const NextYear: NextPage<{ data: APIResult[] }> = ({ data }) => {
  return (
    <>
      <AllHolidays holidays={data} />
      <Navigation type="next" />
    </>
  )
}

export default NextYear
