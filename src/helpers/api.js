export function getTags() {
    return fetch("/api/tags")
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}

export function getNotes() {
    return fetch("/api/notes")
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}

export function getNotesByTag(tag) {
    return fetch(`/api/notes?tag=${tag}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}

export function getNotesById(id) {
    return fetch(`/api/notes?id=${id}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}