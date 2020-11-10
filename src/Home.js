import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

// use "rfce" from es7 snippet to create the structure

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                    src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    title='Online Experiences'
                    description = "Unique activities we can do togeter, led by a world of hosts."
                />
                <Card 
                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    title = "Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    
                    title="Entire homes"
                    description = "Comfortable private places with room for friends or family."
                />
            </div>
            <div className='home__section'>
                <Card 
                    src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title = "3 Bedroom Flat in Bournemouth"
                    description = "Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price = "$130/night"
                />
                <Card 
                    src = "https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title = "Penthouse in London"
                    description = "Enjoy the amazing view with this stunning pentouse"
                    price = "$350/night"
                />
                <Card 
                    src = "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title = "1 Bedroom apartment"
                    description = "Superhost with a great amenities and a fabolous shopping compund nearby"
                    price = "$70/night"
                />
            </div>
        </div>
    )
}

export default Home
