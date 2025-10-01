import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { label: 'Click me' },
};
