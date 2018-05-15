import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `test-npm-scripts`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TestNpmScripts extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'test-npm-scripts',
      },
    };
  }
}

window.customElements.define('test-npm-scripts', TestNpmScripts);
