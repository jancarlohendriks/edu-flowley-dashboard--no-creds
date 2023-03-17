/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')
const file = require('@/lib/credentials.json')

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: file.client_email,
    private_key: file.private_key,
  },
})

const PROPERTY_ID = '353724991'
const startDate = '7daysAgo'
const endDate = 'today'
const metric = 'screenPageViews'

export default async function handler(req, res) {
  const response = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: startDate,
        endDate: endDate,
      },
    ],
    metrics: [
      {
        name: metric,
      },
    ],
  })

  const views = response[0].rows[0].metricValues[0].value
  res.status(200).json({ views })
}
