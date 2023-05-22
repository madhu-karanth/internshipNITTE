// Define blockchain data structure
let blockchain = [];

// Function to make a transaction
function makeTransaction() {
  const sender = document.getElementById("sender").value;
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;

  const transaction = {
    sender: sender,
    recipient: recipient,
    amount: amount
  };

  blockchain.push(transaction);

  // Clear form inputs
  document.getElementById("sender").value = "";
  document.getElementById("recipient").value = "";
  document.getElementById("amount").value = "";
}

// Function to view the blockchain
function viewBlockchain() {
  const blockchainList = document.getElementById("blockchain-list");
  blockchainList.innerHTML = "";

  blockchain.forEach((transaction, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Transaction ${index + 1}: 
      Sender: ${transaction.sender}, 
      Recipient: ${transaction.recipient}, 
      Amount: ${transaction.amount}`;

    blockchainList.appendChild(listItem);
  });
}