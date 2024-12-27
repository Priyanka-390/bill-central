const Icons = ({ icon }) => {
  const ICONS_LIST = {
    navIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19L19 6M19 6V18.48M19 6H6.52"
          stroke="#00171F"
          className="group-hover:stroke-white duration-300"
          stroke-width="1.93338"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    heroInputIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19L19 6M19 6V18.48M19 6H6.52"
          className="group-hover:stroke-white duration-300"
          stroke="white"
          stroke-width="1.93338"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };

  return icon && ICONS_LIST[icon];
};

export default Icons;
