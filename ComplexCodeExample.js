/*
 * Filename: ComplexCodeExample.js
 * Description: This code demonstrates a complex example that simulates a banking system
 * Author: Jane Doe
 * Date: June 1, 2022
 */

// Define a class for representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount });
    } else {
      throw new Error('Insufficient balance');
    }
  }

  getStatement() {
    let statement = `Statement for Account ${this.accountNumber} (${this.accountHolder}):\n`;
    statement += '--------------------------------\n';
    statement += 'Type\tAmount\n';
    statement += '--------------------------------\n';

    for (const transaction of this.transactions) {
      statement += `${transaction.type}\t${transaction.amount}\n`;
    }

    statement += '--------------------------------\n';
    statement += `Current Balance: ${this.balance}`;

    return statement;
  }
}

// Create a new bank account
const myAccount = new BankAccount('1234567890', 'John Doe');

// Perform transactions
myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.deposit(200);
myAccount.withdraw(300);

// Print account statement
console.log(myAccount.getStatement());

// Output:
// Statement for Account 1234567890 (John Doe):
// --------------------------------
// Type        Amount
// --------------------------------
// Deposit     1000
// Withdrawal  500
// Deposit     200
// Withdrawal  300
// --------------------------------
// Current Balance: 400