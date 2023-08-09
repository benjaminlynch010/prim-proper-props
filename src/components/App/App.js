import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GuestList from '../GuestList/GuestList'

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  // On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = () => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  const headerText = "Prim Proper Props"
  const footerHead = "Have fun!"
  const footerText = "Don't forget to mind your Ps and Qs!"

  console.log("new meal | ", newGuestMeal)
  console.log("guest list | ", guestList)
  return (
    <div className="App">
      <Header title={headerText}/>
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <h2>Add a new guest</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          value={newGuestName}
          onChange={(evt) => setNewGuestName(evt.target.value)}
        />
        <div>
          Would this guest like a kid's meal?
          <div >
            <div>
              <label>
                <input
                  type="radio"
                  value={true}
                  checked={newGuestMeal === 'true'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                Yes, this guest would like a Kid's Meal
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={false}
                  checked={newGuestMeal === 'false'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                No, this guest would not like a Kid's Meal
              </label>
            </div>
          </div>
        </div>
        <button type="submit">Add Guest</button>
      </form>
      <GuestList/>
      <h2>Dinner Supplies</h2>
      <div>
        Spoons: {guestList.length * 2}
      </div>
      <div>
        Forks: {guestList.length * 2}
      </div>
      <div>
        Knives: {guestList.length * 2}
      </div>
      <Footer header={footerHead} text={footerText}/>
    </div>
  );


}

export default App;
