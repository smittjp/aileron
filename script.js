const data = {
  LAX: [
    {
      category: "physical",
      name: "Be Relax Spa",
      description: "Massage and wellness spa in Terminal 1.",
    },
    {
      category: "mental",
      name: "Interfaith Chapel",
      description: "Quiet reflection space in Terminal 4.",
    },
    {
      category: "social",
      name: "Delta Sky Club",
      description: "Networking lounge for crews in Terminal 3.",
    },
  ],
  JFK: [
    {
      category: "physical",
      name: "Minute Suites",
      description: "Private sleep suites in Terminal 4.",
    },
    {
      category: "mental",
      name: "Meditation Room",
      description: "Calming space near Gate B31 in Terminal 4.",
    },
    {
      category: "social",
      name: "Wingtips Lounge",
      description: "Social lounge open to all travelers in Terminal 4.",
    },
  ],
  LHR: [
    {
      category: "physical",
      name: "Revival Lounge Showers",
      description: "Refreshing showers in Terminal 2 arrivals.",
    },
    {
      category: "mental",
      name: "Be Relax Spa",
      description: "Spa treatments in Terminal 3.",
    },
    {
      category: "social",
      name: "Pilot Bar",
      description: "Crew-friendly bar in Terminal 4.",
    },
  ],
  DXB: [
    {
      category: "physical",
      name: "Timeless Spa",
      description: "Full-service spa in Concourse B.",
    },
    {
      category: "mental",
      name: "Zen Garden",
      description: "Indoor garden for relaxation in Terminal 3.",
    },
    {
      category: "social",
      name: "Marhaba Lounge",
      description: "Friendly meeting space in Terminal 1.",
    },
  ],
  SYD: [
    {
      category: "physical",
      name: "SkyTeam Wellness Spa",
      description: "Massage and treatments in Terminal 1.",
    },
    {
      category: "mental",
      name: "Qantas Quiet Zones",
      description: "Low-stimulation seating in Terminal 1.",
    },
    {
      category: "social",
      name: "Virgin Australia Lounge",
      description: "Gather with crews in Terminal 2.",
    },
  ],
  NRT: [
    {
      category: "physical",
      name: "Raffine Massage",
      description: "Relaxing massage chairs in Terminal 1.",
    },
    {
      category: "mental",
      name: "Prayer Rooms",
      description: "Silent rooms for reflection in Terminal 2.",
    },
    {
      category: "social",
      name: "Narita TraveLounge",
      description: "Casual meeting space in Terminal 1.",
    },
  ],
};

const airportSelect = document.getElementById("airport-select");
const categorySelect = document.getElementById("category-select");
const results = document.getElementById("results");

function render() {
  const airport = airportSelect.value;
  const category = categorySelect.value;
  results.innerHTML = "";

  if (!airport || !category) {
    return;
  }

  const resources = data[airport].filter((r) => r.category === category);
  if (resources.length === 0) {
    results.innerHTML = "<p>No resources found for this selection.</p>";
    return;
  }

  const list = document.createElement("ul");
  resources.forEach((resource) => {
    const item = document.createElement("li");
    const title = document.createElement("h3");
    title.textContent = resource.name;
    const desc = document.createElement("p");
    desc.textContent = resource.description;
    item.appendChild(title);
    item.appendChild(desc);
    list.appendChild(item);
  });
  results.appendChild(list);
}

airportSelect.addEventListener("change", render);
categorySelect.addEventListener("change", render);
