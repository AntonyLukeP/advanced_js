import VirtualisedList from './components/VirtualisedList';

const items = Array.from({ length: 10000 }).map((_, i) => ({
  id: i,
  name: `Item ${i}`
}));

function App() {

  return (
    <>
      <VirtualisedList items={items} /> 
    </>
  )
}

export default App
