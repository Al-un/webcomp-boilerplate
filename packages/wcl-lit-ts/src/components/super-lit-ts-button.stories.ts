import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { SuperButtonStories } from '@al-un/wcl-core/storybook/stories-lit';
import { SuperButtonStoryAttrs } from '@al-un/wcl-core/storybook/types';

import './super-lit-ts-button';

const Template: Story<SuperButtonStoryAttrs> = ({
  content,
  disabled,
  outline,
  theme,
  icon,
  onClick,
}) => html`<super-lit-ts-button
  .outline=${outline}
  .disabled=${disabled}
  .theme=${theme}
  @click=${onClick}
>
  ${icon ? html`<img slot="icon" src=${icon} />` : ''}
  ${content}</super-lit-ts-button
>`;

const { Default, componentMeta } = SuperButtonStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsButton' },
  Template
);
export { componentMeta as default, Default };
