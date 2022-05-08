import selectedRowKeysType from '@pages/list/selectedRowKeysType';

type wishListStateType = {
  wishListProductNos: Object;
  addWishListProduct: (productNo: string, info: selectedRowKeysType) => void;
  removeWishListProduct: (productNo: string) => void;
};

export default wishListStateType;
