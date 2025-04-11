import { Outlet } from 'react-router-dom';
import './App.css';
import "./components/ContactForm/ContactForm"
export default function App() {
  return (
    <>
        <Outlet />
    </>
  );
}