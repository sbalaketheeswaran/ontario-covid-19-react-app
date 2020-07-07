import React from 'react';
import ComboBox from "./components/ComboBox"
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
      let phuId = data.get(selectedPhu)
      console.log(phuId)

      const result  = await fetchByPublicHealthUnitID(phuId);
      console.log(result)
      this.setState( {data, phuMetrics: result});
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
      <h1>Ontario Public Health Unit City Data</h1>
      <ComboBox data ={[ ...data.keys() ]} handleCityChange={this.handleCityChange}/>
      </div>
    );
  }
}

export default App;