import './App.css';
import { BrowserRouter } from 'react-router-dom'
import style from './App.module.scss';
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
import { MainContainer } from './components/MainContainer/MainContainer';
import { FooterContainer } from './components/FooterContainer/FooterContainer';


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={style.App} >
          <header className="header">
            <HeaderContainer />
          </header>
          <main className={style.main} >
            <MainContainer  />
          </main>
          <footer className={style.footer}>
            <FooterContainer />
          </footer>
      </div>
    </BrowserRouter>
  );
}

