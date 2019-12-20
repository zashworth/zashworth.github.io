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
        let h6 = document.createElement('h5');
        let h7 = document.createElement('h5');
        let text2 = document.createElement('p');
        let text3 = document.createElement('p');
        let text4 = document.createElement('p');
        let sessions = document.createElement('p');
        let text5 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = temples[i].location;
        text.appendChild(h2);
        image.setAttribute('src', 'images/' + temples[i].photo);
        image.setAttribute('alt', temples[i].location);
        card.appendChild(text);
        card.appendChild(image);
        

        for (let j = 0; j < 2; j++) {
          let h5 = document.createElement('h5');
          h5.textContent = temples[i].address[j];
          text.appendChild(h5);
        }
      
        h6.textContent = 'Tele: ' + temples[i].telephone;
        h7.textContent = 'Email: ' + temples[i].email;
        text.appendChild(h6);
        text.appendChild(h7);
        
        text2.textContent = 'Services Offered: ';
        text.appendChild(text2);
        for (let k = 0; k < 4; k++) {
          let services = document.createElement('p');
          services.textContent = temples[i].services[k];
          text.appendChild(services);
        }

        text3.textContent = 'Temple History: ';
        text.appendChild(text3);
        for (let l = 0; l < 8; l++) {
          let history = document.createElement('p');
          history.textContent = temples[i].history[l];
          text.appendChild(history);
        }

        text4.textContent = 'Ordinances Offered: ';
        text.appendChild(text4);
        for (let p = 0; p < 5; p++) {
          let ordinance = document.createElement('p');
          ordinance.textContent = temples[i].ordinance[p];
          text.appendChild(ordinance);
        }
        
        sessions.textContent = 'Session Times: ' + temples[i].session;
        text.appendChild(sessions);

        text5.textContent = 'Temple Closures: ';
        text.appendChild(text5);
        for (let o = 0; o < 15; o++) {
          let closures = document.createElement('p');
          closures.textContent = temples[i].closures[o];
          text.appendChild(closures);
        }

        document.querySelector('div.temples').appendChild(card);
    }

  });

