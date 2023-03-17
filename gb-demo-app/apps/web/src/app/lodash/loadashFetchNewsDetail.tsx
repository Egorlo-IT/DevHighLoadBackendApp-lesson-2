import memoize from 'lodash.memoize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadashFetchNewsDetail = (id: string | undefined): Promise<any> =>
  new Promise((resolve) => {
    fetch(`http://localhost:3001/api/news/${id}/detail`)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });

export default memoize(loadashFetchNewsDetail);
