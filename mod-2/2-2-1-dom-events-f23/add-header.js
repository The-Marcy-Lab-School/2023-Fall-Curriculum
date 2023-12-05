const header = document.createElement('header');
header.innerHTML = `
  <nav style="margin-bottom: 20px;">
    <ul style="list-style: none; display: flex; gap: 1rem; margin: 0; padding: 0;">
      <li><a href="../0-basic-examples/index.html">basic examples</a></li>
      <li><a href="../1-event-propogation-delegation/">event propogation/delegation</a></li>
      <li><a href="../2-removing-listeners/">removing listeners</a></li>
      <li><a href="../turtle-walker/">turtle walker</a></li>
    </ul>
  </nav>
  <hr>
`

document.body.prepend(header);