import React, {Component} from 'react'
import {Sidebar, Segment, Menu, Icon, Input, Button, Responsive} from 'semantic-ui-react'
import SidebarLeftPush from '../SidebarLeft/SidebarLeft'

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
                <SidebarLeftPush visible={this.props.visible} onClick={this.toggleVisibility}/>
                <Responsive as={Segment} minWidth={720}>
                    <Menu visible={this.props.visible}>
                        <Button animated='fade' onClick={this.toggleVisibility} onClick={this.props.onClick} size={'mediun'} basic>
                            <Button.Content visible>
                                Menu
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='grid layout'/>
                            </Button.Content>
                        </Button>

                        <Button size='large' basic>
                            <Button.Content>
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
            </div>

        )
    }
}
