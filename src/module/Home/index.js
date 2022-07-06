import styled from "styled-components";
import { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent.js";
import TransactionComponent from "./TransactionComponent.js";
const Container = styled.div`
  display: flex;
  flex-direction: column;S
  align-items:center;
  margin: 30px 0 10px;
  font-family: Montserrat;
  width: 360px;
  
`;

const HomeComponent=(props)=>{

    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState([]);
    const [income, updateIncome] = useState([]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };

    const calculateBalance=()=>{
        let exp=0;
        let inc=0;

        transactions.map((payload) =>{
            payload.type === "EXPENSE" ?
            (exp=exp+payload.amount)
            : (inc=inc+payload.amount)
        });

        updateExpense(exp);
        updateIncome(inc);
    
    }

    useEffect(()=> calculateBalance(), [transactions])

    return(
        <Container>
            <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
            <TransactionComponent transactions={transactions} />
        </Container>
    )

}

export default HomeComponent;