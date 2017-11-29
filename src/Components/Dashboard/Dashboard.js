import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
import MenuExampleSecondary from '../Menu/Menu'
import SidebarLeftPush from '../SidebarLeft/SidebarLeft'

export default class ContainerExampleText extends Component {

    state = {}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    state = {visible: false}
    toggleVisibility = () => this.setState({visible: !this.state.visible})

    render() {
        const {visible} = this.state
        return (
            <div>
                <Container>
                    <Header as='Menu'>
                        <SidebarLeftPush visible={this.props.visible} onClick={this.toggleVisibility}/>
                    </Header>

                    <MenuExampleSecondary visible={visible} onClick={this.toggleVisibility}/>
                </Container>
            </div>
        )
    }
}