import {
  LitElement,
  css,
  CSSResultGroup,
  html,
  unsafeCSS,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-input.scss';

@customElement('super-lit-ts-input')
export class SuperLitTsInput extends LitElement {
  static styles = unsafeCSS(scss);

  label?: string;
  value!: string | number;
  type!: string;
  // https://github.com/lit/lit-element/issues/1121
  // Replaced by https://medium.com/collaborne-engineering/litelement-two-way-data-binding-48aec4692f7e
  // @query('input', true) _inputElement!: HTMLInputElement;

  constructor() {
    super();

    this.value = '';
    this.type = 'text';
  }

  static get properties() {
    return {
      label: { type: String },
      value: { type: [String, Number] },
      type: { type: String },
    };
  }

  render(): TemplateResult {
    return html` ${this.label ? html`<label>${this.label}</label>` : ''}
    ${this.type === 'textarea'
      ? html`<textarea .value=${this.value} @input=${this.onInput}>
${this.value}</textarea
        >`
      : html`<input
          .value=${this.value}
          type=${this.type}
          @input=${this.onInput}
        />`}`;
  }

  onInput(event: InputEvent): void {
    event.stopImmediatePropagation();

    if (this.type === 'textarea') {
      const textArea = this.shadowRoot?.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      if (!textArea) {
        return;
      }

      this.value = textArea.value;
    } else {
      const inputEl = this.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      if (!inputEl) {
        return;
      }

      this.value = inputEl.value;
    }

    this.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: { value: this.value },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-input': SuperLitTsInput;
  }
}