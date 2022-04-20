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

import { UserOutlined } from "@ant-design/icons";

import s from "./style.module.less";
import { Title } from "../../../types/Title";

const TitleAboutWidget: React.FC<{ title: Title }> = ({ title }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Card
      bordered={false}
      actions={
        !isExpand && [
          <Typography.Text
            key={"More"}
            className={s.btnMore}
            onClick={() => setIsExpand(!isExpand)}
          >
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
          {title.genres.map((g) => (
            <Tag key={g.name}> {g.name}</Tag>
          ))}
        </div>
      </div>
      <div className={s.block}>
        <Typography.Title level={5}>Summary</Typography.Title>
        <Typography.Paragraph ellipsis={isExpand ? false : { rows: 4 }}>
          <p>{title.description}</p>
        </Typography.Paragraph>
        {isExpand && (
          <Space direction="vertical" className={s.expandInfo} size="middle">
            <div className={s.imageGrid}>
              {title.images.map((img, idx) => (
                <Image key={idx} src={img} alt="image" />
              ))}
            </div>
            <div>
              <Typography.Title level={5}>Credits</Typography.Title>
              <List
                itemLayout="horizontal"
                dataSource={title.credits}
                renderItem={(item) => (
                  <List.Item style={{ border: "none" }}>
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
                colon={false}
              >
                <Descriptions.Item label="Last Updated">
                  {title.updatedAt}
                </Descriptions.Item>
                <Descriptions.Item label="Age Rating">
                  {title.ageRating}
                </Descriptions.Item>
                <Descriptions.Item label="Color">
                  {title.color}
                </Descriptions.Item>
                <Descriptions.Item label="Origin Media">
                  {title.originMedia}
                </Descriptions.Item>
                <Descriptions.Item label="Style Origin">
                  {title.styleOrigin}
                </Descriptions.Item>
                <Descriptions.Item label="Copyright">
                  {title.copyright}
                </Descriptions.Item>
                <Descriptions.Item label="Other Name">
                  {title.otherName}
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
