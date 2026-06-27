const studentSites = [
  // Add student mini-site links here after the conference.
  // Example:
  {
  title: "Electromagnetic Waves in Daily Life",
  presenter: "Student Name",
  href: "https://example.com/student-site",
  },  
  {
  title: "שדות אלקטרומגנטיים בקבל",
  presenter: "סטודנט 2",
  href: "https://example.com/student-site2",
  },
];

const list = document.querySelector("#student-sites");
const emptyState = document.querySelector("#student-empty");

if (studentSites.length > 0 && list && emptyState) {
  emptyState.classList.add("is-hidden");

  for (const site of studentSites) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const title = document.createElement("strong");
    const presenter = document.createElement("span");

    link.href = site.href;
    title.textContent = site.title;
    presenter.textContent = site.presenter;

    link.append(title, presenter);
    item.append(link);
    list.append(item);
  }
}
