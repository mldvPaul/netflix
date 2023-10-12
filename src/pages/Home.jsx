import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='UpComing' fetchURL={requests.requestUpComing}/>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID='5' title='Now Plaing' fetchURL={requests.requestNowPlaing}/>
    </div>
  )
}

export default Home
