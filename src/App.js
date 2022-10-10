// import ExpenseItem from "./components/ExpenseItem";

import NewExpense from "./components/AddExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Dope Soap",
      amount: 10.61,
      date: new Date(20, 4, 4),
    },
    { id: "e2", title: "Rent", amount: 7777, date: new Date(2022, 9, 31 )},
    {
      id: "e3",
      title: "Bandcamp stuff",
      amount: 15,
      date: new Date(2022, 8, 21),
    },
    {
      id: "e4",
      title: "Comp Desk (MDF)",
      amount: 80,
      date: new Date(2022, 9, 1),
    },
    {
      id: "e5",
      title: "Monthly Vaping",
      amount: 140,
      date: new Date(2022, 9, 12)
    }
  ];

  return (
    <div>
      <h2>Let's chill!</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
