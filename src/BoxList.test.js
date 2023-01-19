import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import Box from './Box';

it('should render', ()=> {
    render(<BoxList />);
})

it('should match snapshot', ()=> {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should start with no boxes', ()=> {
    const result = render(<BoxList />);
    const box = result.container.querySelector('.Box');
    expect(box).not.toBeInTheDocument();
})

it('should add new box', ()=> {
    const result = render(<BoxList />);
    const {getByLabelText, queryByText} = result;
    const width = getByLabelText('Width');
    const height = getByLabelText('Height');
    const color = getByLabelText('Color');
    const btn = queryByText('Create Box');
    fireEvent.change(width, {target: {value: '200'}});
    fireEvent.change(height, {target: {value: '200'}});
    fireEvent.change(color, {target: {value: 'teal'}});
    fireEvent.click(btn);
    const box = result.container.querySelector('.Box');
    expect(box).toBeInTheDocument();
})

it('should delete box', ()=> {
    const result = render(<BoxList />);
    const {getByLabelText, queryByText, getByRole} = result;
    const width = getByLabelText('Width');
    const height = getByLabelText('Height');
    const color = getByLabelText('Color');
    const btn = queryByText('Create Box');
    
    fireEvent.change(width, {target: {value: '200'}});
    fireEvent.change(height, {target: {value: '200'}});
    fireEvent.change(color, {target: {value: 'teal'}});
    fireEvent.click(btn);
    const delBtn = getByRole('delete');

    const box = result.container.querySelector('.Box');
    expect(box).toBeInTheDocument();
    fireEvent.click(delBtn);
    expect(box).not.toBeInTheDocument();
})