import styled from "styled-components";

import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Montserrat;
  width: 100%;
  
`;

const BalanceBox = styled.div`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTransc = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const AddTransacContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 20px;

  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;

  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const ExpenseContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 12px;
 margin: 20px;
`;


const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;


const AddTransactionview = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  

  return (
    <AddTransacContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"}
         onChange={(e) => setType(e.target.value)} />
        <label htmlFor="expense">Expense</label>

        <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"}
         onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="income">Income</label>
      </RadioBox>

      <AddTransc  onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }>
            Add Transaction
        </AddTransc>
    </AddTransacContainer>
  );
};

const OverviewComponent = (props) => {
  const [isaddTransac, setTransac] = useState(true);
  return (
    <Container>
      <BalanceBox>
        Bal/Amt: Rs {props.income-props.expense}
        <AddTransc onClick={() => setTransac(!isaddTransac)}>
          {isaddTransac ? "Cancel" : "ADD"}
        </AddTransc>
      </BalanceBox>

      {isaddTransac && <AddTransactionview setTransac={setTransac} addTransaction={props.addTransaction} />}
    
      <ExpenseContainer>
      <ExpenseBox>
          Expense<span>Rs {props.expense}</span>
        </ExpenseBox>
        
        <ExpenseBox isIncome={true}>
          Income<span>Rs {props.income}</span>
        </ExpenseBox>

      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
