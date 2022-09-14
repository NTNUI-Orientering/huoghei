import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import usePageService from '../../services/PageService';
import Loader from '../../utils/Loader';
import './Post.less';
interface Post {
  apiAddress: string;
}

const Post: FC<Post> = ({ apiAddress }) => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const service = usePageService(apiAddress + '/' + id);

  return (
    <>
      <div className="post-container">
        {service.status === 'loading' && <Loader marginTop="sm" />}
        {service.status === 'error' && <div> Error fetching! </div>}
        {service.status === 'fetched' &&
          (Object.keys(service.payLoad).length ? (
            <div className="post-wrapper">
              <h1 className="post-title">{service.payLoad.title.rendered}</h1>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: service.payLoad.content.rendered
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

export default Post;
