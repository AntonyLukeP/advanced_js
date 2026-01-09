import VirtualisedList from './components/VirtualisedList';

const items = Array.from({ length: 10000 }).map((_, i) => ({
  id: i+1,
  name: `Item ${i+1}`
}));

function App() {

  return (
    <>
      <VirtualisedList items={items} /> 
    </>
  )
}

export default App
