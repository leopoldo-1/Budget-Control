import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget
}) => {
  return (
    <header>
      <h1>Expenses control</h1>

      {isValidBudget
        ?
          <BudgetControl
            expenses={expenses}
            setExpenses={setExpenses}
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
          />
        :
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      }
    </header>
  )
}

export default Header