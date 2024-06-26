import css from './App.module.css';
import Content from './components/Content';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />

      {/* <NavBarSimple /> */}
      <NavBarForm />
      
      <Content />
    </div>
  );
}

export default App;