import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import SRecord from './Components/studentrecord/SRecord';
import Systemlog from './Components/Systemlogs/Systemlog';
import AddStudent from './Components/studentrecord/AddStudent';
import UpdateStudent from './Components/studentrecord/UpdateStudent';
import DeleteStudent from './Components/studentrecord/DeleteStudent';

function App() {
	
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/SRecords" element={<SRecord />}></Route>
					<Route path="/Systemlog" element={<Systemlog />}></Route>
					<Route path="/AddStudent" element={<AddStudent />}></Route>
					<Route path="/UpdateStudent" element={<UpdateStudent />}></Route>
					<Route path="/DeleteStudent" element={<DeleteStudent />}></Route>
					
				</Routes>
			</BrowserRouter>

		</div>

	);
}

export default App;