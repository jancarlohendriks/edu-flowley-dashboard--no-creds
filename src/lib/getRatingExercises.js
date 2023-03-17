/* eslint @typescript-eslint/no-var-requires: "off" */
import admin from './firebase'
import { groupItemsByToolId } from './groupItemsByToolId'

const getGrades = (list) => Object.values(list).map((item) => item.grade)
const calcAverage = (list) => list.reduce((a, b) => a + b, 0) / list.length || 0

const getRatingExercises = async (ent) => {
  const db = admin.database()
  const ref = db.ref('entities')
  await ref.once('value', (snap) => {
    const entity = snap.val()[ent]
    const allRatings = Object.values(entity.ratings)
    const ratingsByGroup = groupItemsByToolId(allRatings)
    const ratings = Object.entries(ratingsByGroup)
      .map((theme) => ({
        id: theme[0],
        theme: theme[0],
        avgRating: calcAverage(getGrades(theme[1])),
      }))
      .filter((theme) => theme.theme !== 'undefined')
    return ratings
  })
}

export default getRatingExercises
