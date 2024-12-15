export function Card({ children, className }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return (
    <div className={`mb-4 ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`${className || ''}`}>
      {children}
    </div>
  );
}
