import React from 'react'
import { Text, View, Modal, TouchableHighlight, FlatList } from 'react-native'

import { Styles } from './style'

export default class Popup extends React.Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}>

                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <Text style={Styles.modalTitle}>:: {this.props.title} ::</Text>
                        <Text style={Styles.modalSubtitle}>Lista de Músicas</Text>

                        <FlatList
                            data={this.props.tracks}
                            renderItem={
                                ({ index, item }) => {
                                    return (
                                        <Text>{index} - ({item.duration}) - {item.title}</Text>
                                    )
                                }
                            }
                            keyExtractor={
                                (index, item) => index + item
                            }
                        />

                        <TouchableHighlight
                            style={{ ...Styles.openButton, backgroundColor: "#f9a825" }}
                            onPress={this.props.closePopup}>
                            <Text style={Styles.textStyle}>Fechar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}