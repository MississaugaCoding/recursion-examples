
import './App.css';
import Entry from './components/Entry';

const data = [
  {
      name: "Joe",
      children: [
          { name: "Tom" },
          {
              name: "Tammy",
              children: [
                  { name: "Lynn" },
                  { name: "Vera" }
              ]

          },
      ]
  },
  {
      name: "John"
  },
  {
      name: "Jane"
  },
];

function App() {  

  return (
    <>     

      {
        data.map( (entry) =>  <Entry entry={entry} level={1} /> )
      }
      
    </>
  )
}

export default App;
