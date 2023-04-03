import { useState, useRef, useEffect } from "react";
import "./App.css";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
import UseEffect from "./Components/NewExpense/UseEffect";
import UpdateCount from "./Components/NewExpense/UseRef";
import ErrorBoundary from "./Components/ErrorBoundry";
import MyComponent from "./Components/MyComponent";
import SignUp from "./Components/SignUp/SignUpForm";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tissue Papers",
    amount: 10,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Cover",
    amount: 350,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk & Chair",
    amount: 950,
    date: new Date(2019, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    <div>
      <SignUp/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items = {expenses}/>
    </div>
  );
}
//     const Ref = useRef(null);
  
//     // The state for our timer
//     const [timer, setTimer] = useState('00:00:00');
  
  
//     const getTimeRemaining = (e) => {
//         const total = Date.parse(e) - Date.parse(new Date());
//         const seconds = Math.floor((total / 1000) % 60);
//         const minutes = Math.floor((total / 1000 / 60) % 60);
//         const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//         return {
//             total, hours, minutes, seconds
//         };
//     }
  
  
//     const startTimer = (e) => {
//         let { total, hours, minutes, seconds } 
//                     = getTimeRemaining(e);
//         if (total >= 0) {

//             setTimer(
//                 (hours > 9 ? hours : '0' + hours) + ':' +
//                 (minutes > 9 ? minutes : '0' + minutes) + ':'
//                 + (seconds > 9 ? seconds : '0' + seconds)
//             )
//         }
//     }
  
  
//     const clearTimer = (e) => {
 
//         setTimer('00:00:10');
  
//         if (Ref.current) clearInterval(Ref.current);
//         const id = setInterval(() => {
//             startTimer(e);
//         }, 1000)
//         Ref.current = id;
//     }
  
//     const getDeadTime = () => {
//         let deadline = new Date();
  
//         // This is where you need to adjust if 
//         // you entend to add more time
//         deadline.setSeconds(deadline.getSeconds() + 10);
//         return deadline;
//     }
  
//     // We can use useEffect so that when the component
//     // mount the timer will start as soon as possible
  
//     // We put empty array to act as componentDid
//     // mount only
//     useEffect(() => {
//         clearTimer(getDeadTime());
//     }, []);
  
   
//     const onClickReset = () => {
//         clearTimer(getDeadTime());
//     }
    
  
//     return (
//         <div className="App">
//             <h2>{timer}</h2>
//             <button onClick={onClickReset}>Reset</button>
//             <UseEffect />
//             <UpdateCount />
//             <ErrorBoundary> 
//             <MyComponent data="Hello, World!" />
//             <MyComponent data="error" />
//             </ErrorBoundary>
//             <SignUp/>
//         </div>
//     )
// }

export default App;

