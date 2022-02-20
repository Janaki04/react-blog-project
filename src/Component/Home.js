import React from 'react'
import {  Provider } from './Createcontext'
import Latest from './Latest';
import TheLatest from './TheLatest';
import TopPosts from './TopPosts';
import Travelimg from './Travelimg';
import Displayimg from './Displayimg';
import Advertisement from './Advertisement';




export const Home = () => {
    return (
        <div>
            <Provider>
                <Displayimg />
                <TheLatest />
                <Latest />
                <Travelimg />
                <Advertisement />

                <TopPosts />


            </Provider>

        </div>
    )
}


export default Home