import axios from 'axios';
import selectedRowKeysType from '@const/selectedRowKeysType';
import { BASE_URL } from '@const/apiUrl';

const getBeerList = async (page = 1) => {
  return await axios
    .get(`${BASE_URL}/beers?page=${page}&per_page=10`)
    .then((res) => {
      res.data.map((item: selectedRowKeysType) => {
        item['key'] = item.id;
      });

      return res.data;
    });
};

const getSearchAbvList = async (from: number, to: number) => {
  return await axios
    .get(`${BASE_URL}/beers?abv_gt=${from}&abv_lt=${to}&per_page=80`)
    .then((res) => {
      res.data.map((item: selectedRowKeysType) => {
        item['key'] = item.id;
      });
      return res.data;
    });
};

export { getBeerList, getSearchAbvList };
