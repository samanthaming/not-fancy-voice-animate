# Github

```html
<!-- GitHub -->
<div class="github-code">
  <i class="fa fa-github" aria-hidden="true"></i>
  <a href="https://github.com/samanthaming/not-fancy-NAME" target="_blank">
    View code on GitHub
  </a>
</div>
```

## Github Images

### HTML

```html
<img :src="`https://raw.githubusercontent.com/samanthaming/not-fancy-pokemon-speaks/master/images/${pokemon.file}.png`">
```

### CSS

```css
background: url("https://raw.githubusercontent.com/samanthaming/not-fancy-pokemon-speaks/master/images/background.png") no-repeat center center fixed;
```

### JS

```javascript
const githubPath = "https://samanthaming.github.io/not-fancy-pokemon-speaks/";

this.playSound(`${githubPath}sounds/${selectedPokemon.file}.mp3`)
```
