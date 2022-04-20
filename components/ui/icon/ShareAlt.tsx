import Icon from "@ant-design/icons";

const ShareAltSvg = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2856 10.7143C11.7766 10.7143 11.307 10.8929 10.9391 11.1911L7.23915 8.51429C7.3011 8.17423 7.3011 7.82577 7.23915 7.48572L10.9391 4.80893C11.307 5.10714 11.7766 5.28572 12.2856 5.28572C13.4677 5.28572 14.4284 4.325 14.4284 3.14286C14.4284 1.96071 13.4677 1 12.2856 1C11.1034 1 10.1427 1.96071 10.1427 3.14286C10.1427 3.35 10.1713 3.54821 10.2266 3.7375L6.71236 6.28214C6.19093 5.59107 5.36236 5.14286 4.42843 5.14286C2.84986 5.14286 1.57129 6.42143 1.57129 8C1.57129 9.57857 2.84986 10.8571 4.42843 10.8571C5.36236 10.8571 6.19093 10.4089 6.71236 9.71786L10.2266 12.2625C10.1713 12.4518 10.1427 12.6518 10.1427 12.8571C10.1427 14.0393 11.1034 15 12.2856 15C13.4677 15 14.4284 14.0393 14.4284 12.8571C14.4284 11.675 13.4677 10.7143 12.2856 10.7143ZM12.2856 2.21429C12.7981 2.21429 13.2141 2.63036 13.2141 3.14286C13.2141 3.65536 12.7981 4.07143 12.2856 4.07143C11.7731 4.07143 11.357 3.65536 11.357 3.14286C11.357 2.63036 11.7731 2.21429 12.2856 2.21429ZM4.42843 9.57143C3.56236 9.57143 2.857 8.86607 2.857 8C2.857 7.13393 3.56236 6.42857 4.42843 6.42857C5.2945 6.42857 5.99986 7.13393 5.99986 8C5.99986 8.86607 5.2945 9.57143 4.42843 9.57143ZM12.2856 13.7857C11.7731 13.7857 11.357 13.3696 11.357 12.8571C11.357 12.3446 11.7731 11.9286 12.2856 11.9286C12.7981 11.9286 13.2141 12.3446 13.2141 12.8571C13.2141 13.3696 12.7981 13.7857 12.2856 13.7857Z"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  );
};

const ShareAlt = (props) => {
  return <Icon component={ShareAltSvg} {...props} />;
};
export default ShareAlt;
