import React, {useState} from 'react';
import './App.css';
import Tab from './components/Tab';

function App() {
  const [tabs,setTabs] = useState([
    {
      name:"Tab 1",
      isSelected: true,
      text: "Content for tab one."
    },
    {
      name:"Tab 2",
      isSelected: false,
      text:"Content for tab 2"
    },
    {
      name:"Tab 3",
      isSelected:false,
      text:"Content for tab 3"
    }
  ])

  const handleClick = (e,idx) => {
    console.log(idx);
    tabs.forEach((tab,i) => {
      if( i !== idx){
        tab.isSelected = false;
        setTabs(oldTabs => [...oldTabs])
      }
      else{
        tab.isSelected = true;
        setTabs(oldTabs => [...oldTabs])
      }
    })
  }

  return (
    <div className="App">
      {
        tabs.map((tab,idx) => {
          return <Tab 
                    tab={tab}
                    idx={idx}
                    key={idx}
                    handleClick={handleClick}
                  />
        })
      }
      {
        tabs.map((tab,idx) => {
          if(tab.isSelected === true){
            return <p key={idx}>{tab.text}</p>
          }
          return null;
        })
      }
    </div>
  )
}

export default App;