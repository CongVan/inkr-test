import { Card, List, Typography } from "antd";

import { Title, TitleRelated } from "../../../types/Title";
import TitleRelatedCard from "../TitleRelatedCard";
import s from "./style.module.less";

const TitleRelatedWidget: React.FC<{ relatedTitles: TitleRelated[] }> = ({
  relatedTitles,
}) => {
  return (
    <Card bordered={false} className={s.card}>
      <Typography.Title className={s.header} level={4}>
        Related Titles
      </Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={relatedTitles}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <TitleRelatedCard title={item} />
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default TitleRelatedWidget;
