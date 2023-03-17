import { mdiWeightLifter } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBox from '../components/CardBox'
import TableExercises from '../components/TableExercises'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Exercises = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Exercises')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiWeightLifter} title="Exercises">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableExercises clients={posts} />
        </CardBox>
      </SectionMain>
    </>
  )
}

Exercises.getLayout = function getLayout(page: ReactElement) {
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

export default Exercises
