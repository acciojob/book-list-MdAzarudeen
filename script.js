//your JS code here. If required.
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: rgb(33, 37, 41);
}

body {
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  padding: 30px;
}

#header {
  color: rgb(14, 111, 253);
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
}

.form-group input {
  width: 100%;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
}

.form-group button {
  padding: 5px 10px;
  border: none;
  background-color: rgb(14, 111, 253);
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.form-group button:hover {
  box-shadow: 2px 2px 2px rgb(152, 193, 254), -2px 2px 2px rgb(152, 193, 254),
    2px -2px rgb(152, 193, 254), -2px -2px rgb(152, 193, 254);
}

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.table > tbody tr {
  background-color: rgb(242, 242, 242);
}

.table td {
  padding: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #bebebe;
}

.delete {
  border: none;
  border-radius: 5px;
  background-color: red;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete > span {
  color: white;
}