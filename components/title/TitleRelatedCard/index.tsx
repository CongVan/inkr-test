import { Card, Col, Row, Space, Typography } from "antd";
import Image from "next/image";
import { TitleRelated } from "../../../types/Title";
import FIcon from "../../ui/icon";
import numeral from "numeral";
import s from "./style.module.less";

const TitleRelatedCard: React.FC<{ title: TitleRelated }> = ({ title }) => {
  return (
    <Card bordered={false}>
      <Row wrap={false} gutter={16} align="middle">
        <Col flex={0}>
          <div className={s.thumbnail}>
            <Image
              src={title.thumbnail}
              layout="fill"
              alt=""
              objectFit="cover"
            />
          </div>
        </Col>
        <Col flex={1} style={{}} className={s.body}>
          <Typography.Title level={5}>{title.name}</Typography.Title>
          {title.isPremium && (
            <Typography.Text className={s.premium}>
              <FIcon.Premium /> EXCLUSIVE
            </Typography.Text>
          )}
          <Typography.Text type="secondary">
            {title.category?.name}
          </Typography.Text>
          <Typography.Text type="secondary">
            {numeral(title.reads).format("0.0a")} reads
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default TitleRelatedCard;
