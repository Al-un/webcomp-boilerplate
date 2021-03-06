import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { SuperMemoListStories } from '@al-un/wcl-core/storybook/stories-lit';
import { SuperMemoListStoryAttrs } from '@al-un/wcl-core/storybook/types';

import './super-lit-ts-memo-list';

const Template: Story<SuperMemoListStoryAttrs> = ({ memos, onAdd, onDelete }) =>
  html`<super-lit-ts-memo-list
    .memos=${memos}
    @add=${onAdd}
    @delete=${onDelete}
  ></super-lit-ts-memo-list>`;

const { Default, componentMeta } = SuperMemoListStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsMemoList' },
  Template
);
export { componentMeta as default, Default };
