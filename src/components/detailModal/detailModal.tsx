import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  DetailModalStyle,
  SectionStyle,
} from '@components/detailModal/detailModalStyle';
import { DetailModalPropsType, MaltHopsType } from './detailModalType';
import { Typography, Divider } from 'antd';
const { Title, Text } = Typography;

function DetailModal({
  isModalVisible,
  setIsModalVisible,
  modalData,
}: DetailModalPropsType) {
  return (
    <DetailModalStyle
      title={`${modalData?.name} - 상세정보`}
      centered
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
      width={650}
    >
      <SectionStyle>
        <img src={modalData?.image_url} />
      </SectionStyle>
      <SectionStyle>
        <Title>{modalData?.name}</Title>
        <Title level={3}>{modalData?.tagline}</Title>
        <Text>{modalData?.description}</Text>
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Degrees</Title>
        <Text>ABV : {modalData?.abv}</Text>
        <Text>IBU : {modalData?.ibu}</Text>
        <Text>EBC : {modalData?.ebc}</Text>
        <Text>SRM : {modalData?.srm}</Text>
        <Text>PH : {modalData?.srm}</Text>
        <Text>ATTENUATION LEVEL : {modalData?.attenuation_level}</Text>
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Volumes</Title>
        <Text>Volume : {modalData?.volume.value}L</Text>
        <Text>Boil Volume : {modalData?.boil_volume.value}L</Text>
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Method</Title>
        <Text>Twist : {modalData?.method.twist}</Text>
        <Text>
          Fermentation : {modalData?.method.fermentation.temp.value}
        </Text>{' '}
        <Text>Mash temp : {modalData?.method.mash_temp[0].temp.value}</Text>
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Ingredients</Title>
        <Text>Yeast : {modalData?.ingredients.yeast}</Text>
        <Text>Malt : </Text>
        {modalData?.ingredients.malt.map((item: MaltHopsType, idx: number) => (
          <Text key={item.name + idx}> / {item.name}</Text>
        ))}
        <Text>Hops : </Text>
        {modalData?.ingredients.hops.map((item: MaltHopsType, idx: number) => (
          <Text key={item.name + idx}> / {item.name}</Text>
        ))}
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Food Pairing</Title>
        {modalData?.food_pairing.map((item: string, idx: number) => (
          <Text key={idx}> / {item}</Text>
        ))}
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Brewers Tips</Title>
        <Text>{modalData?.brewers_tips}</Text>
      </SectionStyle>
      <Divider />
      <SectionStyle>
        <Title level={3}>Contributed by</Title>
        <Text>{modalData?.contributed_by}</Text>
      </SectionStyle>
    </DetailModalStyle>
  );
}
export default DetailModal;
