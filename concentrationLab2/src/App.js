import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import Card from './components/Card.js';
import Status from './components/Status.js';
// Non app dependent functions
const fillImages = ()=>{
  let images = Array(20).fill(null);
  let values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
  let suits = ['h', 's'];
  let index = 0;
  for (let value = 0; value < values.length; value++){
      for (let suit = 0; suit < suits.length; suit ++) {
          images[index] = "card" + values[value] + suits[suit] + ".jpg";
          index++;
      }
  }
  return images;
}
const shuffleImages = (images)=>{
  for (let i = 0; i < images.length; i++) {
    let rnd = Math.floor(Math.random() * images.length);
    [images[i], images[rnd]] = [images[rnd], images[i]];
  }
}
const creatImages = () =>{
  let arrImages = fillImages();
  shuffleImages(arrImages);
  return arrImages
};
const isMatch=(firstPick,secondPick,images)=>{
  if (images[firstPick].substr(4, 1) === images[secondPick].substr(4, 1))
  return true;
else
  return false;
}

//
//Start of APP()
const App=()=>{
  
  console.log('App Init');
  // useState Init Area
  const imagePath = 'Cards/';
  const appTitle = useState("Concentration");
  const appMessage=useState("Concentration Game Built In React");
  const [images,setImages] = useState(creatImages());
  const [firstPick,setFirstPick] =useState(-1);
  const [secondPick,setSecondPick]=useState(-1);
  const [matches,setMatches] =useState(0);
  const [tries,setTries] =useState(0);
//

  const renderCard=(i)=>{      
    const image = (images[i] == null) ? 'none' : 
    ( firstPick == i || secondPick == i) ? 
    'url(' + imagePath + images[i] + ')' : 
    'url(' + imagePath + 'black_back.jpg)';
    const enabled = (images[i] != null && 
    (i != firstPick && i != secondPick) &&
    (firstPick == -1 || secondPick == -1) &&
    (matches < 10)) ? true : false;
    const eventHandler = (enabled)? handleClick : ()=>{};
    const cursor = (enabled) ? "pointer" : "none";
    const myStyle = {
      backgroundImage: image,
      cursor: cursor
      }
      // update to return a card component
    return ( 
      <Card index={i} style={myStyle} eventHandler={eventHandler}>
      </Card>
    );
  }
// update to send a board component

  const handleClick=(event)=>{
    let localPicks = {first:firstPick,second:secondPick};
    let localImages = images;
    const index = event.target.id;
    console.log(index);
    if (firstPick == -1){
      localPicks.first = index;
      setFirstPick(index);
    }
    else {
      localPicks.second = index;
      setSecondPick(index);
      setTimeout(checkCards(localPicks.first,localPicks.second,localImages), 1000);
    }

  }
  const checkCards=(firstPick,secondPick,images)=>{
    setTries(tries+1);
    if (isMatch(firstPick,secondPick,images)) {
      setMatches(matches+1);
      setImages[firstPick](null);
      setImages[secondPick](null);
    }
    else{
      setFirstPick(-1);
      setSecondPick(-1);
    }
  }
  let stat = (matches < 10) ?
          'Matches: ' + matches + " Tries: " + tries :
          "Congratulations!  You found all 10 matches in " + tries + " tries!";
  return(
    <div>
    <Status status={stat}/>
    <div className="row">
                <div className="col-sm-1"></div>
                {renderCard(0)}
                {renderCard(1)}
                {renderCard(2)}
                {renderCard(3)}
                {renderCard(4)}
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                {renderCard(5)}
                {renderCard(6)}
                {renderCard(7)}
                {renderCard(8)}
                {renderCard(9)}
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                {renderCard(10)}
                {renderCard(11)}
                {renderCard(12)}
                {renderCard(13)}
                {renderCard(14)}
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                {renderCard(15)}
                {renderCard(16)}
                {renderCard(17)}
                {renderCard(18)}
                {renderCard(19)}
                <div className="col-1"></div>
            </div>   
            </div>
  );
}

export default App;
