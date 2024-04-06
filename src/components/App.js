import './styles/App.css';
import { useState } from 'react';

function App() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState();

  function calculateRelationship() {
    const result = removeCommenLetters(input1, input2);

    const sumLength = result[0].length + result[1].length;
    const modResult = sumLength % 6;

    let relationshipStatus = "";

    switch (modResult) {
      case 0:
        relationshipStatus = "Sibling";
        break;
      case 1:
        relationshipStatus = "Friends";
        break;
      case 2:
        relationshipStatus = "Love";
        break;
      case 3:
        relationshipStatus = "Affection";
        break;
      case 4:
        relationshipStatus = "Marriage";
        break;
      case 5:
        relationshipStatus = "Enemy";
        break;
      default:
        relationshipStatus = "Please Enter valid input";
        break;
    }
    setRelationshipStatus(relationshipStatus);
  }

  function removeCommenLetters(str1, str2) {

    //convert it into lowercase
    const letter1 = str1.toLowerCase();
    const letter2 = str2.toLowerCase();

    //convert sting into array for easy manupulation
    let arr1 = letter1.split('');
    let arr2 = letter2.split('');

    //Remove commen letters we get unique values here
    const uniqueArr1 = arr1.filter(char => !arr2.includes(char));
    const uniqueArr2 = arr2.filter(char => !arr1.includes(char));

    //Convering array into Sting
    const res1 = uniqueArr1.join('');
    const res2 = uniqueArr2.join('');
    return [res1, res2];
  }

  function clearStatus() {
    setinput1("");
    setinput2("");
    setRelationshipStatus("");
  }

  return (
    <div className="App">
      <div className='main'>
        <input
          type='text'
          value={input1}
          onChange={(e) => setinput1(e.target.value)}
          data-testid="input1"
        />
        <input
          value={input2}
          type='text'
          onChange={(e) => setinput2(e.target.value)}
          data-testid="input2"
        />
        <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Reletionshio Further</button>
        <button data-testid="clear" onClick={clearStatus}>Clear</button>
      </div>
      {relationshipStatus != "" ? 
      <span className='res'>
        <h3 data-testid="answer">{relationshipStatus}</h3>
      </span>
        : null}
    </div>
  );
}

export default App;
