import React from 'react';
import ComboBox from "./components/ComboBox"
import Cards from "./components/Cards"
import { fetchAllPublicHealthUnitData, fetchByPublicHealthUnitID } from './api/index';
import styles from './App.module.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Map(),
      phuMetrics : {}
    }
  }

  async componentDidMount() {
    const { result } = await fetchAllPublicHealthUnitData();
    let phuIdMap = new Map()
    if(result)
    {
      for (const {PublicHealthUnit , id} of result) {
        phuIdMap.set(PublicHealthUnit,id)
      }
    }

    this.setState( {data: phuIdMap} );
  }

  handleCityChange = async (selectedPhu) => {
    if(selectedPhu){
      const { data } = this.state

      let selectedPhuId = data.get(selectedPhu)

      const result  = await fetchByPublicHealthUnitID(selectedPhuId);
      this.setState( {data, phuMetrics: result});
    }
  }

  render() {
    const { data, phuMetrics} = this.state;
    return (
      <div className={styles.container}>
      <h1>Ontario Public Health Unit City Data</h1>
      <ComboBox data ={[ ...data.keys() ]} handleCityChange={this.handleCityChange}/>
      <Cards publicHealthUnit={phuMetrics}/>
      </div>
    );
  }
}

export default App;