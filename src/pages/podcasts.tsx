import { mdiPodcast } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBox from '../components/CardBox'
import TablePodcasts from '../components/TablePodcasts'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Podcasts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Podcasts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiPodcast} title="Podcasts">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TablePodcasts clients={posts} />
        </CardBox>
      </SectionMain>
    </>
  )
}

Podcasts.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`http://${context.req.headers.host}/api/rating-exercises?entity=fontys`)
  const posts: any = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Podcasts
