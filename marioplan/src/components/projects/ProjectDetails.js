import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima modi dolore nulla sed magnam dolores ullam suscipit eum non?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By George</div>
                    <div>12 Nov 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
