// detector.js - runs in the MAIN world (page context)
(function() {
  const meteorInfo = {
    isMeteor: typeof Meteor !== 'undefined' && Meteor !== null,
    version: null,
    packages: []
  };

  if (meteorInfo.isMeteor) {
    try {
      meteorInfo.version = Meteor.release || 'Unknown version';
    } catch(e) {}

    if (typeof Package !== 'undefined') {
      try {
        const knownPackages = window.__METEOR_DETECTOR_PACKAGES__ || [];
        knownPackages.forEach(pkg => {
          if (Package[pkg]) meteorInfo.packages.push(pkg);
        });
      } catch(e) {}
    }
  }

  window.postMessage({ type: 'METEOR_DETECTED', payload: meteorInfo }, window.location.origin);
})();
