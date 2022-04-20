import { Button, Card, Row, Space, Tag, Typography } from "antd";
import { TITLE } from "../../../data";
import Image from "next/image";
import numeral from "numeral";
import FIcon from "../../ui/icon";

import s from "./style.module.less";

const TitleOverviewWidget = () => {
  return (
    <Card bordered={false} className={s.card}>
      <div className={s.wrapper}>
        <div className={s.thumb}>
          <Image src={TITLE.thumbnail} layout="fill" alt={TITLE.name} />
        </div>
        <div className={s.content}>
          <div>
            <div className={s.header}>
              <Typography.Title className={s.name} level={2}>
                {TITLE.name}
              </Typography.Title>
              <div className={s.options}>
                <Space direction="horizontal">
                  <Button icon={<FIcon.ShareAlt />} />
                  <Button icon={<FIcon.More />} />
                </Space>
              </div>
            </div>

            <Typography.Text className={s.author}>
              {TITLE.author}
            </Typography.Text>
            <div className={s.categoryWrapper}>
              <Typography.Text>
                {TITLE.category.name}
                <span className={s.dot}>•</span>
                {`${TITLE.totalChapter} Chapters`}
              </Typography.Text>
            </div>
            <div className={s.counting}>
              <div className={s.item}>
                <FIcon.Read />
                <Typography.Text>
                  {numeral(TITLE.reads).format("0,0")}
                </Typography.Text>
              </div>
              <div className={s.item}>
                <FIcon.Like />
                <Typography.Text>
                  {numeral(TITLE.likes).format("0,0")}
                </Typography.Text>
              </div>
            </div>
            <div className={s.tags}>
              {TITLE.tags.map((t) => (
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
