<gb-breadcrumbs>
  <ul class="gb-breadcrumbs { opts.style() }">
    <li if={ !hideQuery && originalQuery }>{ originalQuery }</li>
    <li if={ !hideRefinements } each={ nav in selected }>
      <ul class="gb-nav-crumb">
        <gb-refinement-crumb each={ ref in nav.refinements }></gb-refinement-crumb>
      </ul>
    </li>
  </ul>

  <script>
    import './gb-refinement-crumb.tag';
    import { Breadcrumbs } from './gb-breadcrumbs';
    this.mixin(new Breadcrumbs().__proto__);
  </script>

  <style scoped>
    .gb-stylish.gb-breadcrumbs {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: flex-start;
    }
  </style>
</gb-breadcrumbs>
