import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.css'
import SideNav from './components/SideNav'
import NotesByTagTemplate from './pages/NotesByTagTemplate'
import NoteTemplate from "./pages/NoteTemplate"
import NoteLister from "./components/NoteLister"
import { USER_IMAGE_URL, SITE_TITLE } from './theme.config'

const App = () => {

    return (
        <Router>
            <main>
                <SideNav siteTitle={SITE_TITLE} userImageUrl={USER_IMAGE_URL} />
                <div className="content-wrapper">
                    <Route path="/" exact component={NotesByTagTemplate} />
                    <Route path="/tags/:tag" exact component={NoteLister} />
                    <Route path="/note/:slug" exact component={NoteTemplate} />
                </div>
            </main>
        </Router>
    )
}

export default App
