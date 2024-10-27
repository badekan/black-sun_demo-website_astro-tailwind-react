interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  const { className, children } = props;

  return (
    <div className={[
      "px-6 sm:px-12",
      className
    ].join(' ')}>
      {children}
    </div>
  );
}


export default Wrapper;