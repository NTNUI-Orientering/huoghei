import React, { FC, useEffect, useState } from 'react';
import { HH } from '../../CONSTS';
import PageLayout from '../PageLayout';
import useFetchService from '../../services/FetchService';
import Loader from '../../utils/Loader';
import './EntriesPage.less';
import { Link, useSearchParams } from 'react-router-dom';

interface EntriesPage {
  apiAddress: string;
}

interface Paameldte {
  [key: string]: string;
}

const EntriesPage: FC = () => {
  const [paameldte, setPaameldte] = useState<Array<Paameldte>>();
  const [sortField, setSortField] = useState('registrert');
  const [sortOrder, setSortOrder] = useState('asc');
  const [year, setYear] = useState(new Date().getFullYear());

  const [params, _] = useSearchParams();
  const showAll = params.get('showAll') === 'true';
  const service = useFetchService(HH.getPaameldte + '?year=' + year);

  useEffect(() => {
    if (service.status === 'fetched') {
      setPaameldte(service.payLoad as unknown as Array<Paameldte>);
    }
  }, [service.status]);

  const columns = [
    { label: 'Navn', accessor: 'navn' },
    { label: 'Klubb', accessor: 'klubb' },
    { label: 'Klasse', accessor: 'klasse' },
    { label: 'Antall fullført', accessor: 'antall' },
    { label: 'Snuskeløpet', accessor: 'snusk' }
  ];

  // Columns that must be treated as private information
  const privacyColumns = [
    // { label: 'Mat', accessor: 'mat' },
    { label: 'Buss', accessor: 'buss' },
    { label: 'Forhåndsbetaling', accessor: 'forhandsbetaling' },
    { label: 'registrert', accessor: 'registrert' }
  ];

  const handleSort = () => {
    if (paameldte) {
      const sorted = [...paameldte].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'nb', {
            numeric: true
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setPaameldte(sorted);
    }
  };

  const toggleSortOrder = () => {
    sortOrder === 'desc' ? setSortOrder('asc') : setSortOrder('desc');
  };

  const handleColumnClick = (accessor: string) => {
    sortField !== accessor ? setSortField(accessor) : toggleSortOrder();
  };

  useEffect(() => {
    handleSort();
  }, [sortField, sortOrder]);

  return (
    <PageLayout>
      <div className="paameldte-container">
        <div className="title">
          <h1> Påmeldte deltakere til Hu & Hei {year}</h1>
        </div>
        {service.status === 'loading' && <Loader marginTop="lg" />}
        {service.status === 'fetched' && paameldte && (
          <>
            <div className="info">
              <div>
                Gå til <Link to="/pamelding">påmelding</Link>
              </div>
              <div>Antall påmeldte: {paameldte?.length}</div>
            </div>
            <table className="paameldte-table">
              <caption></caption>
              <thead>
                <tr>
                  {(showAll ? [...columns, ...privacyColumns] : columns).map(
                    ({ label, accessor }) => {
                      const cn =
                        sortField === accessor && sortOrder === 'asc'
                          ? 'up'
                          : sortField === accessor && sortOrder === 'desc'
                          ? 'down'
                          : 'default';

                      return (
                        <th
                          key={accessor}
                          className={cn}
                          onClick={() => handleColumnClick(accessor)}
                        >
                          {label}
                        </th>
                      );
                    }
                  )}
                </tr>
              </thead>
              <tbody>
                {paameldte.map((data: Paameldte, index: number) => {
                  return (
                    <tr key={index}>
                      {(showAll ? [...columns, ...privacyColumns] : columns).map(({ accessor }) => {
                        let tData = data[accessor] ? data[accessor] : '---';
                        if (['snusk', 'mat', 'buss', 'forhandsbetaling'].indexOf(accessor) >= 0) {
                          tData = tData === '1' ? 'Ja' : 'Nei';
                        }
                        if (accessor === 'snusk' && data[accessor] === '2') {
                          tData = 'Kun snusk';
                        }
                        if (accessor === 'registrert') {
                          tData = new Date(tData).toLocaleDateString();
                        }
                        return <td key={accessor}>{tData}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default EntriesPage;
