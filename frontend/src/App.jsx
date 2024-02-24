import { Button, Form, Input } from "antd";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/auth/all").then((data) => {
      setData(data.data);
      console.log(data.data);
    });
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    axios.post(
      "http://localhost:8000/api/v1/auth/registrasion",

      {
        text: values.text,
      },
      {
        headers: {
          authorization: "bhchfghFg5gjnggjg",
        },
      }
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Input Your Text"
          name="text"
          rules={[
            {
              required: true,
              message: "Please input fil!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {data.map((item) => (
      <h1>{item.text}</h1>
      ))}
    </>
  );
}

export default App;
