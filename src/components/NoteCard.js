import React from 'react'
import { Link } from 'react-router-dom'
import Badge from './Badge'

const NoteCard = ({ title, date, tags, slug }) => {
    return (
        <div className="note">
            <small className="note-date">{date}</small>
            <Link to={`/note/${slug}`} className="note-title">
                <span>{title}</span>
            </Link>
            <div className="note-tags">
                {tags.map((t, i) => <Badge key={i} title={t.name} background={t.color} />)}
            </div>
        </div>
    )
}

export default NoteCard;
