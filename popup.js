async function updatePopup() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  chrome.runtime.sendMessage(
    { action: 'getMeteorInfo', tabId: tab.id },
    (info) => {
      const content = document.getElementById('content');
      content.textContent = '';

      if (info && info.isMeteor) {
        const status = document.createElement('div');
        status.className = 'status meteor';

        const label = document.createElement('div');
        label.innerHTML = 'This is a <strong>Meteor</strong> app!';
        status.appendChild(label);

        if (info.version) {
          const version = document.createElement('div');
          version.className = 'version';
          version.textContent = info.version;
          status.appendChild(version);
        }

        content.appendChild(status);

        if (info.packages && info.packages.length > 0) {
          const packages = document.createElement('div');
          packages.className = 'packages';

          const title = document.createElement('div');
          title.className = 'packages-title';
          title.textContent = 'Detected packages:';
          packages.appendChild(title);

          const list = document.createElement('div');
          list.className = 'package-list';
          info.packages.forEach(p => {
            const span = document.createElement('span');
            span.className = 'package';
            span.textContent = p;
            list.appendChild(span);
          });
          packages.appendChild(list);

          content.appendChild(packages);
        }
      } else {
        const status = document.createElement('div');
        status.className = 'status not-meteor';

        const span = document.createElement('span');
        span.className = 'not-detected';
        span.textContent = 'This is not a Meteor app.';
        status.appendChild(span);

        content.appendChild(status);
      }
    }
  );
}

updatePopup();
