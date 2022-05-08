import React, { useState } from 'react';
import { useWishListStore } from '@store/wishList/wishList';
import { ShoppingCartOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import selectedRowKeysType from '@const/selectedRowKeysType';

type WishListIconButtonProps = {
  selectedRowKeys: selectedRowKeysType;
};

const WishListIconButton = ({ selectedRowKeys }: WishListIconButtonProps) => {
  const { wishListProductNos, addWishListProduct, removeWishListProduct } =
    useWishListStore();

  const wishListKeys = Object.keys(wishListProductNos);

  const handleClick = () => {
    const productNo = String(selectedRowKeys.id);

    if (wishListKeys.includes(productNo)) {
      removeWishListProduct(productNo);
      message.error(
        `${selectedRowKeys.name} 상품을 장바구니에서 제외하였습니다. 🥲`,
      );
    } else {
      addWishListProduct(productNo, selectedRowKeys);
      message.success(
        `${selectedRowKeys.name} 상품을 장바구니에 추가하였습니다. 🥳`,
      );
    }
  };

  return (
    <a
      onClick={() => {
        handleClick();
      }}
    >
      {wishListKeys.includes(String(selectedRowKeys.id)) ? (
        <CheckCircleOutlined style={{ color: 'green' }} />
      ) : (
        <ShoppingCartOutlined />
      )}
    </a>
  );
};
export default WishListIconButton;
