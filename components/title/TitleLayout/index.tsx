import { Col, Layout, Row, Space } from "antd";
import GetAppQR from "../../common/GetAppQR";
import TitleChapterWidget from "../TitleChapterWidget";
import TitleCommentWidget from "../TitleCommentWidget";
import TitleOverviewWidget from "../TitleOverviewWidget";
import TitlePricingPromotionWidget from "../TitlePricingPromotionWidget";
import TitleRelatedWidget from "../TitleRelatedWidget";
import TitleAboutWidget from "../TitleAboutWidget";
import { Title, TitleRelated } from "../../../types/Title";
import { Chapter } from "../../../types/Chapter";
import { Comment } from "../../../types/Comment";

const TitleLayout: React.FC<{
  title: Title;
  chapters: Chapter[];
  relatedTitles: TitleRelated[];
  comments: Comment[];
}> = ({ title, chapters, relatedTitles, comments }) => {
  return (
    <div
      className="container"
      style={{ marginTop: "1rem", paddingBottom: "1rem" }}
    >
      <Row gutter={{ lg: 32, xxl: 24 }}>
        <Col span={24} lg={15} xl={16}>
          <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
            <TitleOverviewWidget title={title} />
            <TitlePricingPromotionWidget title={title} />
            <TitleChapterWidget title={title} chapters={chapters} />
          </Space>
        </Col>
        <Col span={24} lg={9} xl={8}>
          <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
            <TitleAboutWidget title={title} />
            <TitleRelatedWidget relatedTitles={relatedTitles} />
            <TitleCommentWidget comments={comments} />
            <GetAppQR />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default TitleLayout;
