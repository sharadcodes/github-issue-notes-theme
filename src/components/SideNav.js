import React from 'react'
import { Link } from 'react-router-dom'
import { getTags } from "../helpers/api"

const SideNav = (props) => {
    const { siteTitle, userImageUrl } = props
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        getTags()
            .then(d => setTags(d))
            .catch(e => console.log(e))
    }, [])

    return (
        <div id="sidenav-wrapper" className="sidenav-wrapper">
            <div className="meta">
                {userImageUrl && <img src={userImageUrl} alt="" />}
                <h6>{siteTitle}</h6>
            </div>
            <Link to="/" className="nav-item">All Notes</Link>
            <small>TAGS</small>
            <div className="sidenav">
                {tags.length > 0 && tags.map((t, i) => (
                    <Link className="nav-item" key={i} to={`/tags/${t.name}`}>{t.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav
