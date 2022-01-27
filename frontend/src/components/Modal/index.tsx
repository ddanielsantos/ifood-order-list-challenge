import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

type Props = {
  id: string,
  client: {
    name: string,
    email: string,
    phone: string
  }
}

const mock = {
  "_id": "s",
  "items": [
    {
      "description": "ruim",
      "quantity": 1,
      "price": 2
    },
    {
      "description": "t Boa",
      "quantity": 1,
      "price": 2
    },
    {
      "description": "sdg",
      "quantity": 1,
      "price": 2
    }
  ]
}

export const Modal = ({ ...props }: Props) => {
  const [items, setItems] = useState(mock)

  useEffect(() => {
    async function getItems(orderId: string){
      const response = await axios.get(`http://localhost:3483/api/orders/${orderId}/items`)

      setItems(response.data[0])
    }

    getItems(props.id)

  }, [])

  return (
    <div className={styles.modal}>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{items.items[0].description}</td>
            <td>{items.items[0].quantity}</td>
            <td>{items.items[0].price}</td>
            <td>{items.items[0].quantity * items.items[0].price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}