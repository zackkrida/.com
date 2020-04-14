import * as React from "react"
export const Stack = ({ children }) => (
  <div>
    {React.Children.map(children, child => (
      <div className="stack-item">{child}</div>
    ))}
    <style jsx>{`
      .stack-item {
        padding: 1rem 0;
      }
    `}</style>
  </div>
)
