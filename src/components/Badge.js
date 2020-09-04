import React from 'react'
import { Link } from 'react-router-dom'

export default ({ title, background }) => {
    return (
        <Link style={{ background: `#${background}` }} to={`/tags/${title}`}>{title}</Link>
    )
}
