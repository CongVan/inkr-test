import { Col, Layout, Row, Space } from "antd";
import GetAppQR from "../../common/GetAppQR";
import TitleChapterWidget from "../TitleChapterWidget";
import TitleCommentWidget from "../TitleCommentWidget";
import TitleOverviewWidget from "../TitleOverviewWidget";
import TitlePricingPromotionWidget from "../TitlePricingPromotionWidget";
import TitleRelatedWidget from "../TitleRelatedWidget";
import TitleAboutWidget from "../TitleAboutWidget";

const TitleLayout = () => {
  return (
    <div className="container" style={{ margin: "1rem auto" }}>
      <Row gutter={{ lg: 32, xxl: 24 }}>
        <Col span={24} lg={15} xl={16}>
          <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
            <TitleOverviewWidget />
            <TitlePricingPromotionWidget />
            <TitleChapterWidget />
          </Space>
        </Col>
        <Col span={24} lg={9} xl={8}>
          <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
            <TitleAboutWidget />
            <TitleRelatedWidget />
            <TitleCommentWidget />
            <GetAppQR />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default TitleLayout;
