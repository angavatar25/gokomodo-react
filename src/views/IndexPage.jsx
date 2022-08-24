import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CharacterDetail from '../components/CharacterDetail';
import { getPeopleData } from '../redux/action';

const starWarsLogo = 'https://www.logo.wine/a/logo/Star_Wars/Star_Wars-Logo.wine.svg';

function IndexPage(props) {
  const [personData, setPersonData] = useState({});
  const [showPersonDetail, setShowPersonDetail] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = parseInt(4);
  const range = [];
  const { people, metaData } = props;
  const borderColorList = {
    'blue': 'border-blue-600',
    'red': 'border-red-600',
    'green': 'border-green-600',
    'purple': 'border-purple-600',
  }

  const totalPage = () => {
    if (Number.isInteger(metaData.count / 10)) {
      return metaData.count / 10;
    }

    return Math.round(metaData.count / 10 + 1);
  }

  const maxVisibleButton = () => {
    if (totalPage < 4) {
      return totalPage
    } else {
      return maxPage
    }
  }

  const startPage = () => {
    if(currentPage === 1) {
      return 1
    }
    if(currentPage === totalPage()) {
      return totalPage - maxVisibleButton() + 1
    }
    return currentPage - 1
  }

  const endPage = () => {
    return Math.min(startPage() + maxVisibleButton() - 1, totalPage())
  }

  for(var i = startPage(); i <= endPage(); i++) {
    range.push({
      name: i,
      isDisabled: i === currentPage
    })
  }

  const randomColor = (rand) => {
    let array = Object.keys(rand);
    let randomNumber = Math.random();
    let index = Math.floor(randomNumber * array.length);

    let randomKey = array[index];
    let randomValue = rand[randomKey];

    return randomValue;
  }

  const getPersonData = async (data) => {
    await setPersonData(data);
    setShowPersonDetail(true);
  }

  const fetchNextPersonData = async () => {
    console.log(range)
    await setCurrentPage(currentPage + 1);
    props.getPeopleData(currentPage + 1);
  }

  const fetchPrevPersonData = async () => {
    await setCurrentPage(currentPage - 1)
    props.getPeopleData(currentPage + 1);
  }

  const closePersonData = () => {
    setShowPersonDetail(false);
  }
  useEffect(() => {
    props.getPeopleData(1);
  }, [])
  return (
    <div className="App">
      <CharacterDetail
        isShowDetail={showPersonDetail}
        peopleData={personData}
        closeAction={() => closePersonData()}
      />
      <div className="header text-center">
        <img src={starWarsLogo} className="text-white" alt="logo" />
        <p className="text-2xl font-bold text-white">Star Wars App</p>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-3 p-4">
        { people && people.map((index, key) => (
          <div
            key={`starwars-people-${key}`}
            className={`bg-white p-4 shadow-md rounded-md border-b-4 ${randomColor(borderColorList)}`}
            onClick={() => getPersonData(index)}>
            <p className="text-xl font-bold">{index.name}</p>
            <div className='mt-2'>
              <p className="text-gray-400 text-sm">Height: {index.height}cm</p>
              <p className="text-gray-400 text-sm">Weight: {index.mass}kg</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center py-10">
        <button
          className={currentPage === 1 && metaData.previous === null ? 'pagination-button--inactive' : 'pagination-button'}
          onClick={() => fetchPrevPersonData()}
        >Prev</button>
        {
          range && range.map((index, i) => (
            currentPage === index.name ? 
            <button key={i} className="pagination-number">{index.name}</button> : 
            <button key={i} className="pagination-number--inactive">{index.name}</button>
          ))
        }
        <button
          className={currentPage === totalPage() && metaData.next === null ? 'pagination-button--inactive' : 'pagination-button'}
          onClick={() => fetchNextPersonData()}
        >Next</button>
      </div>
    </div>
  )
}

const reduxState = (state) => ({
  people: state.people.peopleData,
  metaData: state.people.metaPeopleData,
})
  
const reduxDispatch = (dispatch) => ({
  getPeopleData: (page) => dispatch(getPeopleData(page)),
})

export default connect(reduxState, reduxDispatch)(IndexPage);

