import React from 'react'
import NoteCard from "./NoteCard"
import Toggler from './Toggler'
import { Helmet } from "react-helmet";
import { getNotesByTag, getNotes } from "../helpers/api"

const NoteLister = (props) => {
    const pageTitle = props.match.params.tag
    const [loading, setLoading] = React.useState(true);
    const [notes, setNotes] = React.useState([]);
    React.useEffect(() => {
        if (pageTitle) {
            getNotesByTag(pageTitle)
                .then(d => {
                    setLoading(false)
                    setNotes(d)
                })
                .catch(error => console.log(error))
        } else {
            getNotes()
                .then(d => {
                    setLoading(false)
                    setNotes(d)
                })
                .catch(error => console.log(error))
        }
    }, [pageTitle])

    return (
        !loading && notes.length > 0 &&
        <>
            <Helmet>
                <title>{pageTitle ? pageTitle : "All Notes"}</title>
            </Helmet>
            <header>
                <Toggler />
                <h1>{pageTitle ? pageTitle : "All Notes"}</h1>
            </header>
            <div id="content" className="content">
                {notes.map((note, i) => <NoteCard key={i} title={note.title} date={note.created_at} slug={note.number} tags={note.labels} />)}
            </div>
        </>
    )
}

export default NoteLister;
