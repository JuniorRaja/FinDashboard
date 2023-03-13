const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Noc",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59095, 36684, 33572, 39000, 48847, 48116, 61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          15374, 20537, 21631, 29095, 20000, 20572, 19005, 38847, 38116, 40004,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
