export const Skeleton = () => {
  const items = Array.apply(null, Array(10));

  return (
    <div className="fullHeight fullWidth">
      {items.map((_, index) => (
        <div key={index} className="skeleton skeleton-row" />
      ))}
    </div>
  );
};
