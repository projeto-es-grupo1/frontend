// eslint-disable-next-line react/prop-types
const MyComponent = ({ color }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.25 10.015C28.9684 9.69591 28.6222 9.44037 28.2342 9.26537C27.8463 9.09037 27.4256 8.99991 27 9H20V7C20 5.67392 19.4732 4.40215 18.5355 3.46447C17.5979 2.52678 16.3261 2 15 2C14.8142 1.99987 14.6321 2.05149 14.474 2.14908C14.3159 2.24667 14.1881 2.38636 14.105 2.5525L9.3825 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V25C2 25.5304 2.21071 26.0391 2.58579 26.4142C2.96086 26.7893 3.46957 27 4 27H25.5C26.2309 27.0003 26.9367 26.7337 27.485 26.2503C28.0332 25.767 28.3861 25.1001 28.4775 24.375L29.9775 12.375C30.0307 11.9525 29.9933 11.5236 29.8679 11.1167C29.7424 10.7098 29.5318 10.3342 29.25 10.015ZM4 14H9V25H4V14Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default MyComponent;