import { useState } from 'react'

import styles from './Filter.module.css'

type OrderFilterForm = {
  startDate: string,
  endDate: string,
  clientName: string,
  clientPhone: string,
  clientEmail: string
}

export const OrdersFilter = () => {
  // TODO: call API when filter is set
  const [form, setForm] = useState<OrderFilterForm>({
    startDate: '',
    endDate: '',
    clientName: '',
    clientPhone: '',
    clientEmail: ''
  })
  const [showFilters, setShowFilters] = useState<boolean>(true)

  return (
    <div className={styles.filterArea}>
      <h2 onClick={() => setShowFilters(!showFilters)}>Filters</h2>
      {
        showFilters &&
        <form action="" onSubmit={e => e.preventDefault()} className={styles.form}>

          <label htmlFor="start-date">Start Date:
            <input type="date" name="start-date" id="start-date"
              onChange={
                e => setForm({
                  ...form,
                  startDate: e.currentTarget.value === '' ? '' : (new Date(e.currentTarget.value)).toDateString()
                })
              }
            />

          </label>

          <label htmlFor="end-date">End Date:
            <input type="date" name="end-date" id="end-date"
              onChange={
                e => setForm({
                  ...form,
                  endDate: e.currentTarget.value === '' ? '' : (new Date(e.currentTarget.value)).toDateString()
                })
              }
            />
          </label>

          <label htmlFor="client-name">Client Name
            <input type="text" name="client-name" id="client-name"
              onChange={
                e => setForm({
                  ...form,
                  clientName: e.currentTarget.value
                })
              }
            />
          </label>

          <label htmlFor="client-phone">Client Phone:
            <input type="tel" name="client-phone" id="client-phone"
              onChange={
                e => setForm({
                  ...form,
                  clientPhone: e.currentTarget.value
                })
              }
            />
          </label>

          <label htmlFor="client-email">Client Email:
            <input type="email" name="client-email" id="client-email"
              onChange={
                e => setForm({
                  ...form,
                  clientEmail: e.currentTarget.value
                })
              }
            />
          </label>

          <input type="submit" name="s" id="" value='Filtrar' />

        </form>
      }
    </div>
  )
}