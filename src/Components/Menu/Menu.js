import React, {Component} from 'react'
import {Sidebar, Segment, Menu, Icon, Input, Button, Responsive} from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    state = {visible: false}
    toggleVisibility = () => this.setState({visible: !this.state.visible})

    render() {
        const {activeItem} = this.state
        const {visible} = this.state

        return (
            <div>
                <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad'/>
                        Games
                    </Menu.Item>
                    <Menu.Item name='camera' active={activeItem === 'Camera'} onClick={this.handleItemClick}>
                        <Icon name='camera'/>
                        Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment.Group>
                        <Responsive as={Segment} minWidth={720}>
                            <Menu>
                                <Button animated='fade' onClick={this.toggleVisibility} size={'mediun'} basic>
                                    <Button.Content visible>
                                        Menu
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='grid layout'/>
                                    </Button.Content>
                                </Button>
                                <Button onClick={this.handleItemClick} size={'mediun'} basic>
                                    <Button.Content visible>
                                        SIMCI
                                    </Button.Content>
                                </Button>

                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Input icon='search' placeholder='Search...'/>
                                    </Menu.Item>
                                    <Menu.Item name='logout' active={activeItem === 'logout'}
                                               onClick={this.handleItemClick}/>
                                </Menu.Menu>
                            </Menu>
                        </Responsive>

                    </Segment.Group>
                </Sidebar.Pusher>
            </div>

        )
    }
}
