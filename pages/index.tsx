import { Layout } from "../components/layout"
import { AppColors } from "../types"
import { Text } from "../components/Text"
import { Stack } from "../components/Stack"
import { ThemedImage } from "../components/themed-image"

const Home = () => {
  return (
    <Layout
      title={"Software development from anywhere"}
      subtitle={"Currently in Providence"}
      sidebarChildren={
        <Stack>
          <Text>
            Hi there, I'm Zack! I'm a full-stack developer currently working on
            projects using TypeScript, Node.js, GraphQL, and Postgres. I got my
            start in web development writing HTML/CSS on Neopets and MySpace.
          </Text>
          <Text>
            I firmly belive in remote work and love to travel while writing
            software solo; building and managing small teams; and contributing
            to open-source projects.
          </Text>
          <nav className="nav">
            <hr />
            <a href="https://github.com/zackkrida">View my work on GitHub</a>
            <hr />
            <style jsx>{`
              .nav {
                margin-top: 2rem;
              }

              .nav hr {
                background-color: var(--color-borders);
              }

              .nav a {
                font-weight: bold;
                display: block;
                padding: 0.6rem;
                letter-spacing: 0.3px;
                padding-left: 0;
              }

              .nav a {
              }
            `}</style>
          </nav>
        </Stack>
      }
      accent={AppColors.Accent}
    >
      <img
        style={{
          display: "block",
          boxShadow:
            "0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025)",
        }}
        src="me.jpg"
        alt="zack krida"
      />
    </Layout>
  )
}

export default Home
