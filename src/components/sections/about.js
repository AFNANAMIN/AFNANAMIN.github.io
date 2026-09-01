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

  const skills = [
    'Kafka',
    'Pyspark',
    'Terraform',
    'Docker',
    'Python',
    'C++',
    'Superset',
    'Apache Airflow',
    'Apache Flink',
    'Apache Pinot',
    'Zookeeper',
    'Grafana',
    'MongoDB',
    'Postgres',
    'Apache Hive',
    'Apache HUDI',
    'AWS (S3, EC2, EKS, DMS, DynamoDB, Glue)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Afnan, a strategic data engineering leader with 7+ years of experience
              building the pipelines and platforms that businesses run on. I'm currently a{' '}
              <strong>Data Engineer</strong> at{' '}
              <a href="https://www.workhuman.com/" target="_blank" rel="noreferrer">
                Workhuman
              </a>{' '}
              in Dublin, Ireland, where I focus on cloud-native data infrastructure on AWS and
              modern streaming pipelines with Apache Flink.
            </p>

            <p>
              My path started at `NED University of Engineering & Technology` in Karachi, a 125+
              year old institution with a huge alumni network, where I studied Computer Science from
              2016-2020 on a fully-funded, merit-based HEC tuition scholarship. Alongside my
              studies, I volunteered with `Love for Data`, first as Director and then as Event
              Chairperson, organizing hackathons, conferences, and job fairs to grow interest in
              computer science.
            </p>

            <p>
              Since then, I've worked across{' '}
              <a href="https://www.workforcesoftware.com/" target="_blank" rel="noreferrer">
                an international technology firm
              </a>{' '}
              serving Fortune 500 companies,{' '}
              <a href="https://www.tpsworldwide.com/" target="_blank" rel="noreferrer">
                a fintech company
              </a>{' '}
              driving financial inclusion in Pakistan,{' '}
              <a href="https://www.lovefordata.com/" target="_blank" rel="noreferrer">
                an analytics startup
              </a>{' '}
              turning retail foot-traffic data into insight, and{' '}
              <a href="https://www.bazaartech.com/" target="_blank" rel="noreferrer">
                Bazaar Technologies
              </a>
              , a decacorn ecommerce startup, where I served as a Service Lead building the
              low-level architecture for a micro-services based, omnichannel API platform. I was
              also recently named a finalist for the Rising Star Award at the 2026 Diversity &
              Inclusion in Tech Awards.
            </p>

            <p>Here are a few tools and technologies I've been working with recently:</p>
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
