 async function getUsers() {
 var userID = document.getElementById('userName').value;
fetch('http://localhost:8080/Financial/' + userID)
  .then((response) => response.json())
  .then((data) => {
  console.log(data);
    document.getElementById('salaryInfo').innerHTML = "Your current monthly salary is £" + data[0].salary;
    document.getElementById('benefitsInfo').innerHTML = "Your current monthly benefits are £" +data[0].benefit;
     })
     .catch(err => console.log(err));
     };

  /*
  var userName = document.getElementById("userChoice").value;
  fetch('localhost:8080/Financial/' + userName)
    .then(response => response.json())
    .then(response => populatePageCustomer(response));
}

function populatePageCustomer(response) {

    document.getElementById("userName").innerHTML = response.userName;
    document.getElementById("salary").innerHTML = response.salary;
    document.getElementById("mortgage").innerHTML = response.mortgage;

}
*/

/*
const url = 'http://localhost8080/Financial';

async function getInfo() {
const response = await fetch(url);
const data = await response.json();
const {salary, mortgage} = data;

document.getElementById('sal').textContent = salary.toFixed(2);
document.getElementById('mor').textContent = mortgage.toFixed(2);
}
*/

function saveDetails() {
var update = {
'salary':document.getElementById("salary").value,
'userName':document.getElementById("userName").value,
'benefit':document.getElementById("benefits").value
};

fetch ('http://localhost:8080/update', {
method: 'POST',
headers: {
'Content-Type':'application/json',
},
body: JSON.stringify(update)
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)));
}

/*

Positive remaining balance -

If you saved 50% of your remaining balance each month, by the end of the year you would have £ XX in your savings account.

If you have a savings account with us already, you can set up a monthly standing order to move funds from your current account into your savings account each month automatically. If you need help on how to set a standing order up, please watch our ‘How To’ video on setting up Standing Orders here.

If you don’t have a bank account already, we offer our Everyday Savings Account which allows you to deposit and withdraw money at any time without any penalties. It offers 15% interest on balances below £1000, 10% on balances between £1000-£3000 and 5% on any balance above £3000. To open an Everyday Savings Account, click here.

If you are concerned about how much is left of your income each month, consider having a review with one of our advisors to see if we can help decrease your monthly expenditure. Please comeple the callback form below to book your appointment - *take same code from homepage & amend for financial review*

Negative remaining balance -

You may benefit from having a financial review to go over your current out goings to see if we can help reduce them. To book an appointment please complete the below callback request - *take same code from homepage & amend for financial review*

You may want to consider one of the following lending options to help support you financially:

*Undefined list options*
Arranged overdraft - Our arranged overdraft allows you to go overdrawn up to an agreed limit, so it could help cover an unplanned expense. Think of it as a short-term safety net for your current account if you think you may go over on your monthly budget by a small amount and can afford it to pay it back. The interest rate on our arranged overdraft is 35% APR (variable) and a monthly of £5. You would only pay interest and the monthly charge if you use it. If you think this is the right option for you, it only takes about 5 minutes to apply. To apply or find out more about over Arranged overdrafts, please click here.

Loan - A loan may be suitable if you think borrowing a fixed amount over a fixed period of time would be the best support for you. It could be helpful as you’ll know how long it will take to repay the loan and how much you need to pay back each month or if you are looking to consolidate debt or have a large one-off purchase to make. Our loan interest rates start at 4% APR and minimum loan amount is £2000. If you think this may be the right option for you or if you want to know more, please click here.

Credit card - A credit card allows you to buy things up to an agreed limit and pay for them later. You could use it to make larger one off purchases and pay for them later, either in one go or in chunks. You can use a credit card to consolidate other credit or store card balances. Our Standard Rate credit card interest is 18% APR. If you would like to learn more aboubt our credit card or to apply for one, please click here.

Mortgage review - If you have not had a mortgage review in the last 12 months, please consider having a review with one of our advisors. We could potentially save you money on your monthly mortgage payment, reduce your mortgage term or discuss the possibility to have a 3 month mortgage payment break. If you think this could be beneficial option for you, please complete the callback form below to book your mortgage review. - *take same code from homepage & amend for financial review*
*/
