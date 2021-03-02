import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

const onSubmit = async e => {
  e.preventDefault()
  const {name , email, file} = e.target
  await axios.post('api/orders', {
    name: name.value,
    email: email.value,
    file: file.value
  })
  name.value = '',
  email.value = '',
  file.value = ''
  getOrders()
}

const getOrders = async () => {
  const res = await axios.get('api/orders')
  const data = res.data
  setOrders(data)
}



function App() {

  const [orders, setOrders] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <div>

      </div>
    </div>
  );
}

export default App;
