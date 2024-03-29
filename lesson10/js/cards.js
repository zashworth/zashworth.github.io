const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
  
    for (let i = 0; i < towns.length; i++ ) {
      if ( towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') { 

        let card = document.createElement('article');
        let text = document.createElement('section')
        let h2 = document.createElement('h2');
        let h5 = document.createElement('h5');
        let yFound = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h5.textContent = towns[i].motto;
        yFound.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainFall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + 'in.';

        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);
        
        text.appendChild(h2);
        text.appendChild(h5);
        text.appendChild(yFound);
        text.appendChild(population);
        text.appendChild(rainFall);
        card.appendChild(text);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
    }

  });



