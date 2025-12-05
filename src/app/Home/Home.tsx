import * as React from 'react';
import {
  PageSection,
  Content,
  ContentVariants,
} from '@patternfly/react-core';

const Home: React.FunctionComponent = () => (
  <PageSection>
    <Content component={ContentVariants.h1}>Home</Content>
    <Content component={ContentVariants.p}>
      Welcome to the RHOAI Dashboard User Research Prototype.
    </Content>
    <Content component={ContentVariants.p}>
      NOTE: This prototype is for user research purposes only and does not represent any commitment on the part of Red Hat.
    </Content>
  </PageSection>
);

export { Home };
