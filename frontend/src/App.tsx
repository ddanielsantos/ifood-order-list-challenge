import { useState, useEffect } from 'react'
import axios from 'axios'

import { Order } from '../../backend/src/repositories/order'
import styles from './App.module.css'

function App() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    async function fectchOrders() {
      try {
        const response = await axios.get('http://localhost:3483/api/orders')
        setOrders(response.data)
      } catch {
        alert('Something gone wrong')
      }
    }

    fectchOrders()
  }, [])

  return (
    <div className={styles.app}>
      <h1>Order List</h1>

      <div className={styles.filterArea}>

      </div>

      <div className={styles.ordersArea}>
        {
          orders[0] &&
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Confirmed At</th>
                <th>Restaurant</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, i) => {
                return (
                  <tr key={i}>
                    <td>{order.client}</td>
                    <td>{order.confirmedAt.slice(0, 6)}</td>
                    <td>{order.restaurant}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        }

        {
          !orders[0] &&
          <h2>No orders</h2>
        }
      </div>
    </div>
  )
}

export default App
