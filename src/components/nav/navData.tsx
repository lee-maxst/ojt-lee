// label 이용 Next Link 생성 (antd 4.20.0 부터 Menu.item 경고 콘솔, 5.0 부터 미지원 예정)
import menuItemLabelToLink from '@components/nav/menuItemLabelToLink';

const navData = [
  {
    key: 'home',
    label: menuItemLabelToLink('/', 'home'),
  },
  {
    key: 'list',
    label: menuItemLabelToLink('/list', 'list'),
  },
  {
    key: 'wishlist',
    label: menuItemLabelToLink('/wishlist', 'wishlist'),
  },
];

export default navData;
