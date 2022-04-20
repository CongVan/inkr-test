import {
  Card,
  Space,
  Tag,
  Typography,
  Image,
  List,
  Avatar,
  Descriptions,
} from "antd";
import clsx from "clsx";
import { useState } from "react";
import { TITLE } from "../../../data";
import { UserOutlined } from "@ant-design/icons";

import s from "./style.module.less";

const TitleAboutWidget = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Card
      bordered={false}
      actions={
        !isExpand && [
          <Typography.Text key={"More"} onClick={() => setIsExpand(!isExpand)}>
            Show more
          </Typography.Text>,
        ]
      }
      className={clsx(s.card, isExpand && s.expanded)}
    >
      <Typography.Title level={4}>About this</Typography.Title>
      <div className={s.block}>
        <Typography.Title level={5}>Genres</Typography.Title>
        <div>
          {TITLE.genres.map((g) => (
            <Tag key={g.name}> {g.name}</Tag>
          ))}
        </div>
      </div>
      <div className={s.block}>
        <Typography.Title level={5}>Summary</Typography.Title>
        <Typography.Paragraph ellipsis={isExpand ? false : { rows: 4 }}>
          {TITLE.description}
        </Typography.Paragraph>
        {isExpand && (
          <Space direction="vertical" className={s.expandInfo} size="middle">
            <div className={s.imageGrid}>
              {TITLE.images.map((img) => (
                <Image key={img} src={img} alt="image" />
              ))}
            </div>
            <div>
              <Typography.Title level={5}>Credits</Typography.Title>
              <List
                itemLayout="horizontal"
                dataSource={TITLE.credits}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.avatar} size={40}>
                          <UserOutlined style={{ color: "#000" }} />
                        </Avatar>
                      }
                      title={<a>{item.name}</a>}
                      description={item.position}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className={s.fact}>
              <Typography.Title level={5}>Others Fact</Typography.Title>
              <Descriptions
                layout="horizontal"
                bordered={false}
                column={1}
                labelStyle={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <Descriptions.Item label="Last Updated">
                  {TITLE.updatedAt}
                </Descriptions.Item>
                <Descriptions.Item label="Age Rating">
                  {TITLE.ageRating}
                </Descriptions.Item>
                <Descriptions.Item label="Color">
                  {TITLE.color}
                </Descriptions.Item>
                <Descriptions.Item label="Origin Media">
                  {TITLE.originMedia}
                </Descriptions.Item>
                <Descriptions.Item label="Style Origin">
                  {TITLE.styleOrigin}
                </Descriptions.Item>
                <Descriptions.Item label="Copyright">
                  {TITLE.copyright}
                </Descriptions.Item>
                <Descriptions.Item label="Other Name">
                  {TITLE.otherName}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Space>
        )}
      </div>
    </Card>
  );
};

export default TitleAboutWidget;
