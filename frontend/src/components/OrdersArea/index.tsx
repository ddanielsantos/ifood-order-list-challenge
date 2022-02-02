import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Orders.module.css'
import { Order } from '../../../../backend/src/repositories/order'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'https://ifood-order-list.herokuapp.com/api'

export const OrdersArea = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    async function getOrders() {
      try{
        const response = await axios.get(`${API_BASE_URL}/orders`)

        setOrders(response.data)
      } catch {
        alert('An error ocurred during order fetching')
      }
    }

    getOrders()
  }, [])

  // TODO: display a modal when a order is pressed to show his details
  return (
    <div className={styles.ordersArea}>
      {
        orders.map(e => {
          return (
            <div key={e._id} className={styles.order}>
              <h3>Client</h3>
              <p>{e.client}</p>
              <h3>Confirmed At</h3>
              <p>{e.confirmedAt}</p>
              <h3>Created At</h3>
              <p>{e.createdAt}</p>
              <h3>Restaurant</h3>
              <p>{e.restaurant}</p>
            </div>
          )
        }
        )
      }
    </div>
  )
}