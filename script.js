async function fetchData() {
  const url =
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=London&minDate=2024-06-03&maxDate=2026-07-31&page=2";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bbf3e67d10msh7c4eb28ad14f439p1080a2jsn6286e5617279",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  document.getElementById("concerts").innerHTML = record.data.map((item) =>
    `<li>${item.name}</li>`.join("")
  );
}

fetchData();
