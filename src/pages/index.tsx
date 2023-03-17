import { mdiChartTimelineVariant, mdiPodcast, mdiWeightLifter, mdiEye, mdiBookshelf } from '@mdi/js'
import Head from 'next/head'
import type { ReactElement } from 'react'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import CardBoxWidget from '../components/CardBoxWidget'
import CardBox from '../components/CardBox'
import TableSampleClients from '../components/TableSampleClients'
import { getPageTitle } from '../config'
import LayoutTest from '../layouts/Test'
import Link from 'next/link'
import { colorsText } from '../colors'
import BaseIcon from '../components/BaseIcon'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Dashboard = ({ views, themes }: any) => {
  // const ratings = Object.values(themes.response).map((theme: any) => ({
  //   theme: theme.dimensionValues[0].value,
  //   views: theme.metricValues[0].value,
  // }))

  console.log(themes)

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>
          Last 30 days
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            icon={mdiEye}
            iconColor="info"
            number={views.views}
            label="Platform Views"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiBookshelf} title="Theme views">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableSampleClients clients={themes.themes} />
          {/* <TableSampleClients /> */}
        </CardBox>

        <br />
        <br />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <Link href="/podcasts">
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Podcast ratings
                  </h3>
                </div>
                <BaseIcon
                  path={mdiPodcast}
                  size="48"
                  w=""
                  h="h-16"
                  className={colorsText['info']}
                />
              </div>
            </CardBox>
          </Link>
          <Link href="/exercises">
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                    Exercise ratings
                  </h3>
                </div>
                <BaseIcon
                  path={mdiWeightLifter}
                  size="48"
                  w=""
                  h="h-16"
                  className={colorsText['info']}
                />
              </div>
            </CardBox>
          </Link>
        </div>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutTest>{page}</LayoutTest>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const v = await fetch(`http://${context.req.headers.host}/api/views-platform`)
  const views: any = await v.json()

  const t = await fetch(`http://${context.req.headers.host}/api/views-theme`)
  const themes: any = await t.json()

  return {
    props: {
      views,
      themes,
    },
  }
}

export default Dashboard
