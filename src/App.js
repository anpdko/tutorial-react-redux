import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {addCustomerAction, removeCustomerAction} from './store/reducer/customerReducer'
import {fetchCustomers} from './store/asyncAction/customers'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

  const addCash = (cash) => {
    //Функция диспач в которую передается action
    //Диспач вызывает reduser в котором проверятеся action и меняется state
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const getCash = (cash) =>{
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const addCustomer = (name) =>{
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) =>{
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: '18px', textAlign: 'center'}}>
          <button onClick={() => addCash(Number(prompt()))}>-</button>
          <span> {cash} </span>
          <button onClick={() => getCash(Number(prompt()))}>+</button>
          <br/>
          <button onClick={() => addCustomer(prompt())}>Добавить клинтов</button>
          <button onClick={() => dispatch(fetchCustomers())}>Получить всех клиентов</button>
      </div>
        {customers.length > 0 ?
          <ul>
            {customers.map(customer => 
              <li onClick={() => removeCustomer(customer)} key={customer.id}>
                {customer.name}
              </li>
            )}
          </ul>
          :<h3>Клиены отсутствуют!</h3>
        }
    </div>
  );
}

export default App;
