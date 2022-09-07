// Interface that deals with web-requests. One interface for each state.

interface ServiceInit {
  status: 'init';
}

interface ServiceLoading {
  status: 'loading';
}

interface ServiceFetched<T> {
  status: 'fetched';
  payLoad: T;
}

interface ServiceError {
  status: 'error';
  error: Error;
}

export type Service<T> = ServiceInit | ServiceLoading | ServiceFetched<T> | ServiceError;
