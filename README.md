# MAXST FE OJT (Lee / 22.04.27)

## 개요
- open api를 이용하여 맥주 정보 web service를 만들어 봅시다.

## 필수 구현 사항
### 1. /home
   - 사용자가 처음 page를 열었을 때 `/home` 으로 진입
   - `/home` 에서 `/beerlist`, `wishlist` 이동
### 2. /list
   - 맥주 정보 list table 생성 ~~(material-table Custom Column Rendering 이용)~~
     - ~~table column header가 drag로 변경 가능~~ (react 18 미지원)
   - 맥주 이름을 선택하면 맥주의 상세 정보 modal 나오게 구현
   - 맥주 도수로 filter 기능 구현

## 선택 구현 사항
### 1. /wishlist
   - `/list` page에서 장바구니 Page에 상품 추가
   - `/wishlist` page에서 장바구니에 추가된 상품 삭제
   - 장바구니 page는 `/home`, `/beerlist`에서 접근 가능

## 참고 사항
- 해당 과제는 [beer-market](https://github.com/DevWhkang/beer-market) 과제를 참고하여 생성되었습니다.
- 맥주 정보 open api는 [PUNK API](https://punkapi.com/documentation/v2)를 참고하여 작업합니다.
- git flow

### 개발 환경 / 기술 스택
- Node.js (v16.14.2)
- React (v18.1.0)
- Next.js (v12.1.5)
- TypeScript (v4.6.3)
- styled-components (v5.3.5)