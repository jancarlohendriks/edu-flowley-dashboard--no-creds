import React, { useState } from 'react'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'

const TableExercises = ({ clients }: any) => {
  // const { clients } = useSampleThemes()
  // const clients = [
  //   {
  //     id: 1,
  //     theme: 'eat-the-frog',
  //     avgRating: 3,
  //   },
  //   {
  //     id: 2,
  //     theme: 'de-80-60-40-regel',
  //     avgRating: 4.5,
  //   },
  //   {
  //     id: 3,
  //     theme: 'Ademhalingsoefening',
  //     avgRating: 5,
  //   },
  //   {
  //     id: 4,
  //     theme: 'ochtend-routine',
  //     avgRating: 5,
  //   },
  //   {
  //     id: 5,
  //     theme: 'dopamine-detox',
  //     avgRating: 5,
  //   },
  //   {
  //     id: 6,
  //     theme: 'even-stilstaan',
  //     avgRating: 5,
  //   },
  //   {
  //     id: 7,
  //     theme: 'het-fietsstuur',
  //     avgRating: 4,
  //   },
  // ]

  clients?.sort((a: any, b: any) => b.avgRating - a.avgRating)

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const clientsPaginated = clients?.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = clients?.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((client: any) => (
            <tr key={client.id}>
              <td data-label="Name">{client.theme}</td>
              <td data-label="Company">{client.avgRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesList.map((page) => (
              <BaseButton
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </BaseButtons>
          {/* <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small> */}
        </div>
      </div>
    </>
  )
}

export default TableExercises
