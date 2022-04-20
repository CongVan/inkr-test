import { Button, Card, Space, Typography } from "antd";
import { Title } from "../../../types/Title";

import FIcon from "../../ui/icon";
import s from "./style.module.less";

const TitlePricingPromotionWidget: React.FC<{ title: Title }> = ({ title }) => {
  const pricedChapter =
    title.totalPriceCoin / (title.totalChapter - title.freeChapter);
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
                <Typography.Title level={5} className={s.content}>
                  {title.freeChapter} Chapters
                </Typography.Title>
              </th>
              <th className={s.block}>
                <Typography.Text type="secondary" className={s.label}>
                  LOOKED
                </Typography.Text>

                <Space direction="horizontal" wrap={true} className={s.content}>
                  <Typography.Title level={5}>7 Chapters</Typography.Title>
                  <Typography.Text
                    type="secondary"
                    style={{ fontWeight: "normal" }}
                  >
                    (<FIcon.Coin /> {pricedChapter} / chapters)
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
                      <span>{title.totalPriceCoin}</span>
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
                        -{title.discount}%
                      </Button>
                      <Button
                        icon={<FIcon.Coin />}
                        size={"large"}
                        className={s.coin}
                      >
                        <span className={s.oldPrice}>
                          {title.totalPriceCoin}
                        </span>
                        <span className={s.salePrice}>
                          {Math.round(
                            (title.totalPriceCoin * title.discount) / 100
                          )}
                        </span>
                      </Button>
                    </div>
                    <Typography.Text
                      type="secondary"
                      style={{
                        fontSize: 12,
                        display: "block",
                        textAlign: "right",
                      }}
                    >
                      Saving rates may vary
                    </Typography.Text>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={s.footer}>
        <Typography.Text type="secondary">
          Want to read for free? Learn more
        </Typography.Text>
      </div>
    </Card>
  );
};

export default TitlePricingPromotionWidget;
