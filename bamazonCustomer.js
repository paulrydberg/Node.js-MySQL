var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  readProducts();
});

function readProducts() {
  console.log(
    `Selecting all products...
----------------------------------------------------` +
      "------------------------------"
  );
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    var items = [];
    var id, product_name, department_name, price, stock_quantity;
    for (let i = 0; i < 10; i++) {
      var string = JSON.stringify(res[i]);
      var json = JSON.parse(string);

      id = json.id;
      product_name = json.product_name;
      department_name = json.department_name;
      price = json.price;
      stock_quantity = json.stock_quantity;

      var stock = {};

      stock[`id`] = id;
      stock[`product_name`] = product_name;
      stock[`department_name`] = department_name;
      stock[`price`] = price;
      stock[`stock_quantity`] = stock_quantity;

      items.push(stock);

      console.log(
        `ID: ${id}
Product Name: ${product_name}
Department Name: ${department_name}
Price: ${price}
Stock Quantity: ${stock_quantity}
----------------------------------------------------` +
          "------------------------------"
      );
    }
    enterPurchaseID(items);
  });
}

function enterPurchaseID(items) {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "Enter the ID of the product you wish to purchase."
    })
    .then(function(answer) {
      if (answer.action > 10) {
        console.log(`
Sorry. We don't have an item ID matching that number.
Please re-enter the correct item ID from the list above.
`);
        enterPurchaseID(items);
      } else if (answer.action === "") {
        console.log(`
You didn't enter a numerical value.
Try Again.
`);
        enterPurchaseID(items);
      } else {
        howMany(answer.action, items);
      }
    });
}

function howMany(ID_input, items) {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "How many units of this item do you want?"
    })
    .then(function(answer) {
      if (answer.action === "") {
        console.log(`
You didn't enter a numerical value.
Try Again.
`);
        howMany(ID_input, items);
      } else {
        var ID = parseFloat(ID_input - 1);
        var quantityLeft = parseFloat(items[ID].stock_quantity);
        var name = items[ID].product_name;
        var itemPrice = parseFloat(items[ID].price);
        var afterBuyQuantity = parseFloat(quantityLeft - answer.action);
        var totalPrice = itemPrice * parseFloat(answer.action);

        if (afterBuyQuantity < 0) {
          console.log(`
Insufficient quantity!
`);

          howMany(ID_input, items);
        } else {
          console.log(`
Item ordered: ${name}
# of units purchased: ${answer.action}
Your cost in USD: $${totalPrice}`);
          updateQuantity(afterBuyQuantity, ID_input);
          // do another thing?
        }
      }
    });
}

function updateQuantity(afterBuyQuantity, ID_input) {
  console.log("\nUpdating our quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: afterBuyQuantity
      },
      {
        id: ID_input
      }
    ],
    function(err, res) {
      //console.log(res.affectedRows + " products updated!\n");
    }
  );
  //console.log(query.sql);
  buyMore();
}

function buyMore() {
  inquirer
    .prompt({
      name: "action",
      type: "confirm",
      message: "Do you want to purchase more items?"
    })
    .then(function(answer) {
      if (answer.action === true) {
        console.log(`
Sweet... lets do some more business!
`);

        readProducts();
      } else {
        console.log("Thanks for shopping!");
        connection.end();
      }
    });
}
