import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'

import { View } from '../Home/style'
import api from '../../services/api'
import Card from '../../components/Card'

const Home = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        navigation.setParams({title: 'Albums'})

        /**
         * Get albums
         */
        api.get("api/albums.json")
        .then((response) => setAlbums(response.data.albums))
        .catch((error) => console.log(error))
    }, [albums])

    return (
        <View width={(width - 40)}>
            <FlatList
                data={albums}
                renderItem = {
                    ({ item }) => {
                        return (
                            <Card item={item} />
                        )
                    }
                } 
                keyExtractor = {
                    (index, item) => index + item
                }
            />
        </View>
    )
}

export default Home