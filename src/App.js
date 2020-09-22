import React from 'react';
import Cards from "./components/Cards"
import SimpleTable from "./components/Table"
import { fetchAllPublicHealthUnitData, fetchOntarioMetaCovidCases } from './api/index';
import styles from './App.module.css'
import orderBy from "lodash/orderBy";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ontario_meta : {},
      columnToSort: "Total",
      sortDirection: "desc",
    }
  }

  handleSort(columnName){
    console.log(columnName)
  }

  async componentDidMount() {
    const { result : phu_result } = await fetchAllPublicHealthUnitData();
    let phuList = [];
    if(phu_result)
    {
      for (const {Outcome, PublicHealthUnit} of phu_result) {
        phuList.push({...Outcome, PublicHealthUnit})
      }
    }

    const { result : ontario_meta_result} = await fetchOntarioMetaCovidCases();

    this.setState( {data: phuList, ontario_meta: ontario_meta_result} );
  }

  render() {
    const { data, ontario_meta, columnToSort, sortDirection} = this.state;

    return (
      <div className={styles.container}>
      <h1>Ontario Public Health Unit City Data</h1>
      <Cards data={ontario_meta}/>
      <SimpleTable handleSort = {this.handleSort} columnToSort = {columnToSort} sortDirection = {sortDirection} data={orderBy(
              data,
              columnToSort,
              sortDirection
            )}/>
      </div>
    );
  }
}

export default App;