interface ErrorPros {
  error: string | null;
}

const Error: React.FC<ErrorPros> = (props) => {
  return <p style={{ color: '#f31', margin: '1rem 0' }}>{props?.error}</p>;
};

export default Error;
