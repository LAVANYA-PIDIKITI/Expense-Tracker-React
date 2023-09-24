import React from 'react';
import './App.css';
import  Header  from './components/Header';
import  Balance  from './components/Balance';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import NewTrans from './components/NewTrans';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <Card>
      <Header />
      <Balance/>
      <IncomeExpense/>
      <History/>
      <NewTrans/>
      </Card>
    </div>
  );
}

export default App;
