import { Button, Card, Col, List, Row, Space, Typography } from "antd";
import Image from "next/image";
import { useMemo } from "react";

import { Chapter } from "../../../types/Chapter";
import { Title } from "../../../types/Title";
import ChapterCardHorizontal from "../../chapter/ChapterCardHorizontal";
import FIcon from "../../ui/icon";
import s from "./style.module.less";

const TitleChapterWidget: React.FC<{ title: Title; chapters: Chapter[] }> = ({
  title,
  chapters,
}) => {
  const lastReads = useMemo(() => {
    return [chapters[0]];
  }, [chapters]);

  return (
    <Card bordered={false} className={s.card}>
      <List
        bordered={false}
        header={
          <div className={s.header}>
            <Typography.Title level={4}>Last read</Typography.Title>
          </div>
        }
        itemLayout="vertical"
        size="large"
        dataSource={lastReads}
        renderItem={(item) => (
          <List.Item key={item.name} className={s.item}>
            <ChapterCardHorizontal chapter={item} />
          </List.Item>
        )}
      />
      <List
        bordered={false}
        header={
          <Row justify="space-between" align="middle" className={s.header}>
            <Col flex={1}>
              <Typography.Title level={4}>
                {title.totalChapter} Chapters
              </Typography.Title>
              <Typography.Text type="secondary">
                New chapter every Thursday
              </Typography.Text>
            </Col>
            <Col flex={0}>
              <Space>
                <Button icon={<FIcon.Bell />} />
                <Button icon={<FIcon.SortAscending />} />
              </Space>
            </Col>
          </Row>
        }
        itemLayout="vertical"
        size="large"
        dataSource={chapters}
        renderItem={(item) => (
          <List.Item key={item.name} className={s.item}>
            <ChapterCardHorizontal chapter={item} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TitleChapterWidget;
