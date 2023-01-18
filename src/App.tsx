import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import Post from './components/Posts/Post';
import HomePage from './pages/Home/HomePage';
import EntryPage from './pages/Entry/EntryPage';
import { HH } from './CONSTS';
import './App.less';
import EntriesPage from './pages/Entries/EntriesPage';
import Footer from './components/Footer/Footer';
import Navbar3 from './components/Navbar/Navbar3';

const App = () => {
  return (
    <div className="app-container">
      {/*<NavBar />*/}
      {/*<Navbar1/>*/}
      {/*<Navbar2 />*/}
      {<Navbar3 />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hjem" element={<HomePage />} />

        <Route path="/innbydelse" element={<Page apiAddress={HH.getPageInnbydelsePath} />} />
        <Route path="/pm" element={<Page apiAddress={HH.getPagePmPath} />} />
        <Route path="/resultater" element={<Page apiAddress={HH.getPageResultaterPath} />} />

        <Route path="/pamelding" element={<EntryPage />}></Route>
        <Route path="/pamelding/pameldte" element={<EntriesPage />} />

        <Route path="/post/:id" element={<Post apiAddress={HH.getPostsPath} />} />

        <Route path="/snusk" element={<Page apiAddress={HH.getPageMerOmSnuskPath} />} />
        <Route path="/gamp" element={<Page apiAddress={HH.getPageMerOmGampPath} />} />
        <Route path="/ungdom" element={<Page apiAddress={HH.getPageParlopPath} />} />
        <Route path="/veteran" element={<Page apiAddress={HH.getPageVeteranPath} />} />
        <Route
          path="/gjertsenfaktor"
          element={<Page apiAddress={HH.getPageGjertsenFaktorPath} />}
        />

        <Route path="/huskeliste" element={<Page apiAddress={HH.getPageDetteMaDuHuskePaPath} />} />
        <Route path="/tips" element={<Page apiAddress={HH.getPageTipsOgTriksPath} />} />
        <Route path="/faq" element={<Page apiAddress={HH.getPageSporsmalOgSvarPath} />} />

        <Route
          path="/tidligere-resultater"
          element={<Page apiAddress={HH.getPageTidligereResultaterPath} />}
        />
        <Route path="/statistikk" element={<Page apiAddress={HH.getPageStatistikkPath} />} />
        <Route path="/opprinnelse" element={<Page apiAddress={HH.getPageTidenesForstePath} />} />
        <Route
          path="/blodsvettetarer"
          element={<Page apiAddress={HH.getPageBlodSvetteTarerPath} />}
        />
        <Route path="/svommefotter" element={<Page apiAddress={HH.getPageSvommeFotterPath} />} />
        <Route path="/bynight" element={<Page apiAddress={HH.getPageByNight2010Path} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
