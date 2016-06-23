<gb-results>
  <div each="{ records }">
    <a href="#">
      <img src={ Array.isArray(allMeta[struct.image]) ? allMeta[struct.image][0] : allMeta[struct.image] } alt="" />
    </a>
    <a href="#">
      <p>{ allMeta[struct.title] }</p>
      <p>{ allMeta[struct.price] }</p>
    </a>
  </div>

  <script>
    this.struct = opts.config.structure;

    opts.flux.on(opts.flux.RESULTS, res => this.update({ records: res.records }));
  </script>
</gb-results>
