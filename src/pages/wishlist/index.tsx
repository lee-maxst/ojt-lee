import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useWishListStore } from '@store/wishList/wishList';
import div from 'next/link';
import Table from '@components/table';
import DetailModal from '@components/detailModal';
import SelectedRowKeysType from '@const/selectedRowKeysType';
import WishListIconButton from '@components/wishListIconButton';

const WishList: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<SelectedRowKeysType>();
  const { wishListProductNos, addWishListProduct, removeWishListProduct } =
    useWishListStore();

  const data = Object.values(wishListProductNos);

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
      <Table columns={columnsData} dataSource={data} total={data.length} />
      <DetailModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalData={modalData}
      />
    </div>
  );
};

export default WishList;
