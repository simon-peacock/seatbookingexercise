import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from 'Presentational/Button';
import TicketSelection from 'Presentational/TicketSelection';
import Container from 'Containers/Container';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button title={'Hello'} onClick={action('clicked')}>Hello Button</Button>)

storiesOf('Container', module)
  .add('default', () => <Container/>)

storiesOf('TicketSelection', module)
  .add('default', () => <TicketSelection onChange={action('changed')}/>)

