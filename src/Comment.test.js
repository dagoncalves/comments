import React from 'react';
import Comment from './Comment';
import { render } from 'enzyme';

it( 'should render text', () => {
  const c = {
    comment: 'test'
  };

  const wrapper = render( <Comment comment={c} /> );
  expect( wrapper.text() ).toBe( 'test' );
} );

it( 'should render empty', () => {
  const wrapper = render( <Comment /> );
  expect( wrapper.text() ).toBe( '' );
} );
