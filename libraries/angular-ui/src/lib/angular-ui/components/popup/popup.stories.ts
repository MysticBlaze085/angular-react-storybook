import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PopupContainerComponent } from './popup-container.component';
import { PopupService } from './popup.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<PopupContainerComponent> = {
  title: 'Popup Container',
  component: PopupContainerComponent,
  decorators: [
    moduleMetadata({
      providers: [PopupService],
      imports: [BrowserAnimationsModule, CommonModule, PopupContainerComponent]
    }),
  ],
};

export default meta;
type Story = StoryObj<PopupContainerComponent>;
export const Default: Story = {};