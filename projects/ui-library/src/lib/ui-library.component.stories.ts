import { UiLibraryComponent } from './ui-library.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'My Component',
  decorators: [
    moduleMetadata({
      declarations: [UiLibraryComponent],
    }),
  ],
};

export const Default = () => ({
  component: UiLibraryComponent,
  template: '<lib-ui-library></lib-ui-library>',
});
