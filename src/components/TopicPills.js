import React from 'react'

export default class TopicPills extends React.Component {
    render() {

        return(

            <ul class="nav nav-pills">

                <li class="nav-item">
                    <a class="nav-link active" href="#">Topic 1</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Topic 2</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>

            </ul>
        );
    }
}