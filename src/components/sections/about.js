import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Kafka', 'Pyspark', 'Terraform', 'Docker', 'Python', 'C++','Superset','Apache Airflow','Apache Pinot','Zookeeper','Graffana','MongoDB','Postgres','Apache Hive','Apache HUDI','AWS (S3, EC2, EKS, DMS, DynamoDB, Glue)'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello! I'm Afnan, a software engineer who enjoys creating things that live on the internet and can scale with it. My interest in technology started back in 2016 the time when I was researching options for doing my bachelors. I was truly fascinated by the world of technology, It still awestruck me how an electric charges can signal for a yes or no digitally, these signals are are utilized using logical statements known as programming or coding.
            </p>
            <p>Since technology and particularly how software works became my obsession, my dream of becoming a Software Engineer started, living in Karachi there was no better place for me to live this dream other than `NED University` a 125+ years old Engineering University and a huge alumni network.
In December 2016, I got admission at NED Universiy at the department of Computer Sciences, the wishes, blood and sweat produced its results.
            </p>

<p>
With a very bright time acedemically, I also served volunteerily as a Director and then as a Event Chairperson at `Love for Data` from 2019 - 2020, my focus was to promote computer sciences and drive interests by organizing hackathons, conferences, seminars and job-fairs. I was awarded fully-funded tution scholarship by HEC based on merit and academic performance.



</p>


            

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://www.workforcesoftware.com/">An International Technology firm,</a> serving many Fortune`500 companies.{' '}
              <a href="https://www.tpsworldwide.com/">A fintech Company</a>, working on financial inclusion of masses in Pakistan and digitalizing traditional saving methods.{' '}
              <a href="https://www.lovefordata.com/">An analytics start-up</a>, working on retail foot-traffic data providing solutions for better profits and customer experience.{' '}
              <a href="https://www.bazaartech.com/">An Ecommerce startup </a> ,a decacorn enterprise startup, which keeps on adding world class products to its fleet. Here working as a Service Lead for a low-level architecture and development of micro-services based API platform for omnichannel support and its developer docs project. As a Service Lead and  Software Engineer || at Bazaar, I was responsible for development related to data engineering, gather data and managing an advance big data platform.{' '}
             
            </p>

            

            <p>Here are a few tool and technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
