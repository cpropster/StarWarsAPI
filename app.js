const loadData = async () => {
  const peoplePromise = axios
    .get("http://star-cors.herokuapp.com/people")
    .then((response) => response.data);
  const filmsPromise = axios
    .get("http://star-cors.herokuapp.com/films")
    .then((response) => response.data);
  const vehiclesPromise = axios
    .get("http://star-cors.herokuapp.com/vehicles")
    .then((response) => response.data);
  const starshipsPromise = axios
    .get("http://star-cors.herokuapp.com/starships")
    .then((response) => response.data);

  const [people, films, vehicles, starships] = await Promise.all([
    peoplePromise,
    filmsPromise,
    vehiclesPromise,
    starshipsPromise,
  ]);

  console.log(people);
  console.log(films);
  console.log(vehicles);
  console.log(starships);

  //is there any way to do this where you cycle through the items to create an array of items and insert where needed?
  const renderPeople = (people) => {
    const peopleElem = document.querySelector("#people");
    let html = people.results
      .map((person) => {
        return `
        <li class="list-group-item">
        ${person.name}<br><br>Has appeared in ${person.films.length} films
        </li>
        `;
      })
      .join("");
    html = `<h4>PEOPLE</h4><ul class="list-group">${html}</ul>`;
    peopleElem.innerHTML = html;
  };

  const renderVehicles = (vehicles) => {};
  const renderFilms = (films) => {};
  const renderStarships = (starships) => {};

  let filmsElem = document.querySelector("#films");
  let vehiclesElem = document.querySelector("#vehicles");
  let starshipsElem = document.querySelector("starships");

  renderPeople(people);
};

loadData();
