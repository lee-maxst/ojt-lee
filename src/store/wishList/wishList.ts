import create from 'zustand';
import wishListType from '@store/wishList/wishListType';
import selectedRowKeysType from '@const/selectedRowKeysType';

const useWishListStore = create<wishListType>((set, get) => ({
  wishListProductNos: {},

  addWishListProduct: (productNo: string, info: selectedRowKeysType) => {
    set((state) => ({
      wishListProductNos: { ...state.wishListProductNos, [productNo]: info },
    }));
  },

  removeWishListProduct: (productNo) => {
    const newState = get().wishListProductNos;
    // TODO 타입에러 해결하기
    delete newState[productNo as keyof Object];
    set((state) => ({
      wishListProductNos: newState,
    }));
  },
}));
export { useWishListStore };
