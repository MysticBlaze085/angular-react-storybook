import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AngularUiComponent } from './angular-ui.component';
import { CommonModule } from '@angular/common';

// Define the metadata for the component
const meta: Meta = {
  title: 'Angular UI Component',
  component: AngularUiComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AngularUiComponent], // Ensure to import any required Angular modules
    }),
  ],
};

// Export the metadata to create the story
export default meta;
type Story = StoryObj<AngularUiComponent>;

export const Primary: Story = {
  args: {
    content: 'Example Content'
  },
};

