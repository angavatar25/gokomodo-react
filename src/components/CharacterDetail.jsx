import React from 'react';

const CharacterDetail = (props) => {
  const {
    isShowDetail,
    peopleData,
    closeAction,
  } = props;

  const personData = {
    "Skin Color": peopleData.skin_color,
    "Hair Color": peopleData.hair_color,
    "Eye Color": peopleData.eye_color,
  }
  return (
    <>
      { isShowDetail &&
        <div className="people-detail-container">
          <div className="flex justify-between items-center people-detail">
            <div className="bg-white w-72 h-60 relative">
              <div className='text-left'>
                <p className="text-2xl font-bold">{peopleData.name}</p>
                <div className="grid grid-cols-2 text-xl mt-3">
                  <p> <span className="font-bold">{peopleData.height}</span> cm</p>
                  <p><span className="font-bold">{peopleData.mass}</span> kg</p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  { personData && Object.entries(personData).map(([key, value]) => (
                      <div key={`person-detail-${key}`}>
                        <p className="text-gray-400">{key}</p>
                        <p className="text-xl font-bold capitalize">{value}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="absolute bottom-0 text-center w-full">
                <button onClick={closeAction} className="bg-red-500 text-white w-full p-2 rounded-md">Close</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CharacterDetail;