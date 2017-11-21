import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
    state = {activeItem: 'home'}


    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div>
                <Menu pointing>
                    <Menu.Item name='home' onClick={this.handleItemClick}/>
                    <Menu.Item name='messages' onClick={this.handleItemClick}/>
                    <Menu.Item name='friends' onClick={this.handleItemClick}/>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'/>
                        </Menu.Item>
                        <Menu.Item name='User' onClick={this.handleItemClick}
                                   position='right'/>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
