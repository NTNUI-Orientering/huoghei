import React, { FC } from 'react';
import usePageService from '../../services/PageService';
import Loader from '../../utils/Loader';
import { decodeEntities } from '@wordpress/html-entities';
import './Page.less';

interface PageInterface {
  apiAddress: string;
}

const Page: FC<PageInterface> = ({ apiAddress }) => {
  const service = usePageService(apiAddress);

  return (
    <>
      <div className="page-container">
        {service.status === 'loading' && <Loader />}
        {service.status === 'error' && <div> Noe gikk galt.</div>}
        {service.status === 'fetched' &&
          (Object.keys(service.payLoad).length ? (
            <div className="page-wrapper">
              <h1 className="page-title">{decodeEntities(service.payLoad.title.rendered)}</h1>
              <div
                className="page-content"
                dangerouslySetInnerHTML={{
                  __html: decodeEntities(service.payLoad.content.rendered)
                }}
              />
            </div>
          ) : (
            <div>Error</div>
          ))}
      </div>
    </>
  );
};

export default Page;
