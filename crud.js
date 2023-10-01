// crud.js

const API_ENDPOINT = 'https://crudcrud.com/api/386e3b97bf0b484089019f2b57866117/orders'; // Replace with your actual API endpoint

// Fetch orders from the server
function fetchOrders() {
  axios.get(API_ENDPOINT)
    .then(response => {
      displayOrders(response.data);
    })
    .catch(error => {
      console.error('Error fetching orders:', error);
    });
}

// Add order to the server
function addOrderToServer(order) {
  axios.post(API_ENDPOINT, order)
    .then(response => {
      fetchOrders(); // Refresh the orders after adding
    })
    .catch(error => {
      console.error('Error adding order:', error);
    });
}

// Update order on the server
function updateOrderOnServer(index, order) {
  axios.put(`${API_ENDPOINT}/${index}`, order)
    .then(response => {
      fetchOrders(); // Refresh the orders after updating
    })
    .catch(error => {
      console.error('Error updating order:', error);
    });
}

// Delete order from the server
function deleteOrderFromServer(index) {
  axios.delete(`${API_ENDPOINT}/${index}`)
    .then(response => {
      fetchOrders(); // Refresh the orders after deleting
    })
    .catch(error => {
      console.error('Error deleting order:', error);
    });
}

// Display orders on the client side
function displayOrders(orders) {
  var tableBody = document.getElementById('orderTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear the existing table content

  for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var row = '<tr><td>' + order.dish + '</td><td>' + order.price + '</td><td>' + order.tableno + '</td><td><button type="button" class="btn btn-sm btn-primary" onclick="editForm(this.parentNode.parentNode)">Edit</button> <button type="button" class="btn btn-sm btn-danger" onclick="deleteOrderFromServer(' + i + ')">Delete</button></td></tr>';
    tableBody.insertAdjacentHTML('beforeend', row);
  }
}

// Initial fetch when the page loads
function showOrders() {
  fetchOrders();
}
