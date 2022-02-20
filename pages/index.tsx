import type { NextPage } from "next";
import {
  Project,
  Container,
  Experience,
  GradientImage,
  Title,
  Button,
  SocialIcon,
  Post,
} from "@components";
import styles from "@styles/pages/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import aboutMeImage from "@assets/img/placeholders/about-me.jpg";
import ovalDegrade from "@assets/img/placeholders/oval_degrade.png";
import ovalDegradeBottom from "@assets/img/placeholders/oval_degrade_bottom.png";
import { experiences } from "utils/constants/experiences.constants";
import { projects } from "utils/constants/projects.constants";
import { useRouter } from "next/router";
import { getAllPosts } from "@api*";
import { PostMeta } from "@interface/Post";

type HomeProps = { posts: PostMeta[] };

const Home: NextPage<HomeProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mario Gueyraud | Frontend Developer</title>
        <meta
          property="description"
          content="Mario Gueyraud is a software engineer who specializes in building deligthful user experiences with high-quality code"
        />
        <meta
          name="image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta
          property="og:title"
          content="Mario Gueyraud | Frontend Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Mario Gueyraud is a software engineer who specializes in building deligthful user experiences with high-quality code"
        />
        <meta
          name="og:image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
        <meta name="twitter:site" content="@mariogyd" />
        <meta name="twitter:creator" content="@mariogyd" />
      </Head>

      {/* Intro section */}

      <section
        className={styles.section_header}
        aria-label="Introduction Section"
      >
        <Container size="md">
          <p
            style={{
              fontWeight: 500,
              color: "var(--color-bright-turquoise)",
              marginBottom: 10,
            }}
          >
            Hi my name is,
          </p>
          <h1 className={styles.bigTitle}>Mario Gueyraud</h1>
          <h1 className={styles.bigTitle}>
            I&#39;m a <span className={styles.gradientText}>Frontend</span>{" "}
            Engineer.
          </h1>
          <p className={styles.description}>
            I&#39;m a software engineer based on Paraguay. I love everything
            related to frontend such as css, javascript, a11y and also
            performance. I am focused on building deligthful user experiences
            with high-quality code.
          </p>
        </Container>
      </section>

      {/* About me section */}

      <section
        className={styles.section_about_me}
        id="about-me"
        aria-label="About me"
      >
        <Container size="lg">
          <div className="u-hide-sm">
            <Title>About me</Title>
          </div>
          <div className={styles.section_about_container}>
            <div className={styles.section_about_description}>
              <div className="u-hide-md_lg">
                <Title>About me</Title>
              </div>
              <p>
                Hello! My name is Mario and I enjoy creating things with code. I
                started coding at 13, my interest started because I wanted to
                know how mobile applications were built.
                <br />
                <br /> Until today I&#39;ve had the privilege to work at such
                amazing companies and products.
                <br />
                <br /> I&#39;ve worked with different products such as &nbsp;
                <b>
                  <a
                    href="https://www.5dias.com.py/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Newsletters
                  </a>
                  ,{" "}
                  <a
                    href="https://www.consolidada.com.py/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Insurance Companies
                  </a>
                  ,{" "}
                  <a
                    href="https://www.visionbanco.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Banks
                  </a>
                </b>{" "}
                and also CMS web pages. Coding with SASS, CSS, Javascript, HTML.
                <br />
                <br /> Nowadays, my main languages are typescript, javascript,
                css and html, looking forward to expand my knowledge in the
                backend, mobile and blockchain development.
              </p>
            </div>
            <div>
              <GradientImage src={aboutMeImage} alt="About Me Image" />
            </div>
          </div>
          <SocialIcon type="twitter" href="https://twitter.com/mariogyd" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon
            type="linkedin"
            href="https://www.linkedin.com/in/mariogyd/"
          />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon type="github" href="https://github.com/mgueyraud" />
        </Container>
      </section>

      {/* Experience section */}

      <section
        className={styles.section_works}
        id="experience"
        aria-labelledby="experience-title"
      >
        <Container size="sm">
          <Title id="experience-title">Where I&#39;ve Worked</Title>
          <div className={styles.section_works__experience}>
            {experiences.map((work) => {
              return <Experience key={work.company + work.start} {...work} />;
            })}
          </div>
        </Container>
      </section>

      {/* Projects section */}

      <section
        className={styles.section_projects}
        id="work"
        aria-labelledby="work-title"
      >
        <Container size="sm">
          <Title id="work-title">Some things I&#39;ve built</Title>
        </Container>
        <Container size="lg">
          <div className={styles.section__projects_container}>
            {projects.map((project, index) => (
              <div className={styles.project} key={index + project.title}>
                <Project is={index % 2 === 0 ? "even" : "odd"} {...project} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Posts section */}

      <section
        id="articles"
        aria-labelledby="articles-title"
        className={styles.section_articles}
      >
        <Container size="lg">
          <div className={styles.section_articles_title}>
            <Title id="work-title">Check out some articles I wrote</Title>
          </div>
          <div className={styles.section_articles_container}>
            <div>
              {posts.map((post, index) => {
                if ((index + 1) % 2 !== 0) {
                  return (
                    <Post
                      title={post.title}
                      date={new Date(post.date).toLocaleDateString()}
                      description={post.excerpt}
                      slug={post.slug}
                    />
                  );
                }
              })}
            </div>
            <div>
              {posts.map((post, index) => {
                if ((index + 1) % 2 == 0) {
                  return (
                    <Post
                      title={post.title}
                      date={new Date(post.date).toLocaleDateString()}
                      description={post.excerpt}
                      slug={post.slug}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className={styles.section_articles_show_more}>
            <Button onClick={() => router.push("/blog")}>Show more</Button>
          </div>
        </Container>
      </section>

      {/* Contact section */}

      <section
        className={styles.section_contact}
        id="contact"
        aria-labelledby="contact-title"
      >
        <Container size="lg">
          <h1 id="contact-title">Get In Touch</h1>
          <p>
            I&#39;m always open to new opportunities. If you have any question
            or doubt, feel free to drop an email, I&#39;ll get back to you soon!
          </p>
          <Button href="mailto:hi@mariogyd.com">Say Hello</Button>
        </Container>
        <div className="u-hide-sm">
          <div className={styles.section_contact_bg_img}>
            <Image src={ovalDegrade} alt="" />
          </div>
        </div>
        <div className="u-hide-md_lg">
          <Image src={ovalDegradeBottom} alt="" />
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 3)
    .map((post) => post.meta);

  return {
    props: { posts },
  };
}

export default Home;
