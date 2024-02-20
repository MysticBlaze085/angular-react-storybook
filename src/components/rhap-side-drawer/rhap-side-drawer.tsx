import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rhap-side-drawer',
  styleUrl: 'rhap-side-drawer.css',
  shadow: true,
})
export class RhapSideDrawer {
  @Prop({reflect: true}) htitle = 'Default Title';
  @Prop({reflect: true}) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{this.htitle}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
