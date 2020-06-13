import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobelState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
         
        <label for="others">Category: </label>

         <select name="others" id="others" className="dropdown"  value={text} onChange={(e) => setText(e.target.value)}>
          <option>Select</option>
          <optgroup label="Bills and Utilities">
            <option value="Gas {Bills and Utilities}">Gas</option>
            <option value="Electricity {Bills and Utilities}">Electricity</option>
            <option value="Intrnet {Bills and Utilities}">Internet</option>
            <option value="Phone {Bills and Utilities}">Phone</option>
            <option value="Rentals {Bills and Utilities}">Rentals</option>
            <option value="Television {Bills and Utilities}">Television</option>
            <option value="Water {Bills and Utilities}">Water</option> 
          </optgroup>

          <optgroup label="Education">
            <option value="Books {Education}">Books</option>
            <option value="School Fees {Education}">School Fees</option>
            <option value="Tution Fees {Education}">Tution Fees</option>
            <option value="Equipments {Education}">Equipments</option>
            <option value="Transportation {Education}">Transportation</option>
          </optgroup>
          
          <optgroup label="Entertainment">
            <option value="Games {Entertainment}">Games</option>
            <option value="Movies {Entertainment}">Movies</option>
            <option value="Sport {Entertainment}">Sport</option>
          </optgroup>
          
          <optgroup label="Family">
            <option value="Children And Babies {Family}">Children And Babies</option>
            <option value="Home Improvement {Family}">Home Improvement</option>
            <option value="Home Services {Family}">Home Services</option>
            <option value="Pets {Family}">Pets</option>
          </optgroup>

          <optgroup label="Gifts And Donations">
            <option value="Charity ">Charity</option>
            <option value="Funeral">Funeral</option>
            <option value="Marriage">Marriage</option>
            <option value="Birthday">Birthday</option>
            <option value="Zaqat">Zaqat</option>
            <option value="Fitra">Fitra</option>
          </optgroup>

          <optgroup label="Health and Fitness">
            <option value="Doctor">Doctor</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Pharmacy">Pharmacy</option>
          </optgroup>

          <optgroup label="Shopping">
            <option value="Accessories">Accessories</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Footwear">Footwear</option>
          </optgroup>
          
          <optgroup label="Transportation">
            <option value="Maintenance {Transportation}">Maintenance</option>
            <option value="Parking Fees {Transportation}">parking Fees</option>
            <option value="Petrol {Transportation}">Petrol</option>
            <option value="Taxi {Transportation}">Taxi</option>
          </optgroup>
        </select> 

        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}