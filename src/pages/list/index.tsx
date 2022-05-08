import React, { useState } from 'react';
import type { NextPage } from 'next';
import Table from '@components/table/table';
import { useQuery } from 'react-query';
import { getBeerList, getSearchAbvList } from '@pages/api/list/list';
import DetailModal from '@components/detailModal';
import SelectedRowKeysType from '@pages/list/selectedRowKeysType';
import WishListIconButton from '@components/wishListIconButton';
import Range from '@components/range/range';

const List: NextPage = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<SelectedRowKeysType>();
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const beerListTotalCount = 330;
  const { isLoading, status, data, error } = useQuery(
    ['getBeerList', page],
    () => getBeerList(page),
    { staleTime: 50000, enabled: true },
  );

  const handlePagination = (page: number) => {
    setPage(page);
  };

  const columnsData = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, selectedRowKeys: SelectedRowKeysType) => (
        <>
          <div
            onClick={() => {
              setIsModalVisible(true);
              showModal(selectedRowKeys);
            }}
          >
            <a>{text}</a>
          </div>
        </>
      ),
    },
    {
      title: 'abv',
      dataIndex: 'abv',
      key: 'abv',
    },
    {
      title: 'tagline',
      dataIndex: 'tagline',
      key: 'tagline',
    },
    {
      title: 'wishlist',
      dataIndex: '',
      key: 'wishlist',
      render: (selectedRowKeys: SelectedRowKeysType) => (
        <WishListIconButton selectedRowKeys={selectedRowKeys} />
      ),
    },
  ];

  const showModal = (selectedRowKeys: SelectedRowKeysType) => {
    setModalData(selectedRowKeys);
    setIsModalVisible(true);
  };

  return (
    <div>
      <Range setIsSearch={setIsSearch} setSearchData={setSearchData} />
      <Table
        columns={columnsData}
        dataSource={!isSearch ? data : searchData}
        total={!isSearch ? beerListTotalCount : searchData.length}
        handlePagination={handlePagination}
        loading={isLoading}
      />
      <DetailModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalData={modalData}
      />
    </div>
  );
};

export default List;
