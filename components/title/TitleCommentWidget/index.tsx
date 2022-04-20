import {
  Card,
  Typography,
  Comment,
  Tooltip,
  Avatar,
  Form,
  Button,
  Input,
} from "antd";

import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import moment from "moment";
import FIcon from "../../ui/icon";
import s from "./style.module.less";

import { Comment as IComment } from "../../../types/Comment";

const TitleCommentWidget: React.FC<{
  comments: IComment[];
}> = ({ comments }) => {
  return (
    <Card bordered={false}>
      <Typography.Title level={4}>{comments.length} Comments</Typography.Title>
      {comments.map((cmt, index) => (
        <Comment
          key={index}
          actions={[
            <Tooltip key="comment-basic-like" title="Like">
              <span>
                <LikeOutlined />
                <span className={s.commentAction}>{cmt.reactions.likes}</span>
              </span>
            </Tooltip>,
            <Tooltip key="comment-basic-replies" title="Replies">
              <span>
                <MessageOutlined />
                <span className={s.commentAction}>{cmt.reactions.replies}</span>
              </span>
            </Tooltip>,
            <span key="comment-basic-reply-to">Reply to</span>,
          ]}
          author={<a>{cmt.user.name}</a>}
          avatar={<Avatar src={cmt.user.avatar} alt={cmt.user.name} />}
          content={<p>{cmt.message}</p>}
          datetime={
            <Tooltip
              title={moment(cmt.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment(cmt.createdAt).fromNow()}</span>
            </Tooltip>
          }
        />
      ))}
      <Comment
        avatar={<Avatar src="/images/avatar-1.png" />}
        content={
          <>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                icon={<FIcon.PaperPlane />}
              >
                Add Comment
              </Button>
            </Form.Item>
          </>
        }
      ></Comment>
    </Card>
  );
};

export default TitleCommentWidget;
