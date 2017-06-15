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
    custName.className = 'name';
    custName.innerHTML=  (cust[index].name.first + " " + cust[index].name.last).toUpperCase();
    custDiv.appendChild(custName);

    var line = document.createElement('div');
    line.className = "line";
    custDiv.appendChild(line);

    var custEmail = document.createElement('p');
    custEmail.className = 'email';
    custEmail.innerHTML = (cust[index].email).toUpperCase();
    custDiv.appendChild(custEmail);

    var custAddr = document.createElement('p');
    custAddr.innerHTML = toTitleCase(cust[index].location.street) + '<br>' +
                        toTitleCase(cust[index].location.city) + ", " + 
                        getStateCode(toTitleCase(cust[index].location.state)) + " " +
                        cust[index].location.postcode;
    custDiv.appendChild(custAddr);

    var custPhone = document.createElement('p');
    custPhone.innerHTML = (cust[index].cell).replace('(', '').replace(')', '');
    custDiv.appendChild(custPhone);

    var custSSN= document.createElement('p');
    custSSN.innerHTML = cust[index].id.value;
    custSSN.className = "blur";
    custDiv.appendChild(custSSN);
  }

  function toTitleCase(str)
  {
      return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
  }

  function getStateCode(state) {

    var  states_hash =
    {
      'Alabama': 'AL',
      'Alaska': 'AK',
      'American Samoa': 'AS',
      'Arizona': 'AZ',
      'Arkansas': 'AR',
      'California': 'CA',
      'Colorado': 'CO',
      'Connecticut': 'CT',
      'Delaware': 'DE',
      'District Of Columbia': 'DC',
      'Federated States Of Micronesia': 'FM',
      'Florida': 'FL',
      'Georgia': 'GA',
      'Guam': 'GU',
      'Hawaii': 'HI',
      'Idaho': 'ID',
      'Illinois': 'IL',
      'Indiana': 'IN',
      'Iowa': 'IA',
      'Kansas': 'KS',
      'Kentucky': 'KY',
      'Louisiana': 'LA',
      'Maine': 'ME',
      'Marshall Islands': 'MH',
      'Maryland': 'MD',
      'Massachusetts': 'MA',
      'Michigan': 'MI',
      'Minnesota': 'MN',
      'Mississippi': 'MS',
      'Missouri': 'MO',
      'Montana': 'MT',
      'Nebraska': 'NE',
      'Nevada': 'NV',
      'New Hampshire': 'NH',
      'New Jersey': 'NJ',
      'New Mexico': 'NM',
      'New York': 'NY',
      'North Carolina': 'NC',
      'North Dakota': 'ND',
      'Northern Mariana Islands': 'MP',
      'Ohio': 'OH',
      'Oklahoma': 'OK',
      'Oregon': 'OR',
      'Palau': 'PW',
      'Pennsylvania': 'PA',
      'Puerto Rico': 'PR',
      'Rhode Island': 'RI',
      'South Carolina': 'SC',
      'South Dakota': 'SD',
      'Tennessee': 'TN',
      'Texas': 'TX',
      'Utah': 'UT',
      'Vermont': 'VT',
      'Virgin Islands': 'VI',
      'Virginia': 'VA',
      'Washington': 'WA',
      'West Virginia': 'WV',
      'Wisconsin': 'WI',
      'Wyoming': 'WY'
    }

    return states_hash[state];
  }
 
})();

