import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Orders.module.css'
import { Order } from '../../../../backend/src/repositories/order'

const API_BASE_URL = 'https://ifood-order-list.herokuapp.com/api'

const orders1 = [
  {
    "_id": "61f2d70110062c96733e7b56",
    "client": "Renato Svaldo",
    "restaurant": "Mr. Croc",
    "createdAt": "25 Jan 2022",
    "confirmedAt": "27 Jan 2022",
    "items": [
      {
        "description": "Pizza Foda",
        "quantity": 1,
        "price": 35
      },
      {
        "description": "Pizza Boa",
        "quantity": 1,
        "price": 28
      }
    ]
  },
  {
    "_id": "61f2d7046205a836733e7b56",
    "client": "Daniel Dantas",
    "restaurant": "Cia Paulista de Pizza",
    "createdAt": "01 Dez 2021",
    "confirmedAt": "01 Dez 2021",
    "items": [
      {
        "description": "Pizza +-",
        "quantity": 3,
        "price": 20
      },
      {
        "description": "Pizza Filé",
        "quantity": 1,
        "price": 33
      }
    ]
  },

  {
    "_id": "61f2d70dssdfgddwef3e7b56",
    "client": "Daniel Dantas",
    "restaurant": "Cia Paulista de Pizza",
    "createdAt": "01 Dez 2021",
    "confirmedAt": "01 Dez 2021",
    "items": [
      {
        "description": "Pizza +-",
        "quantity": 3,
        "price": 20
      },
      {
        "description": "Pizza Filé",
        "quantity": 1,
        "price": 33
      }
    ]
  },

  {
    "_id": "61f2d28934534576733e7b56",
    "client": "Paula Tejano",
    "restaurant": "Cia Paulista de Pizza",
    "createdAt": "02 Dez 2021",
    "confirmedAt": "03 Dez 2021",
    "items": [
      {
        "description": "Pizza +-",
        "quantity": 3,
        "price": 20
      },
      {
        "description": "Pizza Filé",
        "quantity": 1,
        "price": 33
      }
    ]
  }
]

export const OrdersArea = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    async function getOrders() {
      try{
        const response = await axios.get(`${API_BASE_URL}/orders`)

        console.log(response)
        setOrders(response.data)
      } catch {
        alert('An error ocurred during order fetching')
      }

      // setOrders(orders1)
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