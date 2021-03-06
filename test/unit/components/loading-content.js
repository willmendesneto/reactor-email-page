import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LoadingContent from '../../../src/js/components/loading-content';

describe('LoadingContent component', () => {
  let loadingContent;

  before(() => {
    loadingContent = shallow(<LoadingContent />);
  });

  it('should renders the content', () => {
    expect(loadingContent.find('.spinner').length).to.eql(1);
  });
});
