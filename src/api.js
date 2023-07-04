class Festival {
  fetchData() {
    const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut&rows=100';
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        return data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  showData() {
    {
      const records = this.data.records;
      console.log(records)
      const festivalsList = document.getElementById('festivalsList');
      festivalsList.innerHTML = '';
  
      for (let i = 0; i < records.length; i++) {
        const festival = records[i].fields;
        const listItem = document.createElement('li');
        listItem.textContent = `Commune: ${festival.commune_principale}, Domaine: ${festival.domaine}, Date de début: ${festival.date_debut_ancien}, Date de fin: ${festival.date_de_fin_ancien}`;
        festivalsList.appendChild(listItem);
      }
    }
  }
}

module.exports = Festival;