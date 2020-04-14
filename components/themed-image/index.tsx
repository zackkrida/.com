import { useEffect, useState } from "react"

export const ThemedImage = (props: React.ImgHTMLAttributes<{}>) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const dark = darkModeQuery.matches
    setDarkMode(dark)

    // Chrome & Firefox
    let listener = darkModeQuery.addEventListener("change", e => {
      setDarkMode(e.matches)
    })

    return () => {
      darkModeQuery.removeListener(listener as any)
    }
  }, [])

  const themedSrc =
    props.src &&
    `${props.src.split(".")[0]}-${darkMode ? "dark" : "light"}.${
      props.src.split(".")[1]
    }`

  console.log(themedSrc)

  return <img {...props} src={themedSrc} />
}
