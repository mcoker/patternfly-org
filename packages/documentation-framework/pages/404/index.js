import React, { useEffect } from 'react';
import { Link } from '@patternfly/documentation-framework/components';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeader,
  EmptyState,
  EmptyStateBody,
  Grid,
  GridItem,
  PageSection,
  TextInput,
} from '@patternfly/react-core';
import { attachDocSearch } from '../../layouts/sideNavLayout/sideNavLayout';
import PathMissingIcon from './404.svg';
import PatternFlyIcon from './patternfly-flat.svg';
import GuidelinesIcon from './guidelines.svg';
import ComponentsIcon from './components.svg';
import ChartIcon from './chart.svg';
import './404.css';

const Card404 = ({ img, alt, title, body, link: { text, to } }) => (
  <GridItem xl={3} md={6} xs={12}>
    <Card style={{ height: '340px' }}>
      <CardHeader className="ws-404-card-header">
        <img src={img} alt={alt} width="64px" />
      </CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <CardFooter>
        <Link to={to}>{text}</Link>
      </CardFooter>
    </Card>
  </GridItem>
);

const Page404 = () => {
  const algolia = process.env.algolia;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (algolia) {
      attachDocSearch(algolia, '#ws-404-search', 1000);
    }
  });

  return (
    <PageSection>
      <EmptyState
        headingLevel="h1"
        titleText="404: That page no longer exists"
        variant="xl"
        icon={() => <img src={PathMissingIcon} alt="" width="128px" />}
      >
        Another page might have the information you need, so try searching
        PatternFly.
        <EmptyStateBody>
          <div id="ws-404-search-wrapper">
            <TextInput
              id="ws-404-search"
              type="text"
              placeholder="Search PatternFly"
            />
          </div>
        </EmptyStateBody>
      </EmptyState>
      <Grid hasGutter>
        <Card404
          img={PatternFlyIcon}
          alt="PatternFly icon"
          title="Getting started"
          body="Learn about designing and developing with PatternFly."
          link={{
            text: 'View getting started resources',
            to: '/get-started/about-patternfly',
          }}
        />
        <Card404
          img={GuidelinesIcon}
          alt="Guidelines icon"
          title="Guidelines"
          body="Check out PatternFly's design approach to icons, colors, and more."
          link={{
            text: 'View guidelines',
            to: '/design-foundations/colors',
          }}
        />
        <Card404
          img={ComponentsIcon}
          alt="Components icon"
          title="Components"
          body="Start creating your applications with components -- the building blocks of user interfaces."
          link={{
            text: 'View components',
            to: '/components/about-modal',
          }}
        />
        <Card404
          img={ChartIcon}
          alt="Chart icon"
          title="Charts"
          body="Visualize your facts and figures by designing the right charts for your data."
          link={{
            text: 'View charts',
            to: '/charts/about-charts',
          }}
        />
      </Grid>
      <div className="ws-404-button-wrapper">
        <Button variant="primary" component={Link} to="/">
          Return to home page
        </Button>
      </div>
    </PageSection>
  );
};

export default Page404;
