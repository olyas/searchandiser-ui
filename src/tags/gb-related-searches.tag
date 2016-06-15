<gb-related-searches>
  <h3>Related Queries:</h3>
  <ul class="gb-list">
    <li each="{ related in relatedSearches }">
      <a href="#" onclick="{ send }">{ related }</a>
    </li>
  </ul>

  <script>
    opts.flux.on(opts.flux.RESULTS, () => this.update({ relatedSearches: opts.flux.results.relatedQueries }));
    this.send = (event) => opts.flux.search(event.target.text)
      .then(() => opts.flux.emit('override_query'));
  </script>
</gb-related-searches>
