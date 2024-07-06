class DynHeader extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
        <link rel="stylesheet" href="/styles.css">
        <header>
        <h1>Oliver Potter</h1>
        <nav>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>
        </header>
        `
  }
}

class DynFooter extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
        <link rel="stylesheet" href="/styles.css">
        <footer>
            <p>&copy; 2024 Oliver Potter. All rights reserved.</p>
        </footer>
        `
  }
}

customElements.define('dyn-header', DynHeader)
customElements.define('dyn-footer', DynFooter)
