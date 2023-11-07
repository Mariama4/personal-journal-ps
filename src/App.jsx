import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
	return (
		<>
			<CardButton>
				<JournalItem></JournalItem>
			</CardButton>
		</>
	);
}

export default App;
