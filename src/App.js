import React from 'react';
import Cards from "./components/Cards"
import SimpleTable from "./components/Table"
import { fetchAllPublicHealthUnitData, fetchOntarioMetaCovidCases } from './api/index';
import styles from './App.module.css'
import orderBy from "lodash/orderBy";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ontario_meta : {},
      last_synced : "",
      columnToSort: "Total",
      sortDirection: "desc",
    }
    this.handleSort = this.handleSort.bind(this)
  }

  handleSort(columnName){
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
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

    const { result : ontario_meta_result, lastSynced : last_synced_UTC_date} = await fetchOntarioMetaCovidCases();

    this.setState( {data: phuList, ontario_meta: ontario_meta_result, last_synced: new Date(last_synced_UTC_date).toDateString(`YYYY-MM-DD`)});
  }

  render() {
    const { data, ontario_meta, last_synced, columnToSort, sortDirection} = this.state;
    return (
      <div className={styles.container}>
      <h1>Ontario Public Health Unit City Data</h1>
      <p>Last synched at : {last_synced}</p>
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