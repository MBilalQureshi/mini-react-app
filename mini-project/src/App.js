import css from './App.module.css';
import Content from './components/Content';
import ContentWithHooks from './components/ContentWithHooks';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />

      {/* <NavBarSimple /> */}
      <NavBarForm />
      
      {/* Content as statefull class component */}
      {/* <Content /> */}

      {/* Content as Functional Component with hooks */}
      <ContentWithHooks />
    </div>
  );
}

export default App;