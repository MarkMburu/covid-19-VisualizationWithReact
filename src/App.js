import React from 'react';

import { Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './Api';

import coronaImage from './Images/image.png'

class App extends React.Component{
  state = {
    data: {},
    country: ''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData })
  }
  handleCountryChange = async(country) => {
    //fetch the data
    //set the state
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData,country:country})

    console.log(fetchedData)
  }
  render(){
    const { data ,country} = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.images} src={coronaImage} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <footer className={styles.footer}>Created by @Mark Mburu 2020</footer>
      </div>
    )
  }
}
export default App