let transactions = [];

fetch("/apiroute/transaction").then((res) => {
  return res.json();
});
