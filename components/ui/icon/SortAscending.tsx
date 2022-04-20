import Icon from "@ant-design/icons";

const SortAscendingSvg = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8498 6.60466L12.232 1.54573C12.2214 1.51188 12.2003 1.48232 12.1717 1.46141C12.1431 1.4405 12.1085 1.42937 12.073 1.42966H10.6909C10.6177 1.42966 10.5552 1.47609 10.532 1.54573L8.9016 6.60466C8.89624 6.62073 8.89267 6.63859 8.89267 6.65645C8.89267 6.74752 8.96767 6.82252 9.05874 6.82252H10.0659C10.1409 6.82252 10.2052 6.77252 10.2266 6.70109L10.5391 5.60109H12.1284L12.4373 6.69931C12.457 6.77073 12.523 6.82073 12.598 6.82073H13.6909C13.7087 6.82073 13.7248 6.81895 13.7409 6.81359C13.7837 6.79931 13.8177 6.77073 13.8391 6.73145C13.8587 6.69216 13.8623 6.64752 13.8498 6.60466ZM10.7016 4.67073L11.2873 2.58323H11.3998L11.973 4.67073H10.7016ZM13.2641 13.4725H10.9498V13.4654L13.3177 10.0922C13.3373 10.0636 13.348 10.0314 13.348 9.99574V9.34573C13.348 9.25466 13.273 9.17966 13.182 9.17966H9.5391C9.44803 9.17966 9.37303 9.25466 9.37303 9.34573V10.1136C9.37303 10.2047 9.44803 10.2797 9.5391 10.2797H11.7284V10.2868L9.3516 13.66C9.33176 13.6883 9.32116 13.7219 9.32124 13.7564V14.4065C9.32124 14.4975 9.39624 14.5725 9.48732 14.5725H13.2623C13.3534 14.5725 13.4284 14.4975 13.4284 14.4065V13.6386C13.4286 13.6169 13.4245 13.5953 13.4164 13.5752C13.4082 13.555 13.3962 13.5367 13.3809 13.5213C13.3656 13.5058 13.3474 13.4936 13.3274 13.4852C13.3073 13.4768 13.2858 13.4725 13.2641 13.4725ZM6.28553 11.3939H4.92839V1.92966C4.92839 1.85109 4.8641 1.78681 4.78553 1.78681H3.78553C3.70696 1.78681 3.64267 1.85109 3.64267 1.92966V11.3939H2.28553C2.16589 11.3939 2.09803 11.5332 2.17303 11.6261L4.17303 14.16C4.18639 14.1771 4.20347 14.1909 4.22296 14.2004C4.24245 14.2099 4.26385 14.2148 4.28553 14.2148C4.30721 14.2148 4.32861 14.2099 4.3481 14.2004C4.36759 14.1909 4.38467 14.1771 4.39803 14.16L6.39803 11.6261C6.47124 11.5332 6.40517 11.3939 6.28553 11.3939Z"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  );
};

const SortAscending = (props) => {
  return <Icon component={SortAscendingSvg} {...props}></Icon>;
};

export default SortAscending;