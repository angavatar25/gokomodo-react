import React from 'react';

const CharacterDetail = (props) => {
  const {
    isShowDetail,
    peopleData,
    closeAction,
  } = props;
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
                  <div>
                    <p className="text-gray-400">Skin Color</p>
                    <p className="text-xl font-bold">{peopleData.skin_color}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Hair Color</p>
                    <p className="text-xl font-bold">{peopleData.hair_color}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Eye Color Color</p>
                    <p className="text-xl font-bold">{peopleData.eye_color}</p>
                  </div>
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