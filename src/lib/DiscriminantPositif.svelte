<script>
  export let delta;
  export let a;
  export let b;
</script>

<div class="node">
  <h3>Discriminant positif: {delta}</h3>
  <p>Deux racines réelles distinctes :</p>
  <ul>
    <li>Racine 1 = {(-b + Math.sqrt(delta)) / (2 * a)}</li>
    <li>Racine 2 = {(-b - Math.sqrt(delta)) / (2 * a)}</li>
  </ul>
</div>
