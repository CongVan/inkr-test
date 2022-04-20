import { Col, Row, Space, Typography } from "antd";
import { Chapter } from "../../../types/Chapter";
import Image from "next/image";
import FIcon from "../../ui/icon";
import s from "./style.module.less";
import clsx from "clsx";

const ChapterCardHorizontal: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  return (
    <Row align="middle" justify="space-between">
      <Col flex={1}>
        <Space direction="horizontal">
          <div className={clsx(s.thumb, chapter.priceCoin > 0 && s.lock)}>
            <Image alt="logo" layout="fill" src={chapter.thumbnail} />
            {chapter.priceCoin > 0 && (
              <div className={s.lockIcon}>
                <FIcon.Lock />
              </div>
            )}
          </div>
          <div>
            <Typography.Text>{chapter.name}</Typography.Text>{" "}
          </div>
        </Space>
      </Col>
      <Col flex={0}>
        {chapter.priceCoin === 0 ? (
          <Typography.Text type="secondary">FREE</Typography.Text>
        ) : (
          <Space align="center">
            <FIcon.Coin />
            <div>{chapter.priceCoin}</div>
          </Space>
        )}
      </Col>
    </Row>
  );
};

export default ChapterCardHorizontal;
