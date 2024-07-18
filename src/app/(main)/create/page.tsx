"use client";

import React from "react";
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";

const { Item } = Form;
const { Title } = Typography;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);

const CreatePage = () => {
  return (
    <Flex vertical align="center">
      <Title level={2}>家計簿入力</Title>
      <Form layout="vertical">
        <Item label="項目名">
          <Input size="large" />
        </Item>{" "}
        <Item label="金額">
          <InputNumber
            size="large"
            addonBefore={selectBefore}
            addonAfter="円"
          />
        </Item>
        <Item label="日付">
          <DatePicker size="large" />
        </Item>
        <Item>
          <Button size="large" block type="primary" htmlType="submit">
            保存
          </Button>
        </Item>
      </Form>
    </Flex>
  );
};

export default CreatePage;
