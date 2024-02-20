export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/MyComponent',
    tags: ['autodocs'],
    argTypes: {
      first: 'Test',
      middle: 'Middle',
      last: 'Last'
    },
};
const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;
export const MyComponent = Template.bind({});
MyComponent.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh'
};