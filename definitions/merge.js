// Merging static files
// Only CSS and JavaScript

// CSS
F.merge('/css/default.css', '/css/bootstrap.min.css', '/css/ui.css', '/css/default.css', '/widgets/*.css');

// JavaScript
F.merge('/js/default.js', '/js/jctajr.min.js', '/js/ui.js', '/js/widgets.js', '/js/default.js', '/widgets/*.js');

// JavaScript for developers
F.merge('/developer.js', '/js/jctajr.min.js', '/js/ui.js', '/js/developer.js');