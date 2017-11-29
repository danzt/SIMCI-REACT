import React, {Component} from 'react'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'

class SidebarLeftPush extends Component {
    state = {visible: false}

    render() {
        const {activeItem} = this.state
        return (
            <div>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical
                         inverted>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.props.onClick}>
                        <Icon name='home'/>
                        Inicio
                    </Menu.Item>

                    <Menu.Item name='Usuarios' active={activeItem === 'Usuario'} onClick={this.props.onClick}>
                        <Icon name='user outline'/>
                        Usuarios
                    </Menu.Item>

                    <Menu.Item name='Catalogo' active={activeItem === 'Catalogo'} onClick={this.props.onClick}>
                        <Icon name='book'/>
                        Catalogo
                    </Menu.Item>

                    <Menu.Item name='Invetario' active={activeItem === 'Inventario'} onClick={this.props.onClick}>
                        <Icon name='archive'/>
                        Inventario
                    </Menu.Item>

                    <Menu.Item name='Proveedor' active={activeItem === 'Proveedor'} onClick={this.props.onClick}>
                        <Icon name='shop'/>
                        Proveedor
                    </Menu.Item>

                    <Menu.Item name='Laboratorio' active={activeItem === 'Laboratorio'} onClick={this.props.onClick}>
                        <Icon name='lab'/>
                        Laboratorio
                    </Menu.Item>

                    <Menu.Item name='Ordenes' active={activeItem === 'Ordenes'} onClick={this.props.onClick}>
                        <Icon name='edit'/>
                        Ordenes
                    </Menu.Item>
                    <Menu.Item name='Reportes' active={activeItem === 'Reportes'} onClick={this.props.onClick}>
                        <Icon name='file text outline'/>
                        Reportes
                    </Menu.Item>

                    <Menu.Item name='Documentos' active={activeItem === 'Documentos'} onClick={this.props.onClick}>
                        <Icon name='travel'/>
                        Documentos
                    </Menu.Item>

                    <Menu.Item name='Consultas' active={activeItem === 'Consultas'} onClick={this.props.onClick}>
                        <Icon name='search'/>
                        Consultas
                    </Menu.Item>

                    <Menu.Item name='Intituciones' active={activeItem === 'Inticiones'} onClick={this.props.onClick}>
                        <Icon name='building outline'/>
                        Instituciones
                    </Menu.Item>

                    <Menu.Item name='Ajustes' active={activeItem === 'Ajustes'} onClick={this.props.onClick}>
                        <Icon name='setting'/>
                        Ajustes
                    </Menu.Item>

                </Sidebar>
            </div>
        )
    }
}

export default SidebarLeftPush