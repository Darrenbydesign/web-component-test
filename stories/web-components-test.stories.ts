import { html, TemplateResult } from 'lit';
import '../src/web-components-test.js';

export default {
  title: 'WebComponentsTest',
  component: 'web-components-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <web-components-test style="--web-components-test-background-color: ${backgroundColor}" .title=${title}></web-components-test>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
