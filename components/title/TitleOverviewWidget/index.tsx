import { Button, Card, Row, Space, Tag, Typography } from "antd";
import Image from "next/image";
import numeral from "numeral";
import FIcon from "../../ui/icon";

import s from "./style.module.less";
import { Title } from "../../../types/Title";

const TitleOverviewWidget: React.FC<{ title: Title }> = ({ title }) => {
  return (
    <Card bordered={false} className={s.card}>
      <div className={s.wrapper}>
        <div className={s.thumb}>
          <Image
            src={title.thumbnail}
            layout="fill"
            objectFit="cover"
            alt={title.name}
          />
        </div>
        <div className={s.content}>
          <div>
            <div className={s.header}>
              <Typography.Title className={s.name} level={2}>
                {title.name}
              </Typography.Title>
              <div className={s.options}>
                <Space direction="horizontal">
                  <Button icon={<FIcon.ShareAlt />} />
                  <Button icon={<FIcon.More />} />
                </Space>
              </div>
            </div>

            <Typography.Text className={s.author}>
              {title.author}
            </Typography.Text>
            <div className={s.categoryWrapper}>
              <Typography.Text>
                {title.category.name}
                <span className={s.dot}>•</span>
                {`${title.totalChapter} Chapters`}
              </Typography.Text>
            </div>
            <div className={s.counting}>
              <div className={s.item}>
                <FIcon.Read />
                <Typography.Text>
                  {numeral(title.reads).format("0,0")}
                </Typography.Text>
              </div>
              <div className={s.item}>
                <FIcon.Like />
                <Typography.Text>
                  {numeral(title.likes).format("0,0")}
                </Typography.Text>
              </div>
            </div>
            <div className={s.tags}>
              {title.tags.map((t) => (
                <Tag className={s.item} key={t.name}>
                  <Typography.Text>{t.name}</Typography.Text>
                </Tag>
              ))}
            </div>
          </div>
          <div className={s.actions}>
            <Button type="primary">Read First Chapter for FREE</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TitleOverviewWidget;
