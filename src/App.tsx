import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './components/Page/Page';
import Post from './components/Posts/Post';
import HomePage from './pages/Home/HomePage';
import EntryPage from './pages/Entry/EntryPage';
import { HH } from './CONSTS';
import './App.less';
import EntriesPage from './pages/Entries/EntriesPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path={HH.publicPath + '/'} element={<HomePage />}></Route>
        <Route path={HH.publicPath + '/hjem'} element={<HomePage />} />

        <Route
          path={HH.publicPath + '/innbydelse'}
          element={<Page apiAddress={HH.getPageInnbydelsePath} />}
        />
        <Route path={HH.publicPath + '/pm'} element={<Page apiAddress={HH.getPagePmPath} />} />
        <Route
          path={HH.publicPath + '/resultater'}
          element={<Page apiAddress={HH.getPageResultaterPath} />}
        />

        <Route path={HH.publicPath + '/pamelding'} element={<EntryPage />}></Route>
        <Route path={HH.publicPath + '/pamelding/pameldte'} element={<EntriesPage />} />

        <Route path={HH.publicPath + '/post/:id'} element={<Post apiAddress={HH.getPostsPath} />} />

        <Route
          path={HH.publicPath + '/snusk'}
          element={<Page apiAddress={HH.getPageMerOmSnuskPath} />}
        />
        <Route
          path={HH.publicPath + '/gamp'}
          element={<Page apiAddress={HH.getPageMerOmGampPath} />}
        />
        <Route
          path={HH.publicPath + '/ungdom'}
          element={<Page apiAddress={HH.getPageParlopPath} />}
        />
        <Route
          path={HH.publicPath + '/veteran'}
          element={<Page apiAddress={HH.getPageVeteranPath} />}
        />
        <Route
          path={HH.publicPath + '/gjertsenfaktor'}
          element={<Page apiAddress={HH.getPageGjertsenFaktorPath} />}
        />

        <Route
          path={HH.publicPath + '/huskeliste'}
          element={<Page apiAddress={HH.getPageDetteMaDuHuskePaPath} />}
        />
        <Route
          path={HH.publicPath + '/tips'}
          element={<Page apiAddress={HH.getPageTipsOgTriksPath} />}
        />
        <Route
          path={HH.publicPath + '/faq'}
          element={<Page apiAddress={HH.getPageSporsmalOgSvarPath} />}
        />

        <Route
          path={HH.publicPath + '/tidligere-resultater'}
          element={<Page apiAddress={HH.getPageTidligereResultaterPath} />}
        />
        <Route
          path={HH.publicPath + '/statistikk'}
          element={<Page apiAddress={HH.getPageStatistikkPath} />}
        />
        <Route
          path={HH.publicPath + '/opprinnelse'}
          element={<Page apiAddress={HH.getPageTidenesForstePath} />}
        />
        <Route
          path={HH.publicPath + '/blodsvettetarer'}
          element={<Page apiAddress={HH.getPageBlodSvetteTarerPath} />}
        />
        <Route
          path={HH.publicPath + '/svommefotter'}
          element={<Page apiAddress={HH.getPageSvommeFotterPath} />}
        />
        <Route
          path={HH.publicPath + '/bynight'}
          element={<Page apiAddress={HH.getPageByNight2010Path} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
