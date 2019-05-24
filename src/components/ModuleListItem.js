import React from 'react'

const ModuleListItem = ({moduleId, module, createModule, titleChanged, selectModule, deleteModule}) =>

    <div>

        <ul>

            <div style={{float: 'left', marginBottom: '7%'}} onClick={() => selectModule(module)}>
                {module.title}
            </div>

            <div onClick={() => deleteModule(module)}>
                <a className="btn btn-sm btn-danger" style={{float: 'right'}}>
                    <i className="fa fa-times" style={{fontSize: '20px'}}/>
                </a>
            </div>

            <div>
                <a className="btn btn-sm btn-warning" style={{float: 'right', marginRight: '5%'}}>
                    <i className="fa fa-pencil" style={{fontSize: '20px'}}/>
                </a>
            </div>


        </ul>

    </div>


export default ModuleListItem