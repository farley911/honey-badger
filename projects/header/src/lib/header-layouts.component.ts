import { Component } from "@angular/core";

@Component({
  selector: 'hb-header-layouts',
  template: `
    <section class="layouts">
      <h2>Layout 1</h2>
      <div class="wireframe" style="flex-direction: column">
        <section style="display: flex; flex-direction: row">
          <div style="display: flex; align-items: center; justify-content: center">Logo</div>
          <div style="flex:10">
            <h3>Heading</h3>
            <h4>Subheading</h4>
          </div>
        </section>
        <section>
          <div>Menu</div>
        </section>
      </div>

      <h2>Layout 2</h2>
      <div class="wireframe" style="flex-direction: column">
        <section style="display: flex; flex-direction: column; align-items: center">
          <div>Logo</div>
          <div style="flex:4">
            <h3>Heading</h3>
            <h4>Subheading</h4>
          </div>
        </section>
        <section>
          <div style="text-align: center">Menu</div>
        </section>
      </div>
    </section>
  `,
})
export default class HeaderLayoutsComponent {}
