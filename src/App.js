import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Dope Soap",
      amount: 9.99,
      date: new Date(2000, 4, 4),
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
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />      
    </div>
  );
}

export default App;
