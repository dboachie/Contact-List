import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact";




export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
      {selectedContactId ? (
      <SelectedContact selectedContactId = {selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId = {setSelectedContactId} />
      )}
    </>
  );
}
