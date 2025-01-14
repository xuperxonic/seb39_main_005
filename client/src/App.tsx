import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { GlobalStyles } from './styles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProgCreate from 'pages/ProgCreate';
import MyPage from 'pages/MyPage';
import NoticeList from 'pages/NoticeList';
import NoticeDetail from 'pages/NoticeDetail';
import NoticeCreate from 'pages/NoticeCreate';
import ProgDetail from 'pages/ProgDetail';

const App: React.FC = () => {
  return (
    <div className="wrap">
      <ThemeProvider
        theme={{
          lightGrey: '#e2e6e8',
          accent: '#38d9a9',
        }}
      >
        <GlobalStyles />
        <BrowserRouter>
          <Header isLoggedIn={true} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/programs/create" element={<ProgCreate />} />
            <Route path="/programs/:programId" element={<ProgDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/notice" element={<NoticeList />} />
            <Route path="/notice/:noticeId" element={<NoticeDetail />} />
            <Route path="/notice/create" element={<NoticeCreate />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
