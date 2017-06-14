// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  function getUser() {
    var url = 'https://randomuser.me/api/?results=12&nat=us';
    // Your Code Goes Here
    fetch(url).then(function(response) {
    // handle HTTP response
      response.json().then(function(data) {  
        console.log("Here is the data:", data);
        let user = data.results;
        for (let i = 0; i < user.length; i++) {
          createCustomer(user, i);
        }
      });
    }, function(error) {
    // handle network error
      console.log('Fetch Error :-S', err); 
    });
  }

  getUser();

  function createCustomer(cust, index) {

    var customersClass = document.querySelector('.customers');

    var customerDiv = document.createElement('div');
    customerDiv.className = "profile";
    customerDiv.id = 'cust' + index;
    customersClass.appendChild(customerDiv);

    var custDiv = document.querySelector('#cust' + index);

    var custImg = document.createElement('img');
    custImg.src = cust[index].picture.large;
    custDiv.appendChild(custImg);

    var custName = document.createElement('p');
    custName.innerHTML=  (cust[index].name.first + " " + cust[index].name.last).toUpperCase();
    custDiv.appendChild(custName);

    var custEmail = document.createElement('p');
    custEmail.innerHTML = cust[index].email;
    custDiv.appendChild(custEmail);

    var custAddr = document.createElement('p');
    custAddr.innerHTML = cust[index].location.street + '<br>' +
                        cust[index].location.city + ", " + 
                        (cust[index].location.state).toUpperCase() + " " +
                        cust[index].location.postcode;
    custDiv.appendChild(custAddr);

    var custPhone = document.createElement('p');
    custPhone.innerHTML = cust[index].cell;
    custDiv.appendChild(custPhone);
  }

})();

