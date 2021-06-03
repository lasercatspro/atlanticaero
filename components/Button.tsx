type Props = {
  className?: string
  color?: "primary" | "secondary"
  children?: React.ReactNode;
}

const Button = ({ className, color, children }: Props) => {
  return (
    <a
      className={`
      block w-full px-5 py-3 text-base font-medium text-center cursor-pointer  border border-transparent rounded-md shadow-md  sm:inline-block sm:w-auto
      ${color === "secondary" && "text-indigo-700 bg-white hover:bg-gray-50"}
      ${color === "primary" || !color && "text-white bg-indigo-600 hover:bg-indigo-700"}
      ${className && className}
      `}
    >
      {children ? children : "lire plus"}
    </a>
  )
}

export default Button
