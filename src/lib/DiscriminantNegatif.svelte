<script>
  export let delta;
  export let a;
  export let b;
</script>

<div class="node">
  <h3>Discriminant négatif: {delta}</h3>
  <p>Pas de racines réelles, mais deux racines complexes :</p>
  <ul>
    <li>
      Racine 1 = {-b / (2 * a)} + i {Math.sqrt(-delta) / (2 * a)}
    </li>
    <li>
      Racine 2 = {-b / (2 * a)} - i {Math.sqrt(-delta) / (2 * a)}
    </li>
  </ul>
</div>
