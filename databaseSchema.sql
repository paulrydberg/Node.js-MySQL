DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (200) NULL,
  department_name VARCHAR
  (200) NULL,
  price DECIMAL
  (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Toshiba Portege Z30-C-138", "Electronics, Computers & Office", 1323.91, 0);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Dodow - Sleep Aid Device - More Than 150.000 Users are Falling Asleep Faster with Dodow!", "Health & Household › Health Care › Sleep & Snoring", 59.99, 100);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Anova Culinary A2.2-120V-US Sous Vide Precision Cooker Bluetooth, Immersion Circulator, 800 Watts, Black", "Home & Kitchen › Kitchen & Dining › Small Appliances › Specialty Appliances › Sous Vide Machines", 89.99, 400);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Car Charger RAVPower 24W 4.8A Mini Dual USB Car Adapter with iSmart 2.0 Tech for iPhone X 8 8 Plus 7 6s, iPad Air Mini, Galaxy S9 S8 Note 8 S7 Edge - Black [Upgrade Version]", "Cell Phones & Accessories › Accessories › Chargers & Power Adapters › Car Chargers", 8.49, 1000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Apple MMEF2AM/A AirPods Wireless Bluetooth Headset for iPhones with iOS 10 or Later White", "Apple", 144.98, 20000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Ultimate Ears WONDERBOOM Waterproof Super Portable Bluetooth Speaker – IPX7 Waterproof – 10-Hour Battery Life – Phantom Black", "Electronics › Portable Audio & Video › Portable Speakers & Docks › Portable Bluetooth Speakers", 67.99, 5000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Apple iPhone X, Fully Unlocked 5.8', 256 GB - Space Gray", "Apple", 1218.08, 50000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Rocketbook Wave Smart Notebook - Executive", "Office Products › Office & School Supplies › Paper › Notebooks & Writing Pads", 19.50, 10000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Echo Show- Smart Speaker and Screen with Alexa", "Electronics, Computers & Office", 129.99, 0);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Samsung Q9F 65' QLED 4K UHD QLED HDR Elite+ Smart TV QN65Q9FAMFXZA", "Electronics, Computers & Office", 2899.99, 500);

  SELECT *
  FROM products;


  ALTER USER 'root'@'localhost' IDENTIFIED
  WITH mysql_native_password BY 'password'