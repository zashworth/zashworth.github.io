const requestURL = "https://zashworth.github.io/temple-inn-&-suites/json/temple-info.json";



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const temples = jsonObject['temples'];
  
    for (let i = 0; i < temples.length; i++ ) {
    
        let card = document.createElement('article');
        let text = document.createElement('section')
        let h2 = document.createElement('h2');
        let h5 = document.createElement('h5');
        let h6 = document.createElement('h5');
        let h7 = document.createElement('h5');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let ordinances = document.createElement('p');
        let sessions = document.createElement('p');
        let closures = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = temples[i].location;
        h5.textContent = temples[i].address;
        h6.textContent = temples[i].telephone;
        h7.textContent = temples[i].email;
        
        services.textContent = 'Services Offered: ' + temples[i].services;
        history.textContent = 'Temple History: ' + temples[i].history;
        ordinances.textContent = 'Ordinances Offered: ' + temples[i].ordinance;
        sessions.textContent = 'Session Times: ' + temples[i].session;
        closures.textContent = 'Temple Closures: ' + temples[i].closures;
        image.setAttribute('src', 'images/' + temples[i].photo);
        image.setAttribute('alt', temples[i].location);
        
        text.appendChild(h2);
        text.appendChild(h5);
        text.appendChild(h6);
        text.appendChild(h7);
        text.appendChild(services);
        text.appendChild(history);
        text.appendChild(ordinances);
        text.appendChild(sessions);
        text.appendChild(closures);
        card.appendChild(text);
        card.appendChild(image);

        document.querySelector('div.temples').appendChild(card);
    }

  });

