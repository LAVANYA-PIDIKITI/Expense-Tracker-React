import React from 'react'

const NewTrans = () => {
  return (
    <>
    <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label HTMLfor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label HTMLfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default NewTrans
