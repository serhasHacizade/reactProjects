import React from 'react'
import { Link, Route,Routes, useRouteMatch } from 'react-router-dom'
const Admin = () => {
  return (
    <div>
        <nav>
            <ul className="admin-menu">
                <li>
                    <Link to="/">ben böyle dersin mk</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Admin