export function getNotes() {
  return fetch("http://localhost:7787/notes") // Promise<string>, "[{ "name": "N1" }, { "name": "N2" }]"
    .then((r) => r.json()) // Promise<object[]>, [{ name: "N1" }, { name: "N2" }]
    .then((r) => r.map((item) => item.name)); // Promise<string[]>, ["N1", "N2"]
}

export function addNote(note) {
  return fetch("http://localhost:7787/notes", {
    method: "POST",
    body: JSON.stringify({ name: note }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
