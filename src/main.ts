import { DOMContentLoaded } from './lib/spa/utils/dom-content-loaded';

import './styles/main.css';

// Events that happens after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);
} else {
  // `DOMContentLoaded` already fired
  DOMContentLoaded();
}
