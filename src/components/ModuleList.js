import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modules: this.props.modules
        };
    }

    createModule = () => {
        this.props.createModule(this.state.module);
    }

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value}
            });
    }

    render() {
        return(

            <div>

                <ul className="list-group">
                    <li style={{marginBottom: '5%'}} className="list-group-item">
                        <input style={{marginBottom: '5%'}} onChange={this.titleChanged}
                            className="form-control"/>
                        <button style={{marginBottom: '5%'}}
                            onClick={this.createModule}
                            className="btn btn-primary">Add Module</button>
                    </li>

                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        createModule={this.props.createModule}
                                        titleChanged={this.props.titleChanged}
                                        selectModule={this.props.selectModule}
                                        deleteModule={this.props.deleteModule}
                                        key={module.id}
                                        module={module}/>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}



export default ModuleList;