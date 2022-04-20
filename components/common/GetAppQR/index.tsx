import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";

const GetAppQR = () => {
  return (
    <Card bordered={false}>
      <Row align="middle" wrap={false} gutter={16}>
        <Col flex={1}>
          <Typography.Title level={5}>Get The App</Typography.Title>
          <Typography.Text type="secondary">
            Love this title? Scan the QR code to continue reading right on your
            mobile devices.
          </Typography.Text>
        </Col>
        <Col flex={"0 0 100px"}>
          <div>
            <Image src="/images/qr.png" width={100} height={100} alt="" />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default GetAppQR;
