import css from './App.module.css';
import Content from './components/Content';
import ContentWithHooks from './components/ContentWithHooks';
import HTTPContent from './components/HTTPContent';
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
      {/* <ContentWithHooks /> */}

      {/* Remaining Content Class component for third time, we'll use www.pixabay.com
      and axios to make API calls */}
      <HTTPContent />
    </div>
  );
}

export default App;