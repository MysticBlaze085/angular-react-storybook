import { Component, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'rhap-side-drawer',
  styleUrl: 'rhap-side-drawer.css',
  shadow: true,
})
export class RhapSideDrawer {
  @State() showContactInfo = false;

  @Prop({reflect: true}) htitle = 'Default Title';
  @Prop({reflect: true, mutable: true}) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  async open(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.opened = true;
      resolve();
    });
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 5555555555</li>
            <li>E-Mail: <a href="mailto:something@exmple.com">something@exmple.com</a></li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
      <aside>
        <header>
          <h1>{this.htitle}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active': ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContactInfo ? 'active': ''} onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}
