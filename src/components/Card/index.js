import React, { useState } from 'react'
import { Image, Platform, TouchableOpacity } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import { Title, View, Icon, Subtitle, Content } from './style'

import api from '../../services/api'
import constants from '../../services/constants'
import Popup from '../Popup'

export default class Card extends React.Component {

    constructor(props){
        super(props);

        this.state = { tracks: [],  modalVisible: false }
    }

    render() {
        const isIOSSimulator = () => {
            return Platform.OS === 'ios' && DeviceInfo.isEmulator()
        }

        /**
         * 
         * Get list of tracks
         */
        const tracks = async (link) => {
            await api.get(link)
                .then((response) => this.setState({ tracks: response.data.tracks }))
                .catch((error) => console.log(error))


            this.setState({ modalVisible: true })
        }

        const closePopup = () => {
            this.setState({ modalVisible: false })
        }

        return (
            <View >

                <Popup 
                    modalVisible={this.state.modalVisible} 
                    title={this.props.item.name} 
                    tracks={this.state.tracks}
                    closePopup={closePopup}
                />
                
                <Icon>
                    <Image style={
                        {
                            width: 90,
                            height: 90,
                            left: 2,
                            position: 'absolute'
                        }
                    }
                        source={
                            !isIOSSimulator ?
                                {
                                    uri: constants.BASE_IMAGE + this.props.item.image
                                } : require('../../../assets/not_found.png')
                        }
                    />
                </Icon>
                <Content>
                    <Title>{this.props.item.artist}</Title>
                    <Subtitle>{this.props.item.name}</Subtitle>
                </Content>

                <Icon>
                    <TouchableOpacity onPress={() => tracks(this.props.item.links.tracks)}>
                        <Image style={
                            {
                                width: 25,
                                height: 25,
                            }
                        }
                            source={require('../../../assets/playlist.png')}
                        />
                    </TouchableOpacity>
                </Icon>
            </View>
        )
    }
}