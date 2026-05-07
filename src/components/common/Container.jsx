export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={className} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {children}
    </Tag>
  );
}
