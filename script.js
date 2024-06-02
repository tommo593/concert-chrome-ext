async function fetchData() {
  const url =
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=London&minDate=2024-10-01&maxDate=2026-06-30&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bbf3e67d10msh7c4eb28ad14f439p1080a2jsn6286e5617279",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    document.getElementById("concerts").innerHTML = result.data
      .map((item) => `<li>${item.name}</li>`)
      .join("");
  } catch (error) {
    console.error(error);
  }
}

fetchData();
