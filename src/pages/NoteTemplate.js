import React from 'react'
import { Helmet } from "react-helmet";
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Toggler from '../components/Toggler'
import Loader from '../components/Loader'
import { getNoteById } from "../helpers/api"

const NoteTemplate = (props) => {
    const [loading, setLoading] = React.useState(true);
    const [note, setNote] = React.useState({});
    
    React.useEffect(() => {
    getNoteById(props.match.params.slug)
        .then(d => {
            setNote(d)
            setLoading(false)
        })
        .catch( error => console.log(error))
    }, [props.match.params.slug])

    return (
        !loading ?
            <>
                <Helmet>
                    <title>{note.title}</title>
                </Helmet>
                <header>
                    <Toggler />
                    <h1>
                        {note.title}
                    </h1>
                </header>
                <div className="meta">
                    <div className="note-date">
                        {note.created_at}
                    </div>
                    <div className="note-tags">
                        {note.labels.map((t, i) => (
                            <Link style={{background: `#${t.color}`}} key={i} to={`/tags/${t.name}`}>{t.name}</Link>)
                        )}
                    </div>
                </div>
                <div id="content" className="content">
                    <div className="note-content">
                        <Markdown source={note.body} escapeHtml={false} />
                    </div>
                </div>
            </> :
            <Loader />
    )
}

export default NoteTemplate;
