import memoize from 'lodash.memoize';

const loadashFetchNewsAll = (): Promise<any> =>
  new Promise((resolve) => {
    fetch(`http://localhost:3001/api/news`)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });

export default memoize(loadashFetchNewsAll);
