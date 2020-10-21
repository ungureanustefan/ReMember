export function getNotes() {
  return fetch("http://localhost:7787/notes/") // Promise<string>, "[{ "name": "N1" }, { "name": "N2" }]"
    .then((r) => r.json()); // Promise<object[]>, [{ name: "N1" }, { name: "N2" }]
}

export function addTextNote(note) {
  return fetch("http://localhost:7787/notes", {
    method: "POST",
    body: JSON.stringify({ name: note }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
}

export function addImgNote(image) {
  return fetch("http://localhost:7787/notes", {
    method: "POST",
    body: JSON.stringify({ image: image }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then((r) => r.json())
}

export function deleteNote(noteID) {
  return fetch("http://localhost:7787/notes/" + noteID, {
    method: "DELETE",
  });
}

export function archiveNote(noteID) {
  return fetch("http://localhost:7787/notes/" + noteID, {
    method: "POST",
    body: JSON.stringify({ archive: true, }),
    headers: {
      "Content-Type": "application/json",
    }
  });
}
export function labelAdd(noteID, label) {
  return fetch("http://localhost:7787/notes/" + noteID, {
    method: "POST",
    body: { label: label }
  });
}
