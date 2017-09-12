import React from 'react'
import Link from 'gatsby-link'
import Block from '../elements/small/Block/Block';
import Container from '../elements/small/Container/Container';
import ContentColumns from '../elements/small/ContentColumns/ContentColumns';
import { GridLayout, GridLayoutColumn, GridLayoutRow } from '../elements/small/GridLayout/GridLayout';
import Logo from '../elements/small/Logo/Logo';
import Overlay from '../elements/small/Overlay/Overlay';

import gloryImg from './assets/glory.jpg';
import skatingImg from './assets/skating.jpg';
import factoryImg from './assets/factorywoman.jpg';
import balloonsImg from './assets/balloons.jpg';
import subwayPlatformImg from './assets/subway.platform.jpg';
import carsImg from './assets/car.pig.pile.jpg';
import flexImg from './assets/afro.flex.jpg';

const colors = {
  red: '#921919',
  yellow: '#e0e22f',
  green: '#60965c',
  orange: '#a16d28',
  blue: '#0080ae',
  gray: '#666',
  purple: '#593963',
  cyan: '#00c0ff',
  white: '#fff',
  black: '#000'
}

const IndexPage = () => (
  <div>
    <Block border={true} full={true} styles={{
      backgroundColor: colors.cyan,
      color: colors.white
    }}>
      <Container stacked={true}>
        <Logo color="white" />
        <h2 style={{ marginTop: '1.5rem' }} className="h4">Making internet for <em className="js-audience-cycle">revolutionaries</em>.</h2>
        <ContentColumns styles={{ marginTop: '2rem', fontSize: '21px' }}>
          <p>I’m Dan Manchester, a web developer helping individuals, small businesses, &amp; organizations plan and execute their next digital success. In addition to my decade of development experience, I’m also a published writer and former teacher, so I can help you clarify your requirements, articulate necessary solutions, &amp; plan and build the digital future you need.</p>
          <p>Over the past decade I’ve worked one on one with poets and visual artists to build portfolio sites, as part of small teams collaborating with vineyards and nonprofits on e-commerce platforms, and, on large agency teams, led front end architecture and development for Fortune 500 enterprise-level marketing and transactional sites. You can read more about some of these projects below or contact me to get started on your next project.</p>
        </ContentColumns>
      </Container>
    </Block>

    <Block border={false} full={true}>
      <GridLayout variant="2-1">
        <GridLayoutColumn>
          <Block
            border={true}
            full={false}
            styles={{
              backgroundImage: `url(${flexImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              color: colors.white
            }}
            >
              <Overlay styles={{
                backgroundColor: colors.purple
              }}
            />
          </Block>
        </GridLayoutColumn>

        <GridLayoutColumn>
          <Block
            border={true}
            full={false}
            styles={{
              backgroundImage: `url(${factoryImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              color: colors.white
            }}
            >
              <Overlay styles={{
                backgroundColor: colors.yellow
              }}
            />
          </Block>

          <Block
            border={true}
            full={false}
            styles={{
              backgroundImage: `url(${gloryImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              color: colors.white
            }}
            >
              <Overlay styles={{
                backgroundColor: colors.red
              }}
            />
          </Block>
        </GridLayoutColumn>
      </GridLayout>
    </Block>

    <Block border={true} full={true} styles={{
      backgroundImage: `url(${carsImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: colors.white
      }}
    >
      <Overlay styles={{
        backgroundColor: colors.orange
      }} />
      <Container stacked={true}>
        <figure
          className="align-center"
          style={{
            maxWidth: '1200px'
          }}
        >
          <h2 className="h1 h1--large">
            “Do the best you can until you know better.
            <br />
            Then when you know better, do better.”
          </h2>
          <figcaption>
            <p className="h3 allcaps">— Maya Angelou</p>
          </figcaption>
        </figure>
      </Container>
    </Block>
  </div>
)

export default IndexPage
