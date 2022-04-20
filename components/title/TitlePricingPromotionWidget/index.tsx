import { Button, Card, Col, Descriptions, Row, Space, Typography } from "antd";

import { TITLE } from "../../../data";
import FIcon from "../../ui/icon";
import s from "./style.module.less";

const TitlePricingPromotionWidget = () => {
  const pricedChapter =
    TITLE.totalPriceCoin / (TITLE.totalChapter - TITLE.freeChapter);
  return (
    <Card bordered={false}>
      <Typography.Title level={4}>Pricing and Promotion</Typography.Title>
      <div className={s.wrapper}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.block}>
                <Typography.Text type="secondary" className={s.label}>
                  FREE
                </Typography.Text>
                <Typography.Title level={5} style={{ margin: "0" }}>
                  {TITLE.freeChapter} Chapters
                </Typography.Title>
              </th>
              <th className={s.block}>
                <Typography.Text type="secondary" className={s.label}>
                  LOOKED
                </Typography.Text>

                <Space direction="horizontal" wrap={true}>
                  <Typography.Title level={5} style={{ margin: "0" }}>
                    7 Chapters
                  </Typography.Title>
                  <Typography.Text
                    type="secondary"
                    style={{ fontWeight: "normal" }}
                  >
                    ( <FIcon.Coin /> {pricedChapter}/ chapters )
                  </Typography.Text>
                </Space>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className={s.priceWrapper}>
                  <div>
                    <Typography.Title level={5}>Total Price</Typography.Title>
                    <Typography.Text type="secondary">
                      Instant access to all chapters • No Ad
                    </Typography.Text>
                  </div>
                  <div>
                    <Button icon={<FIcon.Coin />}>
                      <span>{TITLE.totalPriceCoin}</span>
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={s.priceWrapper}>
                  <div>
                    <Typography.Title level={4} className={s.saveMoneyText}>
                      Save money with INKR Extra <FIcon.Premium />
                    </Typography.Title>
                    <Typography.Text type="secondary">
                      Instant access to all chapters • No Ad • Extra saving
                    </Typography.Text>
                  </div>
                  <div>
                    <div className={s.buttonGroup}>
                      <Button className={s.discount} size={"large"}>
                        -{TITLE.discount}%
                      </Button>
                      <Button
                        icon={<FIcon.Coin />}
                        size={"large"}
                        className={s.coin}
                      >
                        <span className={s.oldPrice}>
                          {TITLE.totalPriceCoin}
                        </span>
                        <span className={s.salePrice}>
                          {Math.round(
                            (TITLE.totalPriceCoin * TITLE.discount) / 100
                          )}
                        </span>
                      </Button>
                    </div>
                    <Typography.Text type="secondary">
                      Saving rates may vary
                    </Typography.Text>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TitlePricingPromotionWidget;
