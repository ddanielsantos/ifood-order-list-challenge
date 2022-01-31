import styles from './App.module.css'
import { OrdersArea } from './components/OrdersArea'
import { OrdersFilter } from './components/OrdersFilter'

function App() {
  // TODO: create a context with order[] state
  return (
    <div className={styles.app}>
      <header>
        <h1>Order List</h1>
      </header>

      <main>
        <OrdersFilter />

        <OrdersArea />
      </main>
    </div>
  )
}

export default App
